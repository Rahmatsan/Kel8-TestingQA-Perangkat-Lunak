# Test Plan GPX

| Metadata | Isi |
|---|---|
| Dokumen | TP-GPX-01 |
| Versi | 1.2, 26 November 2026 |
| Tim | Kelompok 8, Teknik Informatika Semester 7 |
| Objek | GPX, Gudang Pembangunan Excellence |
| Status | Rancangan pengujian; belum dijalankan |

## 1. Pendahuluan
GPX memuat informasi operasional lintas fitur yang bergantung pada autentikasi dan kontrol role. Pengujian disusun untuk menilai proses yang dilalui pengguna, mulai dari masuk ke sistem, mengakses dashboard, berinteraksi dengan modul yang tersedia, sampai mengakhiri sesi. Bukan seluruh fungsi boleh diuji di produksi karena sebagian melibatkan data operasional.

## 2. Tujuan
Memverifikasi autentikasi, navigasi, validasi dan pengolahan data dummy, hak akses, konsistensi antarmodul, penanganan error, serta penutupan sesi. Bug yang ditemukan akan dilaporkan dengan langkah reproduksi dan bukti yang sudah disamarkan.

## 3. Ruang lingkup dan batasan
**In scope:** Login/Logout, Dashboard, modul Training, Manpower, Ranking, Leave, Attendance, Overtime, B2C, Gojek, Consumables, Assets, FIFO dan Daily Worker sesuai menu/role aktual.  
**Out of scope tanpa izin khusus:** mengubah data nyata, ekspor informasi sensitif, brute force, exploit, load/stress test produksi, dan otomasi transaksi berulang.

## 4. Strategi
- Black-box manual untuk alur UI serta input/output; teknik EP, BVA, Decision Table, State Transition.
- Integration/System E2E dari login ke logout.
- White-box Basis Path jika kode dan izin telah tersedia; coverage tidak dikarang.
- UAT bersama perwakilan pengguna setelah test case utama dilaksanakan.
- Regression setelah perbaikan dan API/Security/Performance secara terbatas di lingkungan yang disetujui.

## 5. Test data, environment, dan tools
Akun khusus dan data dummy yang diizinkan. Catat browser, OS, tanggal, role, environment, deployment/version serta test case ID. Gunakan spreadsheet, screenshot tersamarkan, DevTools berizin, dan Playwright pada skenario non-destruktif.

## 6. Entry criteria
Izin pemilik, scope tertulis, akun dan role, sandbox/backup, dataset, dan daftar skenario.

## 7. Exit criteria (usulan)
Seluruh kasus prioritas tinggi yang relevan dieksekusi/ditandai blocked dengan alasan; bukti tersedia; critical defect ditangani atau risikonya disetujui pemilik; laporan ditinjau.

## 8. Risks
Gangguan operasional → jangan uji tulis di produksi. Kebocoran data → redaksi evidence. Perubahan versi → simpan baseline. Terbatasnya role → tandai BLOCKED dan laporkan keterbatasan cakupan.

## 9. Urutan kerja
Plan → Scenario → Case → Review → Execute → Defect → Retest → UAT → Report. Tanggal pengujian serta hasil aktual diisi setelah benar-benar terjadi.

## 10. Status sekarang
Hanya halaman Login publik yang telah diamati, dashboard meminta autentikasi. Belum ada eksekusi internal. Lebih rinci lihat [STP utama](../Hasil-Dokumentasi%20testing/01_Test_Plan.md) dan [105 test cases](../Hasil-Dokumentasi%20testing/lampiran/03_Test_Cases.csv).