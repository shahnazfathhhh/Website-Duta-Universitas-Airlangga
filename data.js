/* =========================================================
   SEMUA ISI WEBSITE DIEDIT DI FILE INI
   Foto: taruh di folder foto/, isi nama file di "foto".
   ========================================================= */
const SITE = {
  nama: "Duta UNAIR",
  email: "dutaunair@gmail.com",
  instagram: "dutaunair",
  whatsapp: "085162995208",
  /* Opsional: URL Google Apps Script agar formulir masuk ke Google Sheets (lihat README). Kosong = kirim via email. */
  formEndpoint: "https://script.google.com/macros/s/AKfycbwo_C-OhMDmfi6Is4ArBSDfOg8iNmFpcJD9kQ9wwt9241-wBy33q5uPpymfeSVhBSVN/exec"
};

const STATS = [
  {angka: "18", label: "Duta periode ini"},
  {angka: "10", label: "Fakultas terwakili"},
  {angka: "50+", label: "Kegiatan per tahun"}
];

const LATAR = [
  {judul: "Awal berdiri", teks: "Duta UNAIR hadir sebagai representatif mahasiswa Universitas Airlangga yang aktif, inspiratif, dan memiliki kepedulian sosial."},
  {judul: "Seleksi tahunan", teks: "Setiap periode, kandidat dipilih melalui proses seleksi yang menilai kompetensi, komunikasi, kepemimpinan, dan semangat kolaborasi."},
  {judul: "Peran saat ini", teks: "Para duta menjadi perpanjangan tangan UNAIR dalam mewakili kampus, mendorong promosi, serta menghadirkan nilai positif di ruang publik."}
];

const VISI_MISI = {
  visi: "Menjadi representasi Universitas Airlangga yang berintegritas, berprestasi, dan berdampak bagi masyarakat dan kampus.",
  misi: ["Mewakili UNAIR dalam acara kampus, kunjungan tamu, dan forum strategis.", "Mempromosikan nilai dan prestasi UNAIR kepada calon mahasiswa, alumni, dan masyarakat luas.", "Menjalin kolaborasi dengan instansi, komunitas, dan mitra untuk mengangkat reputasi kampus."]
};

const BIO = "Mahasiswa yang berkomitmen membawa nama UNAIR lewat prestasi, komunikasi, dan dampak positif di lingkungan kampus maupun masyarakat.";
const DUTA = [
  {id:"syarief",nama:"Syarief Husein",fakultas:"Kedokteran",foto:"assets/Syarief.png",ig:"syariefhuseinalmuhdar"},
  {id:"shafa",nama:"Ailsa Shafa",panggilan:"Shasa",fakultas:"Sains dan Teknologi",foto:"assets/Ailsha.JPG",ig:"ailsashafas"},
  {id:"faiz",nama:"Syamson Rifays",panggilan:"Faiz",fakultas:"Vokasi",foto:"assets/Faiz.JPEG",ig:"rifays.s"},
  {id:"okta",nama:"Oktavia Berliana",fakultas:"Kedokteran Gigi",foto:"assets/Okta.JPG",ig:"oktaviabc"},
  {id:"charis",nama:"Joshua Charis",fakultas:"Sains dan Teknologi",foto:"assets/Charis.JPG",ig:"joshuacharis"},
  {id:"najwa",nama:"Aliyyah Najwa",fakultas:"Kedokteran",foto:"assets/Najwa.JPG",ig:"aliyyahnajwaa"},
  {id:"afif",nama:"Afif Abdillah",fakultas:"Kedokteran Gigi",foto:"assets/Afif.jpg",ig:"afifabdillah_"},
  {id:"kartika",nama:"Kartika Devina",fakultas:"Kedokteran",foto:"assets/Kartika.JPG",ig:"karti.kadp"},
  {id:"justin",nama:"Justin Collin",fakultas:"Kedokteran Hewan",foto:"assets/Justin.JPG",ig:"justincollin30"},
  {id:"keisha",nama:"Keisha Kirana",fakultas:"Hukum",foto:"assets/Keisha.jpg",ig:"keishadewikiranaa"},
  {id:"hasan",nama:"Ahmad Hasan",panggilan:"Hasan",fakultas:"Ekonomi dan Bisnis",foto:"",ig:"hasanfitaihii"},
  {id:"indi",nama:"Indira Fayza",fakultas:"Psikologi",foto:"assets/Indi.JPG",ig:"indiesplace"},
  {id:"faisal",nama:"Achmad Faisal",panggilan:"Faisal",fakultas:"Ilmu Budaya",foto:"assets/Faisal.jpeg",ig:"faisal_bwf"},
  {id:"shahnaz",nama:"Shahnaz Fatharani",fakultas:"Teknologi Maju dan Multidisiplin",foto:"assets/Shahnaz.jpg",ig:"shahnazfatharani"},
  {id:"rifky",nama:"Rifky Abdillah",fakultas:"Psikologi",foto:"assets/Rifky.jpg",ig:"iki.rifky_"},
  {id:"yustika",nama:"Yustika Fazar",fakultas:"Ilmu Budaya",foto:"assets/Yustika.jpg",ig:"yusstikaf"},
  {id:"surya",nama:"Surya Simanjuntak",fakultas:"Farmasi",foto:"assets/Surya.jpg",ig:"suryaasmjtk"},
  {id:"marsha",nama:"Marsha Oktavia",fakultas:"Ilmu Budaya",foto:"assets/Marsha.JPG",ig:"marshaoktaviaa"}
].map(d=>({foto:d.foto||"",ig:d.ig||"",bio:BIO,...d}));
/* Contoh isi lengkap: foto:"assets/nama.jpg", ig:"namaig", bio:"..." */

const PORTOFOLIO = [
  {ikon:"★",judul:"Penyambutan tamu",teks:"Mendampingi tamu kehormatan, delegasi, dan kunjungan institusi."},
  {ikon:"♪",judul:"Pembawa acara",teks:"Menjadi MC pada wisuda, seminar, dan acara fakultas."},
  {ikon:"◎",judul:"Promosi kampus",teks:"Hadir di pameran pendidikan dan kampanye media sosial UNAIR."},
  {ikon:"✦",judul:"Kolaborasi",teks:"Bekerja bersama instansi, komunitas, dan brand."}
];

const KEGIATAN = [
  {tanggal:"24 Mei 2026", judul:"Attending Grand Final Fakultas Hukum UNAIR", tempat:"Surabaya", foto:"assets/fh.png"},
  {tanggal:"11-12 April 2026", judul:"Wisuda Periode 261", tempat:"Airlangga Convention Center", foto:"assets/wisuda.png"},
  {tanggal:"09 April 2026", judul:"MC Pengukuhan Guru Besar", tempat:"Universitas Airlangga", foto:"assets/mc.png"}
];

const GALERI = [
  "assets/dutwis.png",
  "assets/mc kejurprof.png",
  "assets/mc pengajian.png",
  "assets/swy.png",
  "assets/lo.png",
  "assets/pemateri.png"
];

const SOP = [
  {judul:"Kirim permohonan",teks:"Isi formulir dan lampirkan proposal atau surat undangan."},
  {judul:"Konfirmasi jadwal",teks:"Tim kami membalas dalam 3 hari kerja."},
  {judul:"Koordinasi teknis",teks:"Pembahasan rundown, dress code, dan kebutuhan acara."},
  {judul:"Pelaksanaan dan evaluasi",teks:"Duta bertugas, lalu kami kirim dokumentasi dan laporan."}
];

const FAQ = [
  {q:"Berapa lama sebelum acara harus mengajukan?",a:"Idealnya 7 hari sebelum acara agar jadwal duta dapat diatur."},
  {q:"Apakah ada biaya?",a:"Isi sesuai kebijakan, misalnya transport dan konsumsi ditanggung pengundang."},
  {q:"Bisa mengundang duta tertentu?",a:"Bisa, sebutkan nama atau fakultas pada kolom detail kebutuhan."}
];
