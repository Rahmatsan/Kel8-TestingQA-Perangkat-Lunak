# 01. Rencana Unit Testing GPX

| Informasi | Isi |
|---|---|
| Dokumen | UT-GPX-PLAN-01 |
| Status | DRAFT / NOT RUN |
| Target | Fungsi aplikasi GPX yang disetujui dan ditemukan pada source code |
| Dasar materi | Pertemuan 5: Hierarki Pengujian (Unit Testing) |
| Teknik | Normal case, boundary/edge case, invalid input, isolasi dependensi |

## Sasaran
Memeriksa bahwa unit kode individual memberikan keluaran yang sesuai kontrak fungsi dan menangani input tidak valid. Pengujian dilakukan terpisah dari UI, database produksi, layanan eksternal, dan sesi login pengguna.

## Prasyarat / Entry criteria
- Izin peninjauan kode dan repositori sumber GPX.
- Identifikasi commit/versi kode serta fungsi yang hendak diuji.
- Spesifikasi perilaku, aturan validasi, dan data uji yang disetujui.
- Lingkungan lokal atau staging, framework unit test dan dependensi tersedia.
- Bila fungsi menggunakan database/API, tersedia mock, stub, atau test database terisolasi.

## Strategi
1. **Fungsi murni:** uji hasil keluaran terhadap beberapa input tanpa layanan eksternal.
2. **Validasi:** uji input normal, kosong, salah format, dan nilai di batas yang benar-benar ditentukan spesifikasi.
3. **Perhitungan:** uji angka normal, nol, dan nilai tidak sah; tentukan pembulatan berdasarkan kode/spesifikasi.
4. **Percabangan:** uji semua cabang logika yang bisa diidentifikasi, tanpa mengarang angka coverage.
5. **Isolasi:** gunakan mock/stub bila fungsi memanggil API, repository, atau database.

## Urutan kerja
Identifikasi fungsi → baca kode dan aturan → tulis assertion → jalankan test → catat actual result → perbaiki bug (oleh pemilik kode) → retest → laporan hasil.

## Kriteria pelaporan
- `PASS`: assertion sesuai hasil yang diharapkan.
- `FAIL`: assertion gagal dan hasil aktual dicatat.
- `BLOCKED`: fungsi/source/akses tidak tersedia.
- `N/A`: kandidat tidak sesuai implementasi nyata.
- `NOT RUN`: belum dieksekusi.

## Exit criteria (usulan)
Semua kasus prioritas tinggi yang relevan dijalankan atau diberi alasan BLOCKED; bukti hasil tersedia; defect penting didokumentasikan; dan fungsi yang diuji serta versi sumber disebutkan secara jelas.

## Keterbatasan
Saat dokumen ini disusun belum tersedia verifikasi fungsi konkret dan source code GPX di folder ini. Karena itu **tidak ada klaim PASS, FAIL, atau persentase code coverage**.
