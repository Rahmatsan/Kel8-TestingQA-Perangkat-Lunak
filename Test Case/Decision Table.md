# Decision Table GPX (Rancangan)

**Konteks:** Dokumentasi Testing dan QA E2E GPX Kelompok 8.

## DT-01 Autentikasi
Y = ya, T = tidak, - = tidak berpengaruh.

| Kondisi / aturan | R1 | R2 | R3 | R4 |
|---|---|---|---|---|
| Field login lengkap | T | Y | Y | Y |
| Kredensial akun uji valid | - | T | Y | Y |
| Sesi aktif terbentuk | - | T | Y | Y |
| Role boleh akses target | - | - | T | Y |
| Expected | Validasi form | Login ditolak | Target ditolak | Dashboard/menu sesuai role |

## DT-02 Akses setelah logout

| Kondisi / aturan | R1 | R2 | R3 |
|---|---|---|---|
| Sesi aktif | Y | T | T |
| URL terlindungi dibuka | Y | Y | T |
| Expected | Akses sesuai role | Arahkan ke login | Halaman publik saja |

## DT-03 Validasi input (umum, perlu konfirmasi spesifikasi)

| Kondisi / aturan | R1 | R2 | R3 |
|---|---|---|---|
| Field wajib lengkap | T | Y | Y |
| Format/rentang valid | - | T | Y |
| Expected | Tolak + pesan | Tolak + pesan | Terima bila diizinkan |

**Tidak mengasumsikan panjang password, durasi sesi, atau nilai batas tertentu sebelum diverifikasi dari spesifikasi.**