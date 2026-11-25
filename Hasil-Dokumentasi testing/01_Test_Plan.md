# 01. Software Test Plan (STP) — GPX E2E

**Versi:** 1.0 (draft)  
**Status:** NOT RUN / menunggu izin tertulis dan akun uji  
**Objek:** GPX  
**Tujuan:** memastikan alur dari login sampai logout bekerja sesuai kebutuhan, mencakup integrasi antarhalaman dan konsistensi status.

## Sasaran
- Memverifikasi autentikasi dan pembatasan akses sesuai role.
- Memastikan halaman dashboard dan navigasi modul dapat digunakan.
- Memeriksa alur baca, simpan, validasi, dan respons kesalahan pada data dummy.
- Memastikan logout mengakhiri sesi dan halaman terlindungi tidak bisa diakses tanpa login ulang.

## Pendekatan
Functional E2E black-box menggunakan skenario positif dan negatif, dengan inspeksi white-box hanya bila source code dan izin tersedia. Catat browser, versi, tanggal, role, URL, langkah, hasil aktual, bukti, dan status untuk setiap kasus.

## Entry criteria
Izin pemilik, akun uji, role yang disetujui, lingkungan/dataset uji, baseline aplikasi, test cases, dan mekanisme pemulihan data.

## Exit criteria
Test case kritikal dieksekusi dan didokumentasikan; defect kritikal/tinggi diselesaikan atau diterima risikonya oleh pemilik; evidence dan ringkasan hasil lengkap.

## Status
Tidak ada hasil PASS/FAIL yang dinyatakan sampai pengujian faktual terjadi.
