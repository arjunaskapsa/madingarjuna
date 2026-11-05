/* =====================================================================
   PUSAT PENGATURAN — semua link & teks yang sering diganti ada di file ini
   ---------------------------------------------------------------------
   LINK FOTO  : tempel link "Bagikan" Google Drive (akses: Siapa saja yang memiliki link).
   LINK VIDEO : tempel link YouTube ATAU link Dropbox (.mp4). Format otomatis diurus.
   Kosongkan ("") jika belum ada.
   ===================================================================== */
window.CONFIG = {
  // ---------- Umum ----------
  title: "Mading Skapsa - Roots to Future",
  shortTitle: "Mading Skapsa",
  copyright: "Copyright Resmi: © 2026 Tim Jurnalistik SMK PGRI 1 Kediri. All Rights Reserved.",
  nav: [
    ["index.html", "Beranda"], ["tentang-kami.html", "Tentang Kami"], ["artikel.html", "Artikel"],
    ["mading-gallery.html", "Mading Gallery"], ["dokumenter.html", "Dokumenter"], ["suara-skapsa.html", "Suara Skapsa"]
  ],

  // ---------- Foto tim (Google Drive). Kosong = pakai img/tim.webp ----------
  teamPhoto: "",

  // ---------- Beranda: Sponsor (13 logo) ----------
  // logo: link Google Drive.  tile: warna kotak logo (opsional) bila warna logo mirip warna pita #AFAFAF,
  // contoh tile: "#ffffff" atau "#8f8f8f"
  sponsors: [
    { name: "BRI", logo: "https://drive.google.com/file/d/1jzZq7jTFLsV4AYXgYFOIk0qGbVZzdj-i/view?usp=sharing", tile: "" },
    { name: "Amerta Asa Media", logo: "https://drive.google.com/file/d/1SiozdG98StAOgvY0GzMKXKtPtWq5IGwg/view?usp=drive_link", tile: "" },
    { name: "Universitas STRADA Indonesia", logo: "https://drive.google.com/file/d/1H8OtAFOo8A9FXgio1Hbf-3P3S22Dien0/view?usp=drive_link", tile: "" },
    { name: "Universitas Kadiri", logo: "https://drive.google.com/file/d/1At727tQl2d3jNKerlYpm4dFDWhWsBCMV/view?usp=drive_link", tile: "" },
    { name: "Hisana Fried Chicken", logo: "https://drive.google.com/file/d/1a370j4cDEu20WKI66iCm_THTL32Q0-vt/view?usp=drive_link", tile: "" },
    { name: "Cleo", logo: "https://drive.google.com/file/d/1A-hCFV2wf2h6F0VqUaIvtc15lz9FQl8B/view?usp=drive_link", tile: "" },
    { name: "Epson", logo: "https://drive.google.com/file/d/1P4cROQanOyGSJKZG21cBOnxfeXK8Nlwk/view?usp=drive_link", tile: "" },
    { name: "Kopi Good Day", logo: "https://drive.google.com/file/d/1uiq01_79U6geQMm7QNg7ZArETYcO-y0C/view?usp=drive_link", tile: "" },
    { name: "Bank Jatim", logo: "https://drive.google.com/file/d/1A3rwpCAyY-5zLjEBsitAU0H-z6FQSpAo/view?usp=drive_link", tile: "" },
    { name: "UNP Kediri", logo: "https://drive.google.com/file/d/1QdWL19xSO88sqvh6rsvjR8wYKdSKK83H/view?usp=drive_link", tile: "" },
    { name: "Yamaha", logo: "https://drive.google.com/file/d/1YVvT3nRMaG5OEkDyMT8cbVVUOEGyOo1v/view?usp=drive_link", tile: "" },
    { name: "UIN Syekh Wasil Kediri", logo: "https://drive.google.com/file/d/12n_KblYf7c4qvsOVeFJqNqWjdeB7B31y/view?usp=drive_link", tile: "" },
    { name: "Ortidjoe", logo: "https://drive.google.com/file/d/1QNvooXTKyeCVKxSkTav-dj3-TH0PDvFh/view?usp=drive_link", tile: "" }
  ],

  // ---------- Beranda: Artikel (PDF to flipbook) ----------
  flipbookUrl: "https://heyzine.com/flip-book/cb0339b6da.html",
  // Opsional: URL Web App Google Apps Script (lihat panduan) untuk grid artikel otomatis di halaman Artikel
  artikelWebAppUrl: "",

  // ---------- Mading Gallery ----------
  // Cara mengedit teks:
  //  - Tiap blok = ["Judul", "Isi"].  \n = baris baru.  **teks** = cetak tebal.
  //  - blocks[]    : blok judul + isi di bagian atas. Tambah / hapus / ubah urutan sesuka hati.
  //  - homeCount   : berapa blok pertama yang ditampilkan di BERANDA (sekarang 2 = Ide Dasar + Filosofi Sisi Ruang Mading).
  //  - paragraphs[]: paragraf di bawah judul besar kedua. Satu string = satu paragraf.
  madingGallery: {
    title: "FILOSOFI MADING JURNALIS 2026",
    homeCount: 2,
    blocks: [
      ["Ide Dasar (Daur Ulang):",
       "Memanfaatkan Kembali (recyle) struktur mading tahun lalu untuk efisiensi biaya dan optimalisasi bahan yang masih layak, diubah menyesuaikan dengan temanya, dan tetap mempertahankan warna biru khas identitas sekolah SMK PGRI 1 KEDIRI."],
      ["Filosofi Sisi Ruang Mading:",
       "Sisi Depan: Sisi Depan (Global & Nusantara): Menampilkan bola dunia (bumi) sebagai pusatnya. Di atas bola dunia tersebut berdiri figur orang dengan pakaian khas, makanan khas, hingga hewan asli daerah (merepresentasikan kekayaan ragam budaya Nusantara yang siap mendunia).\nSisi Belakang (Akar Lokal & Kehidupan Nyata - Kediri): Menampilkan latar lereng Gunung Wilis sebagai rumah kita. Di bagian ini terdapat visual panggung pertunjukan, kesenian Jaranan, dan deretan UMKM lokal. Ini merepresentasikan bagaimana budaya hidup, dirayakan bersama, dan menggerakkan ekonomi masyarakat."],
      ["Filosofi Posisi di Jembatan (Tablet>Kita di Tengah>Buku):",
       "**Tablet**: Wujud modernisasi dan perkembangan dunia digital (cara anak muda sekarang berkarya lewat HP, artikel, dan video pendek).\n\n**Buku**: Wujud lembaran sejarah, pengetahuan, dan akar tradisi (identitas budaya kita seperti Jaranan).\n\nKita di Tengah-tengah Jembatan: Menyimbolkan peran kita sebagai generasi muda yang adaptif dengan kemajuan zaman, tetapi tetap berpijak teguh dan sadar penuh untuk tidak melupakan budaya lokal terutama kediri."],
      ["Filosofi Kenapa Tema Utama Ada di Belakang",
       "\"Kita Berada di Lereng Gunung Wilis\" (Rumah Kita Sendiri)\nSecara geografis dan emosional, kita tinggal di lereng Gunung Wilis, Kediri. Bagian belakang mading digambarkan berlatar Gunung Wilis karena di situlah titik asal / rumah kita berpijak."]
    ],
    title2: "Filosofi dan Harapan dari Pembuatan Mading",
    paragraphs: [
      "Melalui mading ini, kami ingin menyampaikan bahwa budaya bukan sekadar warisan masa lalu yang hanya dikenang, melainkan identitas yang harus terus dijaga, dikembangkan, dan diperkenalkan kepada dunia. Mading ini dibuat dengan harapan agar generasi muda saat ini maupun generasi selanjutnya memiliki kesadaran dan rasa bangga terhadap budaya daerahnya sendiri.",
      "Kami ingin menanamkan pemahaman bahwa kemajuan zaman bukanlah alasan untuk meninggalkan kebudayaan, melainkan kesempatan untuk memperkenalkannya melalui cara-cara yang lebih kreatif dan modern. Dengan demikian, generasi muda tidak hanya menjadi penikmat perkembangan teknologi, tetapi juga menjadi pelaku yang mampu membawa identitas budayanya menuju masa depan. Inilah salah satu wujud kesiapan generasi muda untuk menjadi bagian dari Generasi Emas Indonesia, yaitu generasi yang berwawasan luas, adaptif terhadap perubahan, serta tetap memiliki jati diri dan berpegang teguh pada nilai-nilai budaya bangsa.",
      "Pada bagian belakang mading, kami menggambarkan suasana seolah-olah sedang berlangsung sebuah pertunjukan kesenian Jaranan di tengah kehidupan masyarakat Kediri. Visual panggung pertunjukan, kesenian Jaranan, serta deretan UMKM lokal menjadi gambaran bahwa kebudayaan tidak hidup sendirian, tetapi tumbuh dan berkembang bersama masyarakat yang melestarikannya. Kami juga melengkapi bagian ini dengan berbagai artikel yang membahas asal-usul, sejarah, dan perkembangan budaya Jaranan.",
      "Artikel-artikel tersebut bukan hanya berfungsi sebagai sumber informasi, tetapi juga menjadi sarana untuk mengenalkan kembali akar kebudayaan lokal kepada para pembaca, khususnya generasi muda yang mungkin belum sepenuhnya mengenal sejarah kesenian daerahnya sendiri.",
      "Pemilihan Jaranan sebagai salah satu fokus utama bukan tanpa alasan. Jaranan merupakan bagian dari kekayaan budaya yang dekat dengan identitas masyarakat Kediri. Melalui penggambaran pertunjukan dan artikel sejarah tersebut, kami ingin mengajak setiap orang untuk memahami bahwa di balik sebuah kesenian terdapat cerita panjang, nilai kehidupan, perjuangan, dan warisan leluhur yang patut dihargai.",
      "berharap, ketika seseorang melihat mading ini, mereka tidak hanya tertarik pada keindahan visualnya, tetapi juga terdorong untuk membaca, memahami, dan mengenal lebih dalam budaya yang berasal dari daerahnya sendiri.",
      "Pada akhirnya, keseluruhan konsep mading ini memiliki satu pesan utama: kita boleh melangkah jauh mengikuti perkembangan dunia, tetapi jangan pernah kehilangan arah untuk pulang kepada akar budaya kita sendiri.",
      "Sebab, generasi emas bukan hanya tentang generasi yang unggul dalam teknologi, ilmu pengetahuan, dan kreativitas, melainkan juga generasi yang mampu menjaga warisan leluhur serta memperkenalkan identitas bangsanya kepada dunia. Kami ingin menjadikan mading ini sebagai pengingat bahwa budaya lokal, khususnya budaya Kediri, memiliki tempat yang berharga dalam perjalanan menuju masa depan.",
      "\"Berakar pada Budaya, Melangkah Bersama Zaman, dan Mendunia dengan Identitas Bangsa.\""
    ],

    // ----- Behind The Scene (dipindah dari halaman Dokumenter; tampil di bawah teks di atas) -----
    btsTitle: "Behind The Scene Video Recap",
    bts: { video: "https://www.dropbox.com/scl/fi/9zj2y97lyhnbqi2npzzyn/BTS-ARJUNA.mp4?rlkey=o7d2agw497u0qql03psoezyqd&st=p656avmd&dl=0", thumb: "https://drive.google.com/file/d/1U2oY1pnT0wDwcyhmEa30pvYEZ3NygAuB/view?usp=drive_link",
      head: "Di Balik Layar: Merawat Tradisi Lewat Bingkai Teknologi",
      text: `Video Behind the Scenes ini mendokumentasikan seluruh proses di balik pembuatan film dokumenter mading 3D berkonsep "Kebudayaan dalam Teknologi". Di dalam video ini, ditampilkan proses wawancara langsung bersama narasumber pelaku seni dan akademisi yang mengupas tuntas filosofi kata "Jaranan" sebagai ajaran dan tuntunan, sejarah perkembangannya dari masa ke masa, hingga ragam jenis jaranan di Pulau Jawa. Video BTS ini memperlihatkan bagaimana nilai-nilai tradisi lokal dikemas dan ditransformasikan ke dalam media visual modern berbasis teknologi.` },
    photoTitle: "Behind The Scene : Photo",
    photoCaption: "Dokumentasi",
    photoTags: "ARJUNA | Pembuatan Mading",
    // PENANDA "2/4": total otomatis = jumlah baris { src: "" } di bawah.
    // Mau 6 foto? tambah 2 baris. Mau 2 foto? hapus sisanya. interval = jeda otomatis (ms), 10000 = 10 detik.
    photosLeft: { interval: 10000, items: [{ src: "https://drive.google.com/file/d/1FRr_q_z6VyIwf_RnwNHk4cr4meGdt8OF/view?usp=drive_link" }, { src: "https://drive.google.com/file/d/1_uEGSmE4lNaQmEuD-bOLkL7N5Pn-SoLT/view?usp=drive_link" }, { src: "https://drive.google.com/file/d/13xM-f3BXWGpqetniXOvPCILqdq2eNf4s/view?usp=drive_link" }, { src: "https://drive.google.com/file/d/1Ok6a-jp209ZuPvsL4hLX6tR-sT4ZWdDA/view?usp=drive_link" }, { src:"https://drive.google.com/file/d/1n1ZSct9UIW6CuOwDNx4T7h_kVd2l8DdY/view?usp=drive_link"}, { src: "https://drive.google.com/file/d/1vRT8k1Fxjcsy1TQjlowG9J3rQO5orvUv/view?usp=drive_link"}, { src: "https://drive.google.com/file/d/1bVT5Vi8FpDTEXHmwInNxwKXr_dGUYw13/view?usp=drive_link"}] },
    photosRight: { interval: 10000, items: [{ src: "https://drive.google.com/file/d/1JQU90JWR63LD-f1dYgmKjaQHuLf_hxKA/view?usp=drive_link" }, { src: "https://drive.google.com/file/d/1iJgEHvGLNBNbgb2Sv4F6igqw_YE2humi/view?usp=drive_link" }, { src: "https://drive.google.com/file/d/13bH3CVE_rVyth730FwkZZJDZ_EglSB_x/view?usp=drive_link" }, { src: "https://drive.google.com/file/d/1BJ9OvT8w2rKNWPk6aPsJv9bxCJKMg8PQ/view?usp=drive_link" }, { src: "https://drive.google.com/file/d/1QyuVVB97CuCJ5poTcxmUei7P7HM9hWq5/view?usp=drive_link"}, { src: "https://drive.google.com/file/d/1iCFU9RoxrRzyiCjQU2kVPFwsYzrfq7s3/view?usp=drive_link"}, { src: "https://drive.google.com/file/d/1LlFceG5QSQD8ZsJX2JCZ7NQ0b0RyQ4Q3/view?usp=drive_link"}, { src: "https://drive.google.com/file/d/1YMYQc6J9ao5lfw_BwT5Lo2hF2CvtuwCi/view?usp=drive_link"}, { src: "https://drive.google.com/file/d/1sKSe_1gCPF-hcqPrtSMHiJ_xxl090G7Y/view?usp=drive_link"}, { src: "https://drive.google.com/file/d/1bX6L01LokUe6VVQcTCb1BMDK3nE_0mMi/view?usp=drive_link"}, { src: "https://drive.google.com/file/d/1kUhmvZSid_HevduxzIasdeYqit75gVSt/view?usp=drive_link"}, { src: "https://drive.google.com/file/d/13Rs1ZvC2sNHMrAfdDKJX0j7RdfmBGVXE/view?usp=drive_link"}, { src: "https://drive.google.com/file/d/1ktWXtvLlcR5rLGqDKqU_Tvo8G17JQ0rZ/view?usp=drive_link"}, { src: "https://drive.google.com/file/d/1cwRbQpdQRwQ_MQAGhaXAbDJhKFyV-oMp/view?usp=drive_link"}] }
  },

  // ---------- Dokumenter (tampil di Beranda & halaman Dokumenter) ----------
  // thumb: foto Google Drive | video: link YouTube / Dropbox (.mp4)
  // Tambah item baru = salin satu blok { ... } lalu isi.
  dokumenter: [
    { category: "Budaya", tags: "ARJUNA | Budaya · Jaranan · Filosofi · Seni Tradisional", thumb: "https://drive.google.com/file/d/1n4i27QSutAP4BJI0VygDNUnB1l4jTgbc/view?usp=drive_link", video: "https://www.dropbox.com/scl/fi/hkdnpxu4t2814ecyxyj67/filosofi-jaranan.mp4?rlkey=sorg0jsj86dfjqrbl6bioydab&st=v5reqgxv&dl=0",
      head: "Filosofi Jaranan",
      text: `Berdasarkan penjelasan dari pelaku seni bernama Suroso, kesenian jaranan pada hakikatnya tidak merujuk secara langsung pada hewan kuda. Istilah "jaranan" sendiri memiliki makna mendalam sebagai filosofi ajaran dan tuntunan. Melalui media kesenian ini, terdapat pesan-pesan pembelajaran hidup yang disampaikan kepada masyarakat, menjadikannya bukan sekadar bentuk hiburan visual semata, melainkan sarana penanaman nilai dan tuntunan moral.` },
    { category: "Budaya", tags: "ARJUNA | Budaya · jaranan · Sejarah · Seni Tradisional", thumb: "https://drive.google.com/file/d/1v0XfqxaDUi5e8-ITXNfa8YTiNRDeCD1M/view?usp=drive_link", video: "https://www.dropbox.com/scl/fi/20mzexqe9ux32gffyldtq/sejarah-jaranan.mp4?rlkey=f6jhxdd4b26ni72wdtrqq5urn&st=bizsjsd0&dl=0",
      head: "Sejarah Jaranan",
      text: `Kesenian Jaranan telah populer dan menjadi idola di kalangan masyarakat—khususnya di Kota Kediri—sejak sekitar 10 hingga 12 tahun yang lalu ketika narasumber masih duduk di bangku sekolah dasar. Pada masa itu, di sekitar pemukiman narasumber sudah terdapat beberapa seniman yang mendirikan komunitas jaranan, yang menjadi awal mula perkenalannya dengan kesenian tersebut. Hingga saat ini, Jaranan masih tetap eksis dan mempertahankan popularitasnya sebagai bagian dari identitas budaya serta idola masyarakat luas.` },
    { category: "Budaya", tags: "ARJUNA | Budaya · Jaranan · Jenis · Seni Tradisional", thumb: "https://drive.google.com/file/d/1zeAfVZwyEsbBi00oaqSgIKqfgR_w8_8w/view?usp=drive_link", video: "https://www.dropbox.com/scl/fi/9qaj44vos7fbmezo8jitk/jenis-jenis-jaranan.mp4?rlkey=n1vswjohwx88qjwi8opg4qs8q&st=9fwjvfer&dl=0",
      head: "Jenis-jenis Jaranan",
      text: `kesenian Jaranan memiliki sangat banyak jenis dan variasi yang tersebar di sepanjang Pulau Jawa, mulai dari Banyuwangi hingga Jawa Barat. Setiap daerah memiliki ciri khas dan nama jenis jaranannya masing-masing yang mengakar pada tradisi setempat. Beberapa di antaranya meliputi Jaranan Buto yang berkembang di Banyuwangi dan sekitarnya, Jaranan Lama atau Jaranan Dor, Jaranan Jawa, Jaranan Pegon yang khas dari Kediri, Jaranan Nganjukan di Nganjuk, serta Jaranan Senterewe yang berasal dari Tulungagung.` },
    { category: "Budaya", tags: "ARJUNA | Budaya · Jaranan · Perkembangan · Seni Tradisional", thumb: "https://drive.google.com/file/d/1c9PoMwjdHnGbgi6RG1WvOwhNuPiLzTWL/view?usp=drive_link", video: "https://www.dropbox.com/scl/fi/0pgasbma0529rp3d8bhoy/perkembangan-jaranan.mp4?rlkey=bt03ktietc23s41ol68984pu0&st=v3gjsupi&dl=0",
      head: "Perkembangan Jaranan",
      text: `Perkembangan kesenian Jaranan dari masa dahulu hingga sekarang telah mengalami perubahan yang cukup signifikan. Pada masa lalu, Jaranan umumnya berfungsi sebagai hiburan masyarakat dengan kostum dan atribut yang lebih apa adanya, seperti menggunakan kain jarik dan pakaian yang sederhana, serta kerap mengedepankan unsur kesurupan (trance). Seiring berjalannya waktu, kini Jaranan berkembang menjadi tontonan untuk kalangan luas yang dikemas jauh lebih menarik dan penuh warna (full color), serta lebih mengedepankan teknik, keterampilan (skill) pertunjukan, dan nilai-nilai kebudayaan yang dimiliki oleh setiap komunitas.` }
  ],

  // ---------- Halaman Dokumenter (BTS video & foto sudah dipindah ke madingGallery di atas) ----------
  // Video = link YouTube (thumbnail otomatis dari YouTube; isi "thumb" hanya jika ingin foto lain dari Drive)
  dokumenterPage: {
    main: { video: "https://youtu.be/ciFELUd9YtI?si=0iLouFRBbTg29o7A", thumb: "", category: "Budaya",
      tags: "ARJUNA | Budaya · Jaranan · Dokumenter · Seni Tradisional · Sejarah · Filosofi",
      head: "Dokumenter",
      text: `Dokumenter Melestarikan Warisan Budaya Melalui Pendapat Para Pengamat | ArjunaInAction Documentary mengupas dinamika kesenian jaranan di Kediri, mulai dari pergeseran fokus pertunjukan mistis menuju apresiasi estetika dan filosofi seni, peran nyata pementasan dalam menggerakkan ekonomi UMKM lokal, hingga pentingnya generasi muda melestarikan tradisi secara profesional tanpa stigma kericuhan; dari pembahasan ini, Anda bisa mengangkat ide video baru yang menyoroti perdebatan antara unsur mistis versus seni murni dalam jaranan modern, kisah nyata perputaran rezeki pedagang kecil di balik gemerlap panggung budaya, atau potret seniman muda yang berjuang menjaga marwah kesenian daerah.` },
  },

  // ---------- Tentang Kami ----------
  about: {
    intro: "ARJUNA merupakan organisasi jurnalistik sekolah yang menjadi wadah bagi para remaja untuk belajar, berkembang, dan berkarya bersama melalui dunia fotografi, videografi, editing, dan kepenulisan. Lebih dari sekadar organisasi, ARJUNA adalah ruang untuk berekspresi, mengeksplorasi ide, serta mengabadikan berbagai cerita dan momen kehidupan. Bersama semangat kebersamaan dan kreativitas, kami terus belajar, mencoba hal baru, dan menciptakan karya yang bermakna.",
    visi: "“Menjadikan organisasi jurnalis sebagai organisasi yang aktif, profesional, kreatif, serta bisa menjadi rumah bagi anggota untuk berkarya, berkembang, dan mengispirasi.”",
    misi: [
      "Menghidupkan organisasi dengan program kerja yang aktif, konsisten, dan bermanfaat untuk seluruh anggota.",
      "Meningkatkan kemampuan anggota melalui pelatihan, praktik, dan evaluasi rutin.",
      "Memperkuat kekompakan, komunikasi, dan rasa kekeluargaan antar anggota jurnalis.",
      "Memaksimalkan media digital agar karya organisasi lebih dikenal dan berdampak untuk banyak orang.",
      "Menumbuhkan budaya kerja yang aktif, disiplin, kolaboratif, dan bertanggung jawab.",
      "Menghasilkan karya jurnalistrik yang berkualits, kreatif, dan menjunjung tinggi kode etik.",
    ],
    motivasi: "Mading ini bukan sekadar hasil dari kreativitas, melainkan bukti bahwa kami pernah berjuang, bertahan, dan memilih untuk tidak menyerah. Ada lelah yang disembunyikan, ragu yang berkali-kali datang, serta keinginan untuk berhenti yang tak jarang menghampiri. Namun, setiap kali langkah terasa ingin terhenti, selalu ada alasan untuk kembali, menyatukan semangat, dan melanjutkan apa yang telah dimulai.\n\nKami sadar, tidak semua proses berjalan mudah dan tidak semua usaha langsung membuahkan hasil sempurna. Akan tetapi, kami percaya bahwa sebuah karya tidak hanya dinilai dari keindahannya, melainkan juga dari cerita dan perjuangan yang ada di baliknya.\n\nKami mungkin pernah hampir menyerah, tetapi kami memilih untuk kembali hadir. Sebab, bagi kami, keberhasilan bukan tentang siapa yang tidak pernah lelah, melainkan siapa yang tetap bersedia melangkah meski berkali-kali ingin berhenti.\nBerkali-kali ingin menyerah, tetapi selalu menemukan alasan untuk kembali. Sebab, karya terbaik bukan hanya tentang apa yang berhasil kami ciptakan, melainkan tentang seberapa jauh kami bersedia bertahan untuk mewujudkannya.",
    motto: "“Merawat Akar Budaya, Membentang Jembatan Era Digital.”",
    identitas: [
      ["Nama Sekolah", "SMK PGRI 1 KEDIRI"],
      ["Alamat", "Jl. Himalaya No.06, Sukorame, Bandar Lor, Kec. Mojoroto, Kota Kediri, Jawa Timur 64114"],
      ["NPSN", "20534397"],
      ["Pembimbing 1", "Arum Puriani, S.Pd."],
      ["Pembimbing 2", "Mochammad Fauzi, S.Sn."],
      ["Organisasi", "ARJUNA SKAPSA"]
    ]
  },

  // ---------- Suara Skapsa ----------
  suaraIntro: "Setiap pendapat memiliki arti. Suara Skapsa merupakan ruang bagi pembaca untuk menyampaikan kritik, saran, serta apresiasi terhadap Mading 3D. Melalui berbagai masukan yang diberikan, kami berharap dapat terus mengembangkan mading menjadi media informasi dan kreativitas yang lebih baik."
};
