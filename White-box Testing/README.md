# White-box Testing GPX: Metodologi dan Status

White-box mengharuskan penguji membaca kode yang sesuai dengan versi aplikasi yang diuji. Screenshot UI dan flowchart pengguna tidak cukup untuk menghitung Cyclomatic Complexity atau branch coverage.

Tahapan yang direncanakan:
1. Dapatkan akses kode sumber GPX untuk versi/deployment yang spesifik, beserta izin audit.
2. Pilih unit seperti handler login, middleware role, validasi form, atau operasi stok dummy.
3. Gambar control-flow graph berdasarkan kode nyata.
4. Hitung `V(G) = E - N + 2` dan cek terhadap `P + 1` untuk struktur yang cocok.
5. Rancang jalur independen, test data, expected result, actual result, dan evidence.
6. Nyatakan bagian yang tidak dapat diuji tanpa mengarang persentase coverage.

**Status:** Belum diaudit. Tidak ada angka node, edge, path atau hasil white-box yang dapat dibenarkan saat ini. [Flowchart konseptual](../Hasil-Dokumentasi%20testing/02_WhiteBox_Flow_Analysis.md) disiapkan terpisah.