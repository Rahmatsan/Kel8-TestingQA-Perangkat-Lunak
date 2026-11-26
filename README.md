# Software Testing & Quality Assurance: GPX

**Dokumentasi:** Pengujian E2E GPX · Kelompok 8 · Revisi 26 November 2026

**Kelompok 8 · Teknik Informatika · Semester 7 · Universitas Pamulang**

Repository ini menyimpan perencanaan dan dokumentasi pengujian aplikasi web **GPX (Gudang Pembangunan Excellence)**, mengikuti materi mata kuliah Testing dan QA Perangkat Lunak (Pertemuan 1–16). Struktur dokumentasi dibagi berdasarkan tahapan perencanaan, desain, pelaksanaan, pelaporan defect, dan evaluasi hasil pengujian GPX.

**Objek:** https://gudangpembangunan.up.railway.app/dashboard  
**Batas E2E:** mulai pada Login Page, selesai pada Logout / End Session.

## Status pengerjaan

| Bagian | Status |
|---|---|
| Inventaris awal dan Test Plan | Disiapkan |
| Test Scenario, Case dan Decision Table | Disiapkan |
| Rancangan use case, alur dan white-box | Disiapkan, belum diuji kode |
| Automation | Contoh smoke test tersedia, belum dieksekusi |
| Bukti screenshot | Belum dikumpulkan |
| Pengujian E2E internal | NOT RUN (perlu akun/izin) |
| PASS/FAIL | Belum tersedia |

Terdapat **105 test case kandidat**. Jumlah tersebut bukan persyaratan minimum dari dosen, dan beberapa modul/aturan perlu divalidasi lebih dahulu setelah login.

## Dokumen utama

| Folder atau berkas | Tujuan |
|---|---|
| [System Overview](System%20Overview.md) | Profil objek, alur dan batasan |
| [Test Plan](Test%20Plan/Test%20Plan.md) | Tujuan, scope, strategi dan kriteria |
| [Test Scenario](Test%20Scenario/Test%20Scenario.md) | Skenario positif/negatif |
| [Matriks dan Use Case](Matriks%20dan%20Use%20Case/Matriks%20dan%20Use%20Case.md) | Matriks role dan use case |
| [System Flowchart](System%20Flowchart/login-process-flow.md) | Alur login, modul dan logout |
| [Test Case](Test%20Case/README.md) | Metode dan tautan CSV 105 kasus |
| [White-box Testing](White-box%20Testing/README.md) | Rencana basis path, menunggu source code |
| [Test Evidence](Test%20Evidence/README.md) | Panduan screenshot |
| [Bug Report](Bug%20Report/README.md) | Pencatatan defect |
| [Test Report](Test%20Report/README.md) | Ringkasan hasil sementara |
| [Automation Testing](Automation%20Testing/README.md) | Smoke test publik dan batasan alat |
| [Regression](Regression/Regression%20Record.md) | Rekap retest |
| [UAT](UAT/UAT%20Plan%20dan%20Hasil.md) | Validasi penerimaan pengguna |
| [Pemetaan Materi](Pemetaan%20Materi.md) | Kaitan ke 16 pertemuan kuliah |

Folder **Hasil-Dokumentasi testing/** tetap dipertahankan agar laporan lima berkas inti dan matriks CSV yang sebelumnya dibuat tidak hilang.

## Aturan
Laporan memisahkan rancangan, observasi, dan hasil tes nyata. Pengujian yang memodifikasi data hanya pada sandbox dengan izin. Jangan unggah surat izin bertanda tangan, akun pribadi, token, data karyawan, atau informasi bisnis internal ke repository Public.