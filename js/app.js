(function () {
  var C = window.CONFIG, root = document.documentElement, body = document.body;
  var page = body.getAttribute("data-page") || "index.html";
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var nl = function (s) { return esc(s).replace(/\n/g, "<br>"); };
  var ARR_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>';
  var ARR_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>';

  /* ---------- Parser link: Google Drive / YouTube / Dropbox ---------- */
  function parse(u) {
    u = (u || "").trim(); if (!u) return {};
    var m;
    if (/(drive|docs)\.google\.com/.test(u)) {
      m = u.match(/\/d\/([\w-]+)/) || u.match(/[?&]id=([\w-]+)/);
      if (m) return { type: "img", img: "https://drive.google.com/thumbnail?id=" + m[1] + "&sz=w1600", alt: "https://lh3.googleusercontent.com/d/" + m[1] + "=w1600" };
    }
    m = u.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/)([\w-]{11})/);
    if (m && /youtu/.test(u)) return { type: "yt", embed: "https://www.youtube-nocookie.com/embed/" + m[1] + "?autoplay=1&rel=0", img: "https://i.ytimg.com/vi/" + m[1] + "/hqdefault.jpg" };
    if (/dropbox\.com/.test(u)) {
      var d = u.replace(/([?&])dl=0&?/, "$1").replace(/[?&]$/, "");
      d += (d.indexOf("?") < 0 ? "?" : "&") + "raw=1";
      return { type: "file", src: d };
    }
    return /\.(mp4|webm|ogg)(\?|$)/i.test(u) ? { type: "file", src: u } : { type: "img", img: u };
  }
  function thumbOf(it) { var t = parse(it.thumb); if (t.img) return t.img; var v = parse(it.video); return v.img || ""; }

  /* ---------- Shell: header, menu, footer ---------- */
  var hdr = $("#hdr"), mnav = $("#mnav");
  hdr.innerHTML = '<a class="brand" href="index.html"><img src="img/logo.png" alt="Logo ARJUNA" width="60" height="60"><span class="brand-full">' + esc(C.title) + '</span><span class="brand-short">' + esc(C.shortTitle) + '</span></a>' +
    '<div class="hdr-right"><button class="tbtn" id="themeBtn" aria-label="Ganti mode gelap/terang">' + SUN + '<img class="moon" src="img/sabit.png" alt="" width="30" height="30"></button>' +
    '<nav class="nav" aria-label="Menu utama">' + C.nav.map(function (n) { return '<a href="' + n[0] + '" data-t="' + esc(n[1]) + '"' + (n[0] === page ? ' class="on"' : "") + ">" + esc(n[1]) + "</a>"; }).join("") +
    '</nav><button class="menu-btn" id="menuBtn" aria-controls="mnav" aria-expanded="false">Menu</button></div>';
  mnav.innerHTML = C.nav.map(function (n, i) { return '<a href="' + n[0] + '" style="--i:' + i + '"' + (n[0] === page ? ' class="on"' : "") + ">" + esc(n[1]) + "</a>"; }).join("");
  var foot = $("#foot"); if (foot) foot.textContent = C.copyright.replace("{year}", new Date().getFullYear());

  var menuBtn = $("#menuBtn");
  function menu(open) {
    mnav.classList.toggle("open", open); menuBtn.textContent = open ? "Close" : "Menu"; menuBtn.setAttribute("aria-expanded", open);
    body.style.overflow = open ? "hidden" : "";
  }
  menuBtn.addEventListener("click", function () { menu(!mnav.classList.contains("open")); });
  mnav.addEventListener("click", function (e) { if (e.target.tagName === "A") menu(false); });
  // Otomatis jadi menu hamburger bila nav tidak muat (tanpa turun baris)
  function fit() { hdr.classList.remove("compact"); if (hdr.scrollWidth > hdr.clientWidth + 1) hdr.classList.add("compact"); else menu(false); }
  addEventListener("resize", fit); fit(); if (document.fonts) document.fonts.ready.then(fit);

  /* ---------- Tema (wipe kanan atas -> kiri bawah) ---------- */
  function setTheme(t) { root.setAttribute("data-theme", t); try { localStorage.setItem("theme", t); } catch (e) {} document.dispatchEvent(new Event("themechange")); }
  $("#themeBtn").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    if (!document.startViewTransition || reduce) return setTheme(next);
    var W = innerWidth, H = innerHeight, M = 50;
    var poly = function (k) { return "polygon(" + (W + M) + "px " + -M + "px," + (W - k - M) + "px " + -M + "px," + (W + M) + "px " + (k + M) + "px)"; };
    document.startViewTransition(function () { setTheme(next); }).ready.then(function () {
      root.animate({ clipPath: [poly(0), poly(W + H + 2 * M)] }, { duration: 800, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" });
    });
  });

  /* ---------- Isi dinamis dari config ---------- */
  var teamSrc = parse(C.teamPhoto).img;
  $$("[data-team]").forEach(function (i) { i.src = teamSrc || i.getAttribute("data-fallback"); });
  $$("[data-about-intro]").forEach(function (e) { e.textContent = C.about.intro; });
  $$("[data-flipbook]").forEach(function (b) {
    if (C.flipbookUrl) b.innerHTML = '<iframe class="frame" src="' + esc(C.flipbookUrl) + '" allowfullscreen loading="lazy" title="Artikel"></iframe>';
  });
  $$("[data-suara]").forEach(function (e) { e.textContent = C.suaraIntro; });
  function rich(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>"); }
  $$("[data-mading]").forEach(function (box) {
    var M = C.madingGallery, home = box.getAttribute("data-mading") === "home";
    var blocks = home ? M.blocks.slice(0, M.homeCount) : M.blocks;
    var h = home ? "" : '<h2 class="m-title reveal">' + esc(M.title) + "</h2>";
    h += blocks.map(function (s) { return '<div class="txt reveal"><h3>' + esc(s[0]) + "</h3><p>" + rich(s[1]) + "</p></div>"; }).join("");
    if (!home) h += '<h2 class="m-title2 reveal">' + esc(M.title2) + "</h2>" + M.paragraphs.map(function (p) { return '<div class="txt para reveal"><p>' + rich(p) + "</p></div>"; }).join("");
    box.innerHTML = h;
  });
  $$("[data-flip-link]").forEach(function (l) { if (C.flipbookUrl) l.href = C.flipbookUrl; else l.style.display = "none"; });
  var ab = $("#aboutBody");
  if (ab) { var a = C.about; ab.innerHTML = '<h2>Visi :</h2><p>' + esc(a.visi) + "</p><h2>Misi :</h2><ol>" + a.misi.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ol><h2>Motivasi Kami</h2><p>" + nl(a.motivasi) + "</p><h2>Motto Tim</h2><p>" + esc(a.motto) + "</p><h2>Identitas Tim</h2><dl>" + a.identitas.map(function (r) { return "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>"; }).join("") + "</dl>"; }

  /* Artikel: grid otomatis dari Web App Apps Script (opsional) */
  var aw = $("#artikelFrame");
  if (aw && C.artikelWebAppUrl) {
    var setSrc = function () { aw.innerHTML = '<iframe class="frame" style="aspect-ratio:auto;height:80vh" src="' + esc(C.artikelWebAppUrl) + (C.artikelWebAppUrl.indexOf("?") < 0 ? "?" : "&") + "theme=" + root.getAttribute("data-theme") + '" title="Daftar artikel"></iframe>'; };
    setSrc(); document.addEventListener("themechange", setSrc);
  }

  /* Sponsor: pangkas ruang kosong di sekitar logo agar logo tepat di tengah kotak */
  function trimLogo(im) {
    if (im.getAttribute("data-t") || !im.hasAttribute("crossorigin")) return;
    im.setAttribute("data-t", "1");
    try {
      var w = im.naturalWidth, h = im.naturalHeight; if (!w || !h) return;
      var s = Math.min(1, 700 / Math.max(w, h)), cw = Math.max(1, Math.round(w * s)), ch = Math.max(1, Math.round(h * s));
      var c = document.createElement("canvas"); c.width = cw; c.height = ch;
      var x = c.getContext("2d", { willReadFrequently: true }); x.drawImage(im, 0, 0, cw, ch);
      var d = x.getImageData(0, 0, cw, ch).data;
      var cs = [[0, 0], [cw - 1, 0], [0, ch - 1], [cw - 1, ch - 1]].map(function (q) { var o = (q[1] * cw + q[0]) * 4; return [d[o], d[o + 1], d[o + 2], d[o + 3]]; });
      var bg = cs.every(function (p) { return p[3] > 240 && Math.abs(p[0] - cs[0][0]) + Math.abs(p[1] - cs[0][1]) + Math.abs(p[2] - cs[0][2]) < 30; }) ? cs[0] : null;
      var x0 = cw, y0 = ch, x1 = -1, y1 = -1;
      for (var yy = 0; yy < ch; yy++) for (var xx = 0; xx < cw; xx++) {
        var o = (yy * cw + xx) * 4, on = bg ? d[o + 3] > 20 && Math.abs(d[o] - bg[0]) + Math.abs(d[o + 1] - bg[1]) + Math.abs(d[o + 2] - bg[2]) > 60 : d[o + 3] > 20;
        if (on) { if (xx < x0) x0 = xx; if (xx > x1) x1 = xx; if (yy < y0) y0 = yy; if (yy > y1) y1 = yy; }
      }
      if (x1 < 0) return;
      var bw = x1 - x0 + 1, bh = y1 - y0 + 1, c2 = document.createElement("canvas"); c2.width = bw; c2.height = bh;
      c2.getContext("2d").drawImage(c, x0, y0, bw, bh, 0, 0, bw, bh);
      im.src = c2.toDataURL("image/png");
    } catch (e) {}
  }
  /* Sponsor */
  var band = $("#band");
  if (band) {
    var tile = C.sponsors.map(function (s) {
      var p = parse(s.logo), im = p.img;
      return '<div class="logo"' + (s.tile ? ' style="background:' + esc(s.tile) + '"' : "") + ">" + (im ? '<img class="sp" crossorigin="anonymous" src="' + esc(im) + '" data-raw="' + esc(im) + '" data-alt="' + esc(p.alt || "") + '" alt="' + esc(s.name) + '">' : "<span>" + esc(s.name) + "</span>") + "</div>";
    }).join("");
    band.innerHTML = '<div class="track">' + tile + '</div><div class="track" aria-hidden="true">' + tile + "</div>";
    $$("img.sp", band).forEach(function (im) {
      im.addEventListener("load", function () { trimLogo(im); });
      im.addEventListener("error", function () {
        if (im.hasAttribute("crossorigin")) { im.removeAttribute("crossorigin"); im.src = im.getAttribute("data-raw"); } else imgErr(im);
      });
    });
    band.addEventListener("touchstart", function () { band.classList.add("hold"); }, { passive: true });
    ["touchend", "touchcancel"].forEach(function (n) { band.addEventListener(n, function () { band.classList.remove("hold"); }); });
    band.addEventListener("contextmenu", function (e) { e.preventDefault(); });
  }

  /* ---------- Modal video ---------- */
  var modal = document.createElement("div");
  modal.className = "modal"; modal.innerHTML = '<div class="box"><button class="x" aria-label="Tutup">Tutup ✕</button><div class="slot"></div></div>';
  body.appendChild(modal);
  var slot = $(".slot", modal), modalOpen = false;
  function closeModal() { modal.classList.remove("open"); slot.innerHTML = ""; modalOpen = false; body.style.overflow = ""; }
  modal.addEventListener("click", function (e) { if (e.target === modal || e.target.className === "x") closeModal(); });
  addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
  function openVideo(url) {
    var v = parse(url); if (!v.type || v.type === "img") return;
    slot.innerHTML = v.type === "yt" ? '<iframe src="' + v.embed + '" allow="autoplay;encrypted-media;fullscreen" allowfullscreen></iframe>' : '<video src="' + esc(v.src) + '" controls autoplay playsinline></video>';
    modal.classList.add("open"); modalOpen = true; body.style.overflow = "hidden";
  }
  var PLAY = '<div class="playbtn"><i><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></i></div>';

  /* ---------- Slider dengan animasi page-turn (lipatan kertas diagonal) ---------- */
  window.imgErr = function (im) {
    var al = im.getAttribute("data-alt");
    if (al && im.getAttribute("src") !== al) { im.removeAttribute("data-alt"); im.src = al; } else im.style.display = "none";
  };
  function content(it) {
    var t = thumbOf(it), v = parse(it.video), h = "";
    if (t) h = '<img src="' + esc(t) + '" data-alt="' + esc(parse(it.thumb).alt || "") + '" alt="' + esc(it.head || it.title || "") + '" onerror="imgErr(this)">';
    else if (v.type === "file") h = '<video src="' + esc(v.src) + '#t=1" preload="metadata" muted playsinline></video>';
    return h + (it.video ? PLAY : "");
  }
  function Slider(host, items, o) {
    o = o || {};
    var INT = o.interval || 10000, n = items.length, i = 0, busy = false, ms = 0, last = performance.now(), vis = true;
    host.innerHTML = '<div class="media"><div class="ly base"></div><div class="ly rest"></div><div class="fw"><div class="ly flap"></div></div></div><div class="prog"><i></i></div><div class="cap"><h3 class="t"></h3><div class="ctr"><button class="prev" aria-label="Sebelumnya">' + ARR_L + '</button><span class="num"></span><button class="next" aria-label="Berikutnya">' + ARR_R + '</button></div></div><p class="sub t"></p>';
    var media = $(".media", host), base = $(".base", host), rest = $(".rest", host), flap = $(".flap", host), bar = $(".prog i", host), fw = $(".fw", host);
    var tEls = $$(".t", host).concat(o.side ? $$(".t", o.side) : []);
    function setText() {
      var s = items[i];
      $("h3", host).textContent = s.category || s.title || ""; $(".sub", host).innerHTML = "<b>Featured</b> · " + esc(s.tags || "");
      if (o.side) { $(".h", o.side).textContent = s.head || ""; $(".p", o.side).textContent = s.text || ""; }
    }
    function num() { $(".num", host).textContent = (i + 1) + "/" + n; }
    function fadeText() {
      tEls.forEach(function (e) { e.classList.add("fo"); });
      setTimeout(function () { setText(); tEls.forEach(function (e) { e.classList.remove("fo"); }); }, reduce ? 0 : 420);
    }
    function go(step) {
      if (busy || n < 2) return; busy = true; ms = 0;
      var fwd = step > 0, W = media.clientWidth, H = media.clientHeight, M = 60, K = W + H + 2 * M;
      var oldHTML = base.innerHTML;
      i = (i + step + n) % n; base.innerHTML = content(items[i]); num(); fadeText();
      if (reduce) { busy = false; return; }
      fw.classList.add("on"); rest.innerHTML = oldHTML; flap.innerHTML = oldHTML + '<i class="paper"></i>';
      var P = function (p) { return "polygon(" + p.map(function (q) { return q[0] + "px " + q[1] + "px"; }).join(",") + ")"; };
      var t0 = performance.now(), D = 1100;
      (function f(now) {
        var p = Math.min((now - t0) / D, 1), e = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2, k = e * K;
        if (fwd) {  // lipat dari kanan atas ke kiri bawah
          rest.style.clipPath = P([[W + M, k + M], [W - k - M, -M], [-M, -M], [-M, H + M], [W + M, H + M]]);
          flap.style.clipPath = P([[W + M, -M], [W - k - M, -M], [W + M, k + M]]);
          flap.style.transform = "matrix(0,1,1,0," + (W - k) + "," + (-(W - k)) + ")";
        } else {    // lipat dari kiri atas ke kanan bawah
          rest.style.clipPath = P([[-M, k + M], [k + M, -M], [W + M, -M], [W + M, H + M], [-M, H + M]]);
          flap.style.clipPath = P([[-M, -M], [k + M, -M], [-M, k + M]]);
          flap.style.transform = "matrix(0,-1,-1,0," + k + "," + k + ")";
        }
        if (p < 1) requestAnimationFrame(f);
        else { fw.classList.remove("on"); rest.innerHTML = ""; flap.innerHTML = ""; rest.style.clipPath = flap.style.clipPath = flap.style.transform = ""; busy = false; }
      })(t0);
    }
    $(".prev", host).addEventListener("click", function () { go(-1); });
    $(".next", host).addEventListener("click", function () { go(1); });
    media.addEventListener("click", function () { if (items[i].video) openVideo(items[i].video); });
    new IntersectionObserver(function (e) { vis = e[0].isIntersecting; }).observe(host);
    (function loop(now) {
      var d = Math.min(now - last, 100); last = now;
      if (vis && !busy && !modalOpen && !document.hidden && n > 1) { ms += d; if (ms >= INT) go(1); }
      bar.style.transform = "scaleX(" + Math.min(ms / INT, 1) + ")";
      requestAnimationFrame(loop);
    })(last);
    base.innerHTML = content(items[0]); setText(); num();
  }
  var ds = $("#docSlider");
  if (ds) Slider(ds, C.dokumenter, { side: $("#docSide") });

  /* ---------- Blok video (Dokumenter) & BTS (Mading Gallery) ---------- */
  function vblock(v, cap) {
    return '<div class="doc reveal"><div><div class="media" data-v="' + esc(v.video) + '">' + content(v) + "</div>" +
      (cap ? '<div class="rule"></div><div class="cap"><h3>' + esc(v.category) + '</h3></div><p class="sub"><b>Featured</b> · ' + esc(v.tags) + "</p>" : "") +
      '</div><div class="side"><div><h2 class="h">' + esc(v.head) + '</h2><p class="p">' + esc(v.text) + "</p></div></div></div>";
  }
  function vclick(el) { el.addEventListener("click", function (e) { var m = e.target.closest("[data-v]"); if (m && m.getAttribute("data-v")) openVideo(m.getAttribute("data-v")); }); }
  var dp = $("#docPage");
  if (dp) { dp.innerHTML = vblock(C.dokumenterPage.main, true); vclick(dp); }
  var bb = $("#btsBox");
  if (bb) {
    var G = C.madingGallery;
    bb.innerHTML = '<h2 class="sec-title reveal" style="margin-top:6rem">' + esc(G.btsTitle) + "</h2>" + vblock(G.bts, false) +
      '<h2 class="sec-title reveal" style="margin-top:6rem">' + esc(G.photoTitle) + '</h2><div class="photos reveal"><div class="ph pl" id="phL"></div><div class="ph pr" id="phR"></div></div>';
    vclick(bb);
    var mapPh = function (x) { return x.items.map(function (p) { return { thumb: p.src, title: p.title || G.photoCaption, tags: p.tags || G.photoTags }; }); };
    Slider($("#phL"), mapPh(G.photosLeft), { interval: G.photosLeft.interval });
    Slider($("#phR"), mapPh(G.photosRight), { interval: G.photosRight.interval });
  }

  /* ---------- Scroll reveal ---------- */
  var lastY = scrollY, dir = 1;
  addEventListener("scroll", function () { dir = scrollY >= lastY ? 1 : -1; lastY = scrollY; }, { passive: true });
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      var el = en.target;
      if (en.isIntersecting) {
        el.classList.add("nt"); el.style.setProperty("--ry", (dir > 0 ? 28 : -28) + "px"); void el.offsetWidth; el.classList.remove("nt");
        requestAnimationFrame(function () { el.classList.add("in"); });
        setTimeout(function () { el.classList.add("done"); }, 900);
      } else { el.style.setProperty("--ry", (dir > 0 ? -28 : 28) + "px"); el.classList.remove("in", "done"); }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
  $$(".reveal").forEach(function (el) { io.observe(el); });
})();
