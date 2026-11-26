# Keyword-driven Testing GPX

Penggunaan istilah aksi berulang ini terinspirasi pendekatan keyword-driven pada ISO/IEC/IEEE 29119-5:2024. Dokumen ini tidak mengklaim sertifikasi atau conformance standar.

| Keyword | Parameter | Aksi | Kondisi selesai |
|---|---|---|---|
| BUKA_HALAMAN | url | Kunjungi URL aplikasi | Halaman selesai ditampilkan |
| LOGIN_AKUN_UJI | role | Isi kredensial dari penyimpanan aman | Dashboard atau error muncul |
| PILIH_MENU | nama menu | Klik navigasi sesuai role | Halaman menu terbuka |
| ATUR_FILTER | kolom, nilai | Atur filter yang tersedia | Hasil berubah atau empty state |
| ISI_DATA_DUMMY | field, nilai | Masukkan data yang diizinkan | Form terisi |
| CEK_HASIL | expected | Bandingkan hasil aktual | PASS atau FAIL dicatat |
| SIMPAN_BUKTI | TC ID | Ambil screenshot tanpa identitas sensitif | Evidence terhubung dengan TC |
| LOGOUT | - | Klik logout | Sesi berakhir |
| CEK_AKSES_ULANG | url | Buka URL terlindungi setelah logout | Login diwajibkan |

Contoh satu rangkaian: `BUKA_HALAMAN(/login) → LOGIN_AKUN_UJI(role) → PILIH_MENU(Dashboard) → CEK_HASIL(...) → LOGOUT → CEK_AKSES_ULANG(/dashboard)`.

Kata kerja di atas adalah dokumentasi prosedur, bukan script otomatis yang sudah dieksekusi.