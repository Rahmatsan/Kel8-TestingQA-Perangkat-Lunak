# 01. Software Test Plan (STP): Pengujian E2E GPX

**Dokumen:** STP-GPX-01 | **Versi:** 1.1 | **Tanggal revisi:** 26 November 2026  
**Mata kuliah:** Testing dan QA Perangkat Lunak | **Kelompok:** 8  
**Objek:** https://gudangpembangunan.up.railway.app/dashboard  
**Status dokumen:** Rencana pengujian; eksekusi internal belum dilakukan.

## Latar belakang
GPX digunakan untuk menampilkan informasi operasional dan beberapa proses administrasi melalui halaman web. Setiap menu melibatkan autentikasi, pembacaan data, filter, dan pada sebagian fungsi transaksi atau perubahan data. Kekeliruan validasi atau pengelolaan sesi dapat menyebabkan informasi tidak sesuai, akses tidak tepat, atau proses kerja terganggu. Pengujian ini disusun agar alur utama dinilai dari sudut pandang pengguna, bukan hanya dari ketersediaan halaman.

## Tujuan dan pertanyaan uji
1. Apakah pengguna yang sah bisa login dan mengakses halaman sesuai role?
2. Apakah dashboard, navigasi, pencarian, filter, dan validasi pada modul yang diizinkan sesuai hasil yang diharapkan?
3. Apakah perpindahan antarmodul menjaga konsistensi data dan menampilkan pesan kesalahan yang layak?
4. Apakah logout benar-benar mengakhiri sesi dan mencegah akses ulang ke halaman terlindungi?

## Lingkup
**Awal:** Login Page (`/login`). **Akhir:** Logout dan end session.  
Area kandidat meliputi Dashboard; Training (materi, kuis, assessment); Manpower; Top Ranking; Annual Leave; Attendance; Overtime; B2C Lookup; Gojek; Consumables; Support Asset; FIFO Dispatch; Daily Worker. Area ini perlu dicocokkan dengan menu sebenarnya pada role pengujian. Pengujian transaksi tulis, hapus, dan status pengiriman dibatasi pada sandbox atau data dummy dengan izin pemilik.

**Di luar lingkup tanpa izin terpisah:** pengujian agresif, eksploitasi keamanan, load/stress test pada produksi, mengubah data karyawan sungguhan, menghapus transaksi, dan akses ke data yang tidak diizinkan.

## Metode
- **Black Box / Functional E2E:** validasi input-output dan skenario positif-negatif.
- **Equivalence Partitioning dan Boundary Value Analysis:** untuk field yang diketahui aturan validasinya.
- **Integration dan System Testing:** konsistensi UI, respons layanan, dan data setelah navigasi.
- **Grey Box:** inspeksi respons jaringan terbatas pada akun/data uji setelah izin.
- **White Box:** hanya jika tersedia akses source code dan disetujui; flowchart bukan ukuran code coverage.
- **Regression:** uji ulang fungsi relevan setelah perbaikan.
- **UAT:** pemeriksaan kesesuaian kebutuhan oleh perwakilan pengguna.
- **Non-functional:** observasi usability, kompatibilitas, dan performa ringan. Tidak ada stress test pada produksi.

## Lingkungan dan sumber daya
Browser, versi OS, device, resolution, role, tanggal, waktu, versi/deployment GPX dicatat saat eksekusi. Alat: browser devtools (bila diizinkan), spreadsheet test case, screenshot yang disamarkan, dan GitHub Issues untuk defect yang layak dibagikan. Gunakan dataset dummy dan akun khusus, bukan kredensial akun pribadi.

## Entry criteria
Persetujuan tertulis pemilik; scope yang disetujui; akun uji dan hak akses; backup/rollback bila perlu; daftar kebutuhan atau acceptance criteria; lingkungan uji; daftar test case dan penanggung jawab.

## Exit criteria (usulan; perlu disetujui pemilik)
Seluruh test case prioritas tinggi yang relevan telah dijalankan atau diberi alasan BLOCKED; seluruh hasil memiliki bukti; tidak ada defect kritikal yang belum ditangani atau risiko telah disetujui pemilik; laporan akhir ditinjau pengguna.

## Penanganan hasil
`PASS` sesuai expected result; `FAIL` menyimpang; `BLOCKED` tidak dapat dijalankan karena prasyarat; `NOT RUN` belum diuji; `N/A` fitur tidak tersedia di role/lingkup aktual. Hasil yang belum dibuktikan tidak boleh dinyatakan lulus.

## Risiko dan mitigasi
- Sesi dan role terbatas → konfirmasi akses serta tandai BLOCKED.
- Data produksi sensitif → data dummy, penyamaran screenshot, tidak mengunggah token.
- Fitur berubah saat eksekusi → catat versi/tanggal dan ulangi kasus yang terpengaruh.
- Operasi tulis berisiko → gunakan sandbox dan prosedur pemulihan.
- API/performance test dapat menambah beban → batasi hanya atas izin dan tingkat permintaan rendah.

## Tahap kerja
Perencanaan → penyusunan test case → tinjauan pemilik → pengujian → pencatatan defect → retest/regression → UAT → laporan akhir. Tanggal eksekusi diisi sesuai pelaksanaan, bukan direkayasa.

**Referensi materi:** Pertemuan 2 (proses testing), 3–4 (strategi), 6–9 (integrasi, fungsional, sistem, UAT), 11–16 (regresi, API, performa, keamanan, bug, dokumentasi).