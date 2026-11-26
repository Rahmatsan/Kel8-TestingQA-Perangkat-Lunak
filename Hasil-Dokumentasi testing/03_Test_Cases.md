# 03. Rancangan Test Case GPX E2E

Matriks induk ada pada [03_Test_Cases.csv](03_Test_Cases.csv). CSV dapat dibuka lewat Excel atau Google Sheets; isi kolom `Actual Result`, `Status`, dan `Evidence` setelah pelaksanaan.

**105 kasus = 21 area kandidat × 5 skenario.** Pengelompokan ini adalah *test inventory* awal, bukan klaim bahwa seluruh menu pasti ada atau sudah diperiksa. Beberapa tes yang memerlukan form ditandai N/A jika modul benar-benar hanya read-only. Semua status default **NOT RUN**.

## Cara eksekusi
1. Catat penguji, tanggal, environment/role, dan versi browser.
2. Mulai dari login, lalu ikuti alur navigasi sampai logout. Selesaikan kasus negatif secara aman pada data dummy.
3. Catat hasil aktual secara observasional dan lampirkan nama file evidence.
4. Status: PASS, FAIL, BLOCKED, N/A, NOT RUN. Saat gagal, buat ID bug dan tautkan ke test case.

## Contoh skenario prioritas
| ID | Skenario | Expected result | Status |
|---|---|---|---|
| GPX-E2E-001 | Buka aplikasi tanpa sesi | Arahkan ke login; data internal tidak terlihat | NOT RUN |
| GPX-E2E-002 | Login dengan kredensial akun uji sah | Masuk ke halaman yang diizinkan role; tidak ada error | NOT RUN |
| GPX-E2E-003 | Login dengan sandi salah | Login ditolak; tidak ada data pribadi terbuka | NOT RUN |
| GPX-E2E-004 | Field login kosong | Validasi ditampilkan; tidak membuat sesi | NOT RUN |
| GPX-E2E-005 | Akses URL dalam setelah sesi tidak valid | Ditolak/diarahkan login tanpa kebocoran data | NOT RUN |
| GPX-E2E-006 | Halaman tersedia sesuai hak akses | Halaman tampil sesuai izin atau akses ditolak secara jelas | NOT RUN |
| GPX-E2E-016 | Halaman tersedia sesuai hak akses | Halaman tampil sesuai izin atau akses ditolak secara jelas | NOT RUN |
| GPX-E2E-046 | Halaman tersedia sesuai hak akses | Halaman tampil sesuai izin atau akses ditolak secara jelas | NOT RUN |
| GPX-E2E-076 | Halaman tersedia sesuai hak akses | Halaman tampil sesuai izin atau akses ditolak secara jelas | NOT RUN |
| GPX-E2E-101 | Logout dari dashboard | Kembali ke login dan sesi berakhir | NOT RUN |
| GPX-E2E-102 | Navigasi kembali setelah logout | Data terlindungi tidak dapat dibaca tanpa sesi | NOT RUN |
| GPX-E2E-103 | Akses URL dashboard setelah logout | Aplikasi meminta login kembali | NOT RUN |
| GPX-E2E-104 | Akses modul lewat URL setelah logout | Tidak menampilkan isi data saat sesi berakhir | NOT RUN |
| GPX-E2E-105 | Login ulang setelah logout | Sesi baru berfungsi sesuai role dan tidak mewarisi data formulir | NOT RUN |

## Batasan
Rute yang sudah diketahui: `/login`, `/dashboard`, `/training/assessment`, `/consumables`. Rute lain ditemukan dan diverifikasi melalui navigasi akun uji, bukan ditebak lalu diasumsikan aktif.