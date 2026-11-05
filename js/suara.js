(function () {
  var KEY = "suara_skapsa_ratings";
  var $ = function (id) { return document.getElementById(id); };
  var rating = 0;

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }
  function save(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); return true; } catch (e) { return false; }
  }
  function msg(t) { $("msg").textContent = t; }

  // bintang
  var stars = [].slice.call(document.querySelectorAll("#stars button"));
  function paint(n) { stars.forEach(function (b, i) { b.classList.toggle("f", i < n); b.textContent = i < n ? "★" : "☆"; }); }
  stars.forEach(function (b, i) {
    b.addEventListener("click", function () { rating = i + 1; paint(rating); msg(""); });
    b.addEventListener("mouseenter", function () { paint(i + 1); });
    b.addEventListener("focus", function () { paint(i + 1); });
  });
  $("stars").addEventListener("mouseleave", function () { paint(rating); });
  paint(0);

  function render() {
    var d = load(), counts = [0, 0, 0, 0, 0, 0], sum = 0;
    d.forEach(function (r) { counts[r.rating]++; sum += r.rating; });
    $("avg").textContent = d.length ? (sum / d.length).toFixed(2) : "0.00";
    $("total").textContent = d.length + " penilaian";
    for (var s = 5; s >= 1; s--) {
      $("c" + s).textContent = counts[s];
      $("p" + s).style.width = (d.length ? (counts[s] / d.length) * 100 : 0) + "%";
    }
  }

  function clearForm() { $("nama").value = ""; $("komentar").value = ""; rating = 0; paint(0); }

  $("kirim").addEventListener("click", function () {
    if (!rating) return msg("Pilih nilai 1–5 bintang dulu sebelum mengirim.");
    var d = load();
    d.push({ nama: $("nama").value.trim(), komentar: $("komentar").value.trim(), rating: rating, waktu: new Date().toISOString() });
    if (!save(d)) return msg("Data gagal disimpan. Pastikan penyimpanan browser tidak diblokir.");
    clearForm(); render(); msg("Terima kasih, penilaianmu tersimpan.");
  });
  $("bersih").addEventListener("click", function () { clearForm(); msg(""); });

  $("export").addEventListener("click", function () {
    var d = load();
    if (!d.length) return msg("Belum ada data untuk diekspor.");
    var q = function (v) { v = String(v == null ? "" : v); if (/^[=+\-@]/.test(v)) v = "'" + v; return '"' + v.replace(/"/g, '""') + '"'; };
    var rows = [["Waktu", "Nama", "Nilai", "Komentar"].map(q).join(",")];
    d.forEach(function (r) { rows.push([r.waktu, r.nama, r.rating, r.komentar].map(q).join(",")); });
    var blob = new Blob(["\ufeff" + rows.join("\r\n")], { type: "text/csv;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "suara-skapsa-" + new Date().toISOString().slice(0, 10) + ".csv";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  });

  $("reset").addEventListener("click", function () {
    if (!confirm("Hapus semua penilaian yang tersimpan di perangkat ini?")) return;
    try { localStorage.removeItem(KEY); } catch (e) {}
    render(); msg("Semua data dihapus.");
  });

  render();
})();
