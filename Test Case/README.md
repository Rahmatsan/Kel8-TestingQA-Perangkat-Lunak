# Test Case GPX

Gunakan [105 Test Case CSV](../Hasil-Dokumentasi%20testing/lampiran/03_Test_Cases.csv) sebagai matriks induk dan isi kolom Actual Result, Status, Evidence setelah pengujian nyata.

**Kelompok pengujian:** Autentikasi, Dashboard, Training, Manpower, Absensi, Overtime, B2C, Gojek, Consumables, Aset, FIFO, Daily Worker, Logout.

**Metode:** Black-box positif/negatif; Equivalence Partitioning, Boundary Value Analysis setelah batas valid terkonfirmasi; State Transition pada sesi; integrasi antarmodul.

## Aturan pelaporan
- NOT RUN: belum dieksekusi.
- PASS: observed result memenuhi expected result.
- FAIL: observed result menyimpang, dokumentasikan defect.
- BLOCKED: tidak dapat diuji akibat ketergantungan atau izin.
- N/A: tidak relevan untuk role atau fitur yang benar-benar tersedia.

Jangan menandai test case PASS hanya karena halaman terlihat pada screenshot orang lain.