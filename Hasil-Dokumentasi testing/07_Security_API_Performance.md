# 07. Rencana API, Security, Performance, dan Regression

Materi acuan: Pertemuan 10–14. Semua kegiatan berikut masih **rencana**, bukan hasil temuan.

## API/integrasi
Setelah izin dan endpoint resmi diberikan, uji respons baca yang diotorisasi, status HTTP, struktur payload, dan respons error ketika input invalid. Jangan mengakses endpoint yang tidak termasuk scope. Jangan menyimpan token/cookie atau payload sensitif ke GitHub.

## Keamanan dasar
Periksa login invalid, pembatasan role menggunakan akun uji, sesi berakhir sesudah logout, dan larangan akses ulang URL terlindungi. Tidak ada brute force, SQL injection, vulnerability scanning agresif, atau penetration test tanpa persetujuan khusus.

## Performance ringan
Catat waktu muat halaman dan perubahan filter pada browser/role/perangkat yang sama sebanyak tiga kali untuk perbandingan internal. Belum menetapkan SLA karena pemilik belum memberi target resmi. Tidak melakukan load/stress test pada produksi.

## Regression
Setelah defect diperbaiki, jalankan ulang test case terkait dan satu alur login → modul → logout yang relevan. Catat nomor versi deploy dan tanggal retest.

## Rekomendasi alat
Browser DevTools (network dan console setelah izin), screenshot, Excel/Sheets, dan bila dibutuhkan Playwright dalam sandbox untuk pengujian non-destruktif.