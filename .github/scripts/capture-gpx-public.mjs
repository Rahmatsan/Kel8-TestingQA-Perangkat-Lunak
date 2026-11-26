import { chromium, devices } from 'playwright';
import fs from 'node:fs/promises';

const folder = 'Hasil-Dokumentasi testing/screenshots';
await fs.mkdir(folder, { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const [label, options] of [
    ['desktop', { viewport: { width: 1365, height: 900 }, deviceScaleFactor: 1 }],
    ['mobile', devices['iPhone 13']]
  ]) {
    const context = await browser.newContext(options);
    const page = await context.newPage();
    await page.goto('https://gudangpembangunan.up.railway.app/login', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.getByText('Gudang Pembangunan Excellence').waitFor({ timeout: 20000 });
    await page.locator('input[type="password"]').waitFor({ timeout: 20000 });
    await page.screenshot({ path: `${folder}/GPX-LOGIN-public-${label}.png`, fullPage: true, animations: 'disabled' });
    console.log(`${label}: ${page.url()}, screenshot captured`);
    await context.close();
  }
} finally {
  await browser.close();
}