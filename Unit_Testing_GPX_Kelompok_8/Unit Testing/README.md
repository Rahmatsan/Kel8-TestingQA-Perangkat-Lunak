# Unit Testing GPX

**Mata kuliah:** Testing dan QA Perangkat Lunak, Semester 7  
**Kelompok:** 8  
**Objek:** GPX (Gudang Pembangunan Excellence)  
**Dasar pembelajaran:** Pertemuan 5, *Hierarki Pengujian (Unit Testing)*, Ahmad Fauzi, S.Kom., M.Kom., Universitas Pamulang.  
**Status:** Rancangan. Belum ada unit test terhadap kode produksi GPX yang dijalankan.

## Tujuan
Unit Testing memeriksa komponen terkecil program secara terisolasi, misalnya fungsi validasi, perhitungan, atau transformasi data. Berbeda dari End-to-End Testing, Unit Testing tidak memerlukan proses Login sampai Logout melalui browser. Kedua metode saling melengkapi.

Materi Pertemuan 5 membahas hierarki pengujian, penerapan unit test, serta penggunaan Visual Studio Code. Bagian evaluasi materi juga memberi contoh latihan JUnit dalam Java untuk fungsi sederhana dengan kondisi normal, kasus batas, dan input tidak valid. Contoh tersebut adalah **latihan pembelajaran**, bukan bukti bahwa GPX memakai Java/JUnit.

## Penerapan yang diusulkan pada GPX
Tentukan fungsi yang benar-benar tersedia pada source code GPX, baru buat pengujiannya. Kandidatnya adalah:

- Validasi kelengkapan input Login (tanpa menguji autentikasi layanan asli).
- Validasi tanggal dan parameter filter laporan.
- Kalkulasi total dan saldo transaksi consumables.
- Perhitungan indikator rekap absensi.
- Pemeriksaan batasan input form sesuai spesifikasi modul.

Kandidat ini **bukan pernyataan bahwa nama fungsi/rumus tersebut sudah diverifikasi**. Kode asli dan aturan bisnis tetap menjadi sumber acuan.

## Isi folder
- `01_Rencana_Unit_Testing.md`: ruang lingkup, prasyarat, strategi dan prosedur.
- `02_Unit_Test_Cases.csv`: 12 skenario awal dengan kolom hasil aktual.
- `03_Template_Hasil_Pengujian.md`: format catatan eksekusi, laporan coverage dan kesimpulan.

## Tahapan pelaksanaan
1. Pastikan izin dan akses source code untuk versi GPX yang akan diuji.
2. Pilih fungsi nyata serta identifikasi input, output, dependensi, dan aturan bisnisnya.
3. Sesuaikan 12 kandidat test case dengan fungsi dan batasan sebenarnya. Tandai N/A bila tidak relevan.
4. Pilih framework berdasarkan bahasa/stack yang **terverifikasi** (contoh: PHPUnit untuk fungsi PHP, atau JUnit untuk Java).
5. Jalankan pengujian di lingkungan lokal/sandbox yang terisolasi dengan data dummy.
6. Catat hasil PASS/FAIL, pesan error, tanggal, penguji, dan evidence; jalankan coverage jika didukung.
7. Hubungkan hasilnya ke `Hasil-Dokumentasi testing/05_Test_Report.md` setelah dieksekusi.

**Keamanan:** Jangan menyertakan password, token, database produksi, data identitas karyawan, atau surat izin bertanda tangan di repository publik.
