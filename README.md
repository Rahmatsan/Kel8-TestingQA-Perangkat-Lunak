# Testing dan Quality Assurance Perangkat Lunak

**Kelompok 8 | Semester 7 | Teknik Informatika, Universitas Pamulang**

Proyek ini mendokumentasikan pengujian *End-to-End* pada aplikasi **GPX (Gudang Pembangunan Excellence)**, dari halaman Login sampai Logout. Berkas disusun mengikuti format empat folder dari contoh kelas, dengan pembahasan yang disesuaikan dengan materi dosen.

**Objek aplikasi:** https://gudangpembangunan.up.railway.app/dashboard

## Struktur repository

```text
Kel8-TestingQA-Perangkat-Lunak/
├── ISO Standar IEEE 2026/
│   └── README.md
├── objek-testing/
│   └── README.md
├── Hasil-Dokumentasi testing/
│   ├── 01_Test_Plan.md
│   ├── 02_WhiteBox_Flow_Analysis.md
│   ├── 03_Test_Cases.md
│   ├── 04_Bug_Report.md
│   ├── 05_Test_Report.md
│   ├── screenshots/
│   │   └── README.md
│   └── lampiran/
│       ├── 03_Test_Cases.csv
│       ├── 06_UAT_Checklist.md
│       ├── 07_Security_API_Performance.md
│       └── 08_Traceability_Materi.md
├── Konsultasi Testing/
│   └── log_konsultasi.md
├── .gitignore
└── README.md
```

## Tahapan pekerjaan
1. **Test Plan:** tujuan, ruang lingkup, metode, entry/exit criteria dan risiko pengujian.
2. **White Box / Flow Analysis:** alur proses; pengujian struktur kode baru dapat dinyatakan dilakukan jika akses kode dan hasil eksekusi tersedia.
3. **Test Cases:** 105 skenario kandidat untuk 21 area GPX, dengan hasil aktual dan status yang belum diisi.
4. **Bug Report:** catatan defect hanya berdasarkan pengujian aktual yang dapat direproduksi.
5. **Test Report:** ringkasan hasil pengujian dan keterbatasan; belum menyatakan web lulus QA.

**Lampiran** menyimpan matriks CSV yang dapat dibuka di spreadsheet, UAT, rencana pengujian API/keamanan/performa, dan kaitan dengan materi dosen. Lampiran dipisahkan agar **lima dokumen utama tampil sama urutannya** seperti contoh kelompok.

## Status pengujian

Rencana dan instrumen sudah tersedia; **105 test case saat ini NOT RUN**. Halaman login dapat dilihat secara publik, tetapi pengujian dashboard dan modul internal membutuhkan akun uji serta izin pemilik. Belum ada screenshot hasil eksekusi yang diverifikasi. File `screenshots/README.md` hanya panduan penyimpanan bukti.

## Catatan penggunaan

Folder “ISO Standar IEEE 2026” mengikuti penamaan contoh, **bukan** nama atau tahun publikasi sebuah standar resmi. Rujukan yang dibahas di dalamnya menyebut edisi yang benar.

Repository bersifat **Public**. Surat izin pengujian, data sensitif, kredensial, token, dan tanda tangan **tidak diunggah**.