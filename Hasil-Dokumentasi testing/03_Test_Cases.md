# 03. Test Cases — GPX End-to-End

**Status awal seluruh kasus: NOT RUN.** Isi `Actual Result`, `Status`, dan nama screenshot sesudah benar-benar diuji.

| ID | Area | Skenario / langkah ringkas | Expected Result | Actual Result | Status | Evidence |
|---|---|---|---|---|---|---|
| E2E-001 | Login | Buka aplikasi tanpa sesi | Login terlihat / akses dashboard dilindungi | - | NOT RUN | - |
| E2E-002 | Login | Masukkan akun uji valid | Masuk ke dashboard sesuai role | - | NOT RUN | - |
| E2E-003 | Login | Masukkan kredensial salah | Login ditolak tanpa membuka data terlindungi | - | NOT RUN | - |
| E2E-004 | Dashboard | Muat dashboard setelah login | Panel dan navigasi tampil sesuai hak akses | - | NOT RUN | - |
| E2E-005 | Role | Akses modul tanpa izin role | Akses ditolak dengan respons tepat | - | NOT RUN | - |
| E2E-006 | Training | Buka daftar materi/assessment dengan akun uji | Data tampil atau empty state jelas | - | NOT RUN | - |
| E2E-007 | Manpower | Cari data dummy yang diizinkan | Hasil pencarian sesuai filter | - | NOT RUN | - |
| E2E-008 | Absensi | Ubah filter periode | Grafik/tabel berubah konsisten tanpa data lintas role | - | NOT RUN | - |
| E2E-009 | Asset | Cari kode aset dummy | Item sesuai, status dan histori konsisten | - | NOT RUN | - |
| E2E-010 | Consumables | Lakukan transaksi uji pada sandbox | Stok dan histori berubah konsisten satu kali | - | NOT RUN | - |
| E2E-011 | Gojek | Buka dan filter data uji yang diizinkan | Status serta total konsisten | - | NOT RUN | - |
| E2E-012 | Logout | Klik logout | Sesi berakhir dan kembali ke login | - | NOT RUN | - |
| E2E-013 | Session | Setelah logout, buka URL dashboard langsung | Tidak dapat mengakses halaman terproteksi | - | NOT RUN | - |

Tambahkan kasus untuk semua halaman yang ditemukan pada akun dan izin pengujian. Jangan menandai PASS berdasarkan rencana saja.
