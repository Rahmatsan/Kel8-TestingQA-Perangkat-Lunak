const { test, expect } = require('@playwright/test');

// Pengujian observasional pada halaman publik; tidak login atau memodifikasi data.
test('Halaman login GPX menampilkan input username dan password', async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByText('Gudang Pembangunan Excellence')).toBeVisible();
  await expect(page.locator('input[type="password"]')).toBeVisible();
  await expect(page.locator('input')).toHaveCount(2);
});
// Status test tetap NOT RUN sampai skrip dijalankan dan hasilnya dicatat.
// Jika struktur form aplikasi berubah, perbarui selector setelah observasi manual.
