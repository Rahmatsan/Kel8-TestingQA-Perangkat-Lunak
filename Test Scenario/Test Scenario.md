# TEST SCENARIO: GPX

**Objek:** GPX | **Metode utama:** Black-box dan pengujian sistem E2E | **Status:** RANCANGAN

Setiap skenario di bawah diturunkan menjadi test case. Positif berarti kondisi yang seharusnya diterima; negatif berarti kondisi yang harus ditolak/ditangani. Skenario pada modul yang belum diverifikasi tetap dianggap kandidat.

| ID | Area | Test Scenario | Jenis | Prioritas | Referensi test case |
|---|---|---|---|---|---|
| TS-AU-01 | Login | Pengguna membuka /dashboard tanpa sesi | Negatif | High | GPX-E2E-001 |
| TS-AU-02 | Login | Pengguna sah login dengan akun uji | Positif | High | GPX-E2E-002 |
| TS-AU-03 | Login | Password salah ditolak | Negatif | High | GPX-E2E-003 |
| TS-AU-04 | Login | Field kosong divalidasi | Negatif | Medium | GPX-E2E-004 |
| TS-AU-05 | Sesi | Deep link tanpa sesi tidak membuka data | Negatif | High | GPX-E2E-005 |
| TS-DB-01 | Dashboard | Muat ringkasan dan navigasi sesuai role | Positif | High | GPX-E2E-006 |
| TS-DB-02 | Dashboard | Filter dan grafik konsisten pada periode terpilih | Positif | High | GPX-E2E-007 |
| TS-TR-01 | Training | Materi/quiz/assessment dapat ditelusuri sesuai izin | Positif | Medium | GPX-E2E-011..025 |
| TS-MP-01 | Manpower | Cari data dummy sesuai role | Positif | High | GPX-E2E-026..030 |
| TS-AT-01 | Attendance | Perubahan filter mengubah isi tabel/grafik sesuai tanggal | Positif | High | GPX-E2E-041..045 |
| TS-OT-01 | Overtime | Filter/validasi rekap lembur sesuai aturan | Positif | High | GPX-E2E-046..050 |
| TS-B2-01 | B2C | Lookup nomor order dummy dan kondisi tidak ditemukan | Positif/Negatif | Medium | GPX-E2E-051..055 |
| TS-GJ-01 | Gojek | Data Ready to Pick, Terkirim, Cancel konsisten | Positif | High | GPX-E2E-056..070 |
| TS-CS-01 | Consumables | Stok dan transaksi dummy sinkron setelah perubahan sandbox | Positif | High | GPX-E2E-071..085 |
| TS-AS-01 | Asset | Pencarian dan status aset konsisten | Positif | Medium | GPX-E2E-086..090 |
| TS-DW-01 | Daily Worker | Validasi input dan rekap dummy | Positif/Negatif | High | GPX-E2E-096..100 |
| TS-RL-01 | Otorisasi | Role tanpa hak tidak dapat membuka menu terlindungi | Negatif | High | Dirancang terpisah |
| TS-LO-01 | Logout | Logout mengakhiri sesi dan mengalihkan ke login | Positif | High | GPX-E2E-101 |
| TS-LO-02 | Logout | Back dan URL lama tidak menampilkan isi setelah logout | Negatif | High | GPX-E2E-102..104 |
| TS-RG-01 | Regression | Login dan navigasi tetap bekerja setelah perbaikan | Positif | Medium | GPX-E2E-105 |

## Langkah kerja saat pengujian
Pilih akun dan role, catat baseline, jalankan skenario tanpa mengubah data nyata, lihat hasil, isi Actual Result dan Evidence, lalu simpulkan status. Pada menu yang tidak tersedia untuk role uji, catat N/A atau BLOCKED, bukan FAIL.

## Teknik desain
- **Equivalence Partitioning:** kredensial sah/tidak sah; nomor order ada/tidak ada; data valid/tidak valid.
- **Boundary Value Analysis:** panjang input dan batas jumlah hanya setelah aturan sistem diketahui.
- **Decision Table:** kombinasi sesi aktif, kredensial sah, izin role, dan keadaan form.
- **State Transition:** unauthenticated → authenticated → module → logout → unauthenticated.
- **Use Case Testing:** satu alur utama dan minimal satu alur alternatif yang relevan.

**Catatan:** Skenario tambahan di luar 105 kandidat harus memperoleh ID dan ditambahkan ke matriks sebelum eksekusi.