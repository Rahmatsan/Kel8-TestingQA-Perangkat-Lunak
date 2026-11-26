// Dokumentasi pengujian GPX Kelompok 8. Belum merupakan hasil eksekusi QA.
const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  retries: 0,
  workers: 1,
  use: { baseURL: process.env.GPX_URL || 'https://gudangpembangunan.up.railway.app', headless: true, trace: 'off', screenshot: 'off' },
});