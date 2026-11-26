# 02. Analisis Alur dan Rencana White Box GPX

## Kedudukan analisis
Diagram ini adalah **model alur pengguna** yang perlu dikonfirmasi saat pengujian. Ini bukan bukti bahwa kode sumber telah diaudit atau seluruh branch telah tercakup. Teknik white-box pada Pertemuan 3 memerlukan akses kode, fungsi yang diuji, dan bukti statement/branch/path coverage.

```mermaid
flowchart TD
    A[Mulai: buka GPX] --> B{Sesi aktif?}
    B -- Tidak --> C[Form login]
    C --> D{Kredensial valid?}
    D -- Tidak --> E[Pesan kesalahan]
    E --> C
    D -- Ya --> F[Dashboard]
    B -- Ya --> F
    F --> G{Menu diizinkan role?}
    G -- Tidak --> H[Akses ditolak / menu disembunyikan]
    H --> F
    G -- Ya --> I[Buka modul]
    I --> J{Ada input atau filter?}
    J -- Ya --> K[Masukkan data dummy / filter]
    K --> L{Validasi sesuai aturan?}
    L -- Tidak --> M[Pesan validasi]
    M --> K
    L -- Ya --> N[Tampilkan hasil / simpan di sandbox]
    J -- Tidak --> N
    N --> O[Periksa konsistensi / kembali ke dashboard]
    O --> P[Logout]
    P --> Q[End Session]
    Q --> R[Uji URL terlindungi tanpa sesi]
```

## Rencana pemeriksaan kode (hanya bila akses tersedia)
| Area kode | Cabang yang dianalisis | Bukti yang diperlukan |
|---|---|---|
| Handler login | Valid / invalid / field kosong | Source function, test unit, hasil assertion |
| Middleware sesi | Sesi aktif / kedaluwarsa / logout | Tes request dan branch coverage |
| Permission/role | Diizinkan / ditolak | Matrix role dan assertion |
| Validasi form | Data valid / kosong / batas nilai | Unit test dan kasus batas |
| Transaksi data | Sukses / gagal / rollback | Mock/sandbox, log teredaksi |

Tanpa akses kode, hanya **black-box functional flow** yang dapat dinilai. Jangan membuat persentase coverage sebelum instrumentasi dan eksekusi nyata.