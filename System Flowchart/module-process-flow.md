# System Flowchart: Navigasi dan Validasi Modul GPX

Diagram berlaku sebagai model umum untuk fitur dalam scope. Jika menu tidak punya form edit, pengujian tulis ditandai N/A.

```mermaid
flowchart TD
    A[Dashboard setelah login] --> B[Pilih menu]
    B --> C{Role berhak?}
    C -- Tidak --> D[Akses ditolak]
    C -- Ya --> E[Halaman modul tampil]
    E --> F{Terdapat filter/input?}
    F -- Tidak --> G[Periksa data tampilan]
    F -- Ya --> H[Isi filter atau data dummy]
    H --> I{Validasi berhasil?}
    I -- Tidak --> J[Pesan validasi, data tidak berubah]
    J --> H
    I -- Ya --> K{Aksi tulis diizinkan di sandbox?}
    K -- Ya --> L[Simpan dan cek hasil sekali]
    K -- Tidak --> G
    L --> G
    G --> M[Kembali ke dashboard]
```

Periksa: empty state, tabel, total agregat, konsistensi filter, kesalahan respons, dan perilaku refresh.