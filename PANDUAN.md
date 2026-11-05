# Panduan Website Mading Skapsa

## 1. Mengganti link / teks (semuanya di `js/config.js`)
| Yang diganti | Variabel | Isi |
|---|---|---|
| 13 logo sponsor | `sponsors[].logo` | link Google Drive foto (Share → Siapa saja yang memiliki link) |
| Warna kotak logo (jika logo se-warna pita) | `sponsors[].tile` | mis. `"#ffffff"` |
| Flipbook artikel | `flipbookUrl` | link heyzine |
| Foto tim | `teamPhoto` | link Google Drive |
| Dokumenter | `dokumenter[]` | `thumb` = foto Drive, `video` = link YouTube/Dropbox, `head`, `text`, `tags` |
| Teks Mading Gallery + BTS video/foto | `madingGallery` | blok judul+isi, paragraf (`\n` = baris baru, `**tebal**`); BTS: `bts.video`, `photosLeft/Right` |
| Tentang Kami | `about` | visi, misi, motto, identitas |
| Teks Suara Skapsa | `suaraIntro` | paragraf pembuka |
| Copyright | `copyright` | `{year}` otomatis tahun berjalan |

Link Dropbox: ambil link "Salin link" file .mp4 (otomatis diubah agar bisa diputar).
Dokumenter baru: salin satu blok `{ ... }` di `dokumenter`.

## 2. Halaman Artikel otomatis dari Google Drive
1. Buka https://script.google.com → **Proyek baru** → tempel isi `apps-script/GenerateArtikel.gs`.
2. Ganti `FOLDER_ID` (ID folder = bagian akhir URL folder Drive) dan, bila perlu, `OUTPUT_FILE_NAME`.
3. Pilih fungsi `generateArtikelHtml` → **Jalankan** → izinkan akses Drive.
4. File HTML muncul di folder Drive itu. Unduh, taruh di folder website (timpa `artikel.html`).
5. Tambah file artikel baru → jalankan lagi (atau jalankan `installDailyTrigger` sekali agar otomatis tiap hari, lalu unduh/upload ulang hasilnya).

**Tanpa upload ulang (Opsional B):** Deploy → Deployment baru → Web app → Execute as *Me*, Access *Anyone*. Tempel URL ke `artikelWebAppUrl` di `config.js`; halaman Artikel akan menampilkan grid terbaru langsung dari Drive.
Catatan: file di Drive harus dibagikan "Siapa saja yang memiliki link" (opsi `AUTO_SHARE` melakukannya otomatis).

## 3. Menjalankan
Buka lewat server (mis. ekstensi Live Server / hosting). Jangan `file://` agar video & font berfungsi penuh.

tes update
