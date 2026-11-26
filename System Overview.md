# System Overview: GPX

## Identitas objek

| Aspek | Keterangan |
|---|---|
| Nama | GPX (Gudang Pembangunan Excellence) |
| URL | https://gudangpembangunan.up.railway.app/dashboard |
| Jenis | Aplikasi web operasional internal |
| Titik awal E2E | Halaman Login (/login) |
| Titik akhir E2E | Logout / End Session |
| Sasaran | Pengujian aplikasi berdasarkan role dengan akun dan data uji yang diizinkan |
| Baseline | Versi/deployment GPX akan dicatat pada tanggal eksekusi |

GPX digunakan untuk menampilkan dashboard dan mendukung proses seperti training, absensi, manpower, consumables, pengiriman, serta aset. Modul-modul ini tidak semua dapat diakses tanpa akun. Karena itu, daftar area dalam laporan adalah inventaris awal dan harus diverifikasi ketika akun uji tersedia.

## Observasi awal
Pada 26 November 2026, halaman `/login` dapat dibuka dan menampilkan Username serta Password. Permintaan langsung ke `/dashboard` tanpa sesi membutuhkan login. Belum ada pengujian transaksi, peran, integritas data, ataupun logout yang dijalankan dalam tugas ini.

## Alur bisnis dan batasan
1. User mengisi login dengan akun uji.
2. Sistem memeriksa autentikasi dan memberikan akses halaman sesuai role.
3. User membaca/memfilter data dan melakukan perubahan pada sandbox hanya jika termasuk izin.
4. Sistem menampilkan status, hasil, dan validasi.
5. User keluar dan sesi harus berakhir.

Untuk setiap modul, penguji perlu mendata nama menu, URL sebenarnya, jenis aktivitas (baca, filter, simpan, ekspor, hapus), role yang dapat mengakses, dan risiko operasi. Tidak ada klaim bahwa seluruh fungsi berada dalam satu akun.

## Perspektif risiko
- Sesi tersisa setelah logout.
- Filter periode memberi data yang tidak sesuai.
- Validasi form membiarkan input yang tidak sah.
- Hak akses role tidak sesuai spesifikasi.
- Proses penyimpanan dilakukan dua kali akibat klik berulang.
- Laporan tidak konsisten dengan data sumber.

Dokumen ini disusun untuk kepentingan akademik dan **tidak menyatakan bahwa risiko di atas telah ditemukan di GPX**.