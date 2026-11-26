# Objek Pengujian: GPX

**Nama:** GPX (Gudang Pembangunan Excellence)  
**URL awal:** https://gudangpembangunan.up.railway.app/login  
**URL tujuan setelah autentikasi:** https://gudangpembangunan.up.railway.app/dashboard  
**Batas akhir:** Logout / pengakhiran sesi

GPX adalah aplikasi web yang dipakai untuk menampilkan ringkasan operasional dan sejumlah fungsi training, rekap personel, absensi, transaksi consumables, serta aset. Tujuan pengujian Kelompok 8 adalah memeriksa alur pengguna sah secara E2E melalui menu yang benar-benar tersedia untuk akun uji.

## Fakta yang sudah dapat diperiksa tanpa akun
Login GPX menampilkan formulir Username dan Password. Akses langsung ke dashboard tanpa sesi memerlukan login.

## Inventaris kandidat untuk divalidasi setelah login
1. Autentikasi — Login dan sesi
2. Dashboard — Ringkasan operasional
3. Training Materials — Materi pembelajaran
4. Training Quiz — Kuis dan penilaian
5. Training Assessment — Assessment peserta
6. Manpower — Rekap dan kandidat
7. Top Ranking — Peringkat karyawan
8. Annual Leave — Pengajuan cuti
9. Attendance Dashboard — Grafik dan rekap absensi
10. Overtime Check — Pemeriksaan lembur
11. B2C Order Lookup — Pencarian nomor pesanan
12. Gojek Ready to Pick — Daftar siap pickup
13. Gojek Terkirim — Daftar terkirim
14. Gojek Cancel — Pembatalan pengiriman
15. Consumables Stock — Stok packaging
16. Consumables Transaction — Transaksi packaging
17. Consumables Report — Laporan keluar-masuk
18. Support Asset — Master dan mutasi aset
19. FIFO Lead Time Dispatch — Durasi dan urutan dispatch
20. Daily Worker — Input dan rekap pekerja harian
21. Logout — Pengakhiran sesi

Daftar merupakan area uji awal dari dokumentasi dan pembahasan GPX, **bukan bukti semuanya terlihat pada satu role**. Catat keberadaan halaman, rute sebenarnya, hak akses, dan hasil verifikasi di lembar kerja saat eksekusi.

## Kewenangan dan perlindungan data
Pengujian memerlukan surat izin pemilik secara terpisah. Dokumen persetujuan bertanda tangan tidak diunggah ke repository publik. Data contoh dibuat anonim; transaksi, perubahan status, ekspor massal, dan penghapusan hanya di sandbox atau dengan izin eksplisit.