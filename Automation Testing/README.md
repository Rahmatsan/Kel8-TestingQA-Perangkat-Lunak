# Automation Testing GPX (rancangan aman)

**Dokumentasi:** Pengujian E2E GPX · Kelompok 8 · Revisi 26 November 2026

Otomatisasi GPX direncanakan menggunakan Playwright untuk pengujian antarmuka, Postman untuk API, dan k6 untuk performa pada lingkungan yang diizinkan. Pengujian tersebut **belum dijalankan** karena akun pengujian, izin, endpoint resmi, dan sandbox belum ditetapkan.

Isi folder:
- `playwright/`: smoke test publik pada login, tanpa autentikasi atau operasi tulis.
- `postman/`: panduan rencana API testing; endpoint tidak ditebak.
- `k6/`: pedoman pengukuran performa, **bukan** skrip load test produksi.

Jangan menjalankan crawler, brute force login, pengetesan agresif, load testing, atau penulisan data di aplikasi produksi tanpa izin tertulis eksplisit.