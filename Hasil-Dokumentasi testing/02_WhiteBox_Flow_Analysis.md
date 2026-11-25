# 02. White-Box / Flow Analysis — GPX

**Status:** PERENCANAAN, bukan hasil code review.

## Alur konseptual E2E
```mermaid
flowchart TD
    A[Login Page] --> B{Kredensial valid?}
    B -- Tidak --> C[Pesan kesalahan]
    C --> A
    B -- Ya --> D[Dashboard]
    D --> E[Pilih modul sesuai role]
    E --> F[Baca / isi data dummy]
    F --> G{Validasi berhasil?}
    G -- Tidak --> H[Pesan validasi dan perbaikan]
    H --> F
    G -- Ya --> I[Simpan / lihat hasil]
    I --> J[Logout]
    J --> K[End Session]
    K --> L{Akses ulang URL terlindungi?}
    L -- Diblokir --> M[Expected: kembali ke login]
```

## Area analisis kode bila diberikan izin
- Middleware autentikasi dan session expiration.
- Role-based authorization pada route dan API.
- Error handling input dan server.
- Integritas operasi tulis dan audit log.
- Pengujian unit/branch untuk logika khusus modul.

**Batasan:** tanpa audit source code, analisis ini merupakan *flow analysis*, bukan bukti cakupan white-box.
