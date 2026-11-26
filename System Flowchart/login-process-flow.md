# System Flowchart: Login dan Logout GPX

Diagram berikut bersifat logis; diambil dari perilaku aplikasi yang diharapkan, bukan reverse engineering source code GPX.

```mermaid
flowchart TD
    A([Mulai]) --> B[Buka /login]
    B --> C[Masukkan username dan password akun uji]
    C --> D{Input lengkap?}
    D -- Tidak --> E[Tampilkan validasi]
    E --> C
    D -- Ya --> F{Autentikasi berhasil?}
    F -- Tidak --> G[Pesan penolakan]
    G --> C
    F -- Ya --> H[Dashboard sesuai role]
    H --> I[Gunakan modul yang diizinkan]
    I --> J[Klik Logout]
    J --> K[Hapus/akhiri sesi]
    K --> L[Uji kembali URL /dashboard]
    L --> M{Data terlindungi terlihat?}
    M -- Tidak --> N([Selesai sesuai harapan])
    M -- Ya --> O[Catat defect keamanan sesi]
```

## Alternatif yang wajib diuji
- Input kosong.
- Password salah.
- Akses URL dashboard tanpa sesi.
- Tombol kembali setelah logout.
- Login ulang setelah logout.

Lihat `Test Scenario` dan `Test Case` untuk expected result detail.