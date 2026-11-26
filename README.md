# Pengujian Perangkat Lunak GPX (Kelompok 8)

Repository ini dipakai untuk tugas mata kuliah **Testing dan QA Perangkat Lunak**, Semester 7 Teknik Informatika, Universitas Pamulang. Objek studi adalah aplikasi web [GPX - Gudang Pembangunan Excellence](https://gudangpembangunan.up.railway.app/dashboard).

Penelitian membatasi **alur End-to-End dari halaman login sampai logout** dan menggunakan teknik pengujian sesuai materi perkuliahan. Dokumen ini adalah *rencana, instrumen, dan catatan proses*, bukan pernyataan GPX sudah lulus pengujian.

**Kondisi per 26 November 2026:** halaman login dapat diakses tanpa akun; dashboard memerlukan login. Pengujian modul internal, white-box code coverage dan penilaian PASS/FAIL **belum dieksekusi**. Total **105 skenario kandidat**, terbagi ke 21 area uji. Daftar modul perlu diverifikasi terhadap menu aktual dan hak akses akun uji setelah ada persetujuan.

## Susunan dokumen

| Lokasi | Isi |
| --- | --- |
| `objek-testing/README.md` | Gambaran objek, batasan, dan inventaris modul |
| `Hasil-Dokumentasi testing/01_Test_Plan.md` | Rencana dan kriteria pengujian |
| `Hasil-Dokumentasi testing/02_WhiteBox_Flow_Analysis.md` | Alur fungsional dan rencana pemeriksaan kode |
| `Hasil-Dokumentasi testing/03_Test_Cases.md` | Panduan matriks 105 test case |
| `Hasil-Dokumentasi testing/03_Test_Cases.csv` | Data test case yang bisa dibuka di Excel/Google Sheets |
| `Hasil-Dokumentasi testing/04_Bug_Report.md` | Format laporan defect |
| `Hasil-Dokumentasi testing/05_Test_Report.md` | Laporan hasil sementara (belum dieksekusi) |
| `Hasil-Dokumentasi testing/06_UAT_Checklist.md` | Pemeriksaan penerimaan oleh pengguna |
| `Hasil-Dokumentasi testing/07_Security_API_Performance.md` | Pengujian nonfungsional terkontrol |
| `Hasil-Dokumentasi testing/08_Traceability_Materi.md` | Pemetaan panduan 16 pertemuan |
| `Hasil-Dokumentasi testing/screenshots/README.md` | Aturan penamaan dan penyimpanan bukti |
| `Konsultasi Testing/log_konsultasi.md` | Catatan konsultasi faktual dengan dosen |
| `ISO Standar IEEE 2026/README.md` | Daftar referensi standar; nama folder bukan tahun publikasi standar |

## Alur pelaksanaan

1. Dapatkan persetujuan pengujian, tentukan akun/role dan data dummy yang boleh dipakai.
2. Verifikasi menu GPX aktual, versi aplikasi, browser, dan lingkungan pengujian.
3. Jalankan urutan login → dashboard → modul-modul yang diizinkan → logout.
4. Isi kolom `Actual Result`, `Status`, `Evidence` dalam CSV dan simpan bukti yang sudah disamarkan.
5. Buat bug report hanya jika kegagalan berhasil direproduksi; lakukan retest setelah perbaikan.
6. Susun test report final berdasarkan hasil yang tercatat, bukan berdasarkan asumsi.

**Privasi:** repository ini PUBLIC. Jangan unggah surat izin bertanda tangan, identitas karyawan, kredensial, token akses, data bisnis rahasia, log mentah, atau screenshot berisi data sensitif.