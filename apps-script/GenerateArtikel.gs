/**
 * GENERATE HALAMAN ARTIKEL DARI FOLDER GOOGLE DRIVE
 * Hasil: file HTML berisi grid kotak (1 kotak = 1 file), judul = nama file asli, klik = buka file di Drive.
 * Tampilan memakai css/style.css dan js/app.js website (header, mode gelap/terang, footer ikut otomatis).
 */
const SETTINGS = {
  FOLDER_ID: 'GANTI_DENGAN_ID_FOLDER',   // ID folder = bagian terakhir URL folder Drive
  OUTPUT_FILE_NAME: 'artikel.html',      // <<< GANTI NAMA FILE HASIL DI SINI
  PAGE_TITLE: 'Artikel',
  REMOVE_EXTENSION: true,                // true: "Berita 1.pdf" -> "Berita 1"
  SORT: 'NAME_ASC',                      // NAME_ASC | NAME_DESC | DATE_DESC | DATE_ASC
  ALLOWED_EXT: ['pdf', 'docx', 'doc'],   // [] = semua jenis file
  SHOW_THUMBNAIL: true,                  // true: tampilkan pratinjau halaman pertama sebagai latar kotak
  AUTO_SHARE: true                       // true: file otomatis "Siapa saja yang memiliki link bisa melihat"
};

function generateArtikelHtml() {
  const folder = DriveApp.getFolderById(SETTINGS.FOLDER_ID);
  const it = folder.getFiles(), files = [];
  while (it.hasNext()) {
    const f = it.next(), name = f.getName();
    if (name === SETTINGS.OUTPUT_FILE_NAME) continue;
    const ext = (name.split('.').pop() || '').toLowerCase();
    if (SETTINGS.ALLOWED_EXT.length && SETTINGS.ALLOWED_EXT.indexOf(ext) < 0) continue;
    if (SETTINGS.AUTO_SHARE) {
      try { f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); } catch (e) {}
    }
    files.push({ id: f.getId(), url: f.getUrl(), name: name, date: f.getLastUpdated().getTime() });
  }
  const cmp = {
    NAME_ASC: (a, b) => a.name.localeCompare(b.name, 'id', { numeric: true }),
    NAME_DESC: (a, b) => b.name.localeCompare(a.name, 'id', { numeric: true }),
    DATE_DESC: (a, b) => b.date - a.date,
    DATE_ASC: (a, b) => a.date - b.date
  }[SETTINGS.SORT] || ((a, b) => 0);
  files.sort(cmp);

  const html = buildPage_(files);
  const existing = folder.getFilesByName(SETTINGS.OUTPUT_FILE_NAME);
  if (existing.hasNext()) existing.next().setContent(html);
  else folder.createFile(SETTINGS.OUTPUT_FILE_NAME, html, MimeType.HTML);
  Logger.log('Selesai: %s artikel -> %s', files.length, SETTINGS.OUTPUT_FILE_NAME);
}

function tiles_(files) {
  return files.map(f => {
    const title = esc_(SETTINGS.REMOVE_EXTENSION ? f.name.replace(/\.[^.]+$/, '') : f.name);
    const th = SETTINGS.SHOW_THUMBNAIL ? ' thumb" style="--img:url(https://drive.google.com/thumbnail?id=' + f.id + '&sz=w400)' : '';
    return '<a class="art' + th + '" href="' + f.url + '" target="_blank" rel="noopener"><span>' + title + '</span></a>';
  }).join('\n');
}
function esc_(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

function buildPage_(files) {
  return '<!doctype html><html lang="id" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>' + esc_(SETTINGS.PAGE_TITLE) + ' | Mading Skapsa - Roots to Future</title><link rel="icon" href="img/favicon.png">' +
    '<script>try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}</script>' +
    '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="css/style.css"></head>' +
    '<body data-page="artikel.html"><header class="hdr" id="hdr"></header><nav class="mnav" id="mnav"></nav><main><section class="sec"><div class="wrap">' +
    '<h2 class="sec-title reveal">' + esc_(SETTINGS.PAGE_TITLE) + '</h2><div class="art-grid reveal">\n' + tiles_(files) + '\n</div></div></section></main><footer class="foot" id="foot"></footer>' +
    '<script src="js/config.js"></script><script src="js/app.js"></script></body></html>';
}

/* ---- OPSIONAL A: update otomatis tiap hari ---- */
function installDailyTrigger() {
  ScriptApp.newTrigger('generateArtikelHtml').timeBased().everyDays(1).atHour(2).create();
}

/* ---- OPSIONAL B: Web App (grid selalu terbaru tanpa upload ulang) ----
 * Deploy > New deployment > Web app > Execute as: Me, Access: Anyone.
 * Tempel URL-nya ke artikelWebAppUrl di js/config.js. */
function doGet(e) {
  const folder = DriveApp.getFolderById(SETTINGS.FOLDER_ID), it = folder.getFiles(), files = [];
  while (it.hasNext()) {
    const f = it.next(), n = f.getName(), ext = (n.split('.').pop() || '').toLowerCase();
    if (SETTINGS.ALLOWED_EXT.length && SETTINGS.ALLOWED_EXT.indexOf(ext) < 0) continue;
    files.push({ id: f.getId(), url: f.getUrl(), name: n, date: f.getLastUpdated().getTime() });
  }
  files.sort((a, b) => a.name.localeCompare(b.name, 'id', { numeric: true }));
  const dark = (e && e.parameter && e.parameter.theme) !== 'light';
  const css = 'body{margin:0;padding:8px;font-family:Poppins,Arial,sans-serif;background:' + (dark ? '#313131' : '#fff') + '}' +
    '.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:24px 20px}' +
    '.art{display:flex;align-items:flex-end;aspect-ratio:163/204;background:' + (dark ? '#525252' : '#e4e5ec') + ' var(--img,none) center/cover;padding:12px;text-decoration:none;font-weight:700;font-size:14px;color:' + (dark ? '#fff' : '#313131') + ';position:relative}' +
    '.art.thumb{color:#fff}.art.thumb:before{content:"";position:absolute;inset:0;background:linear-gradient(transparent 40%,rgba(0,0,0,.78))}.art span{position:relative}';
  const out = '<!doctype html><html><head><base target="_blank"><meta name="viewport" content="width=device-width,initial-scale=1"><style>' + css + '</style></head><body><div class="g">' + tiles_(files) + '</div></body></html>';
  return HtmlService.createHtmlOutput(out).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
