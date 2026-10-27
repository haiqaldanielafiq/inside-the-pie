import { test, expect } from '@playwright/test';

test('capture homepage desktop and mobile screenshots', async ({ page }) => {
  // Set desktop viewport
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });

  // Wait for header text
  await page.waitForSelector('text=Inside the Pie', { timeout: 5000 });
  await page.waitForTimeout(500);

  // Take Desktop Homepage Screenshot
  await page.screenshot({ path: 'screenshots/desktop-homepage.png', fullPage: true });

  // Click on Spark mascot
  await page.click('button:has-text("Spark")');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshots/desktop-spark-selected.png' });

  // Open Module Drawer
  await page.click('button:has-text("Explore 6 Math Modules")');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshots/desktop-module-modal.png' });

  // Mobile Viewport
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('text=Inside the Pie', { timeout: 5000 });
  await page.waitForTimeout(500);

  // Mobile Homepage Screenshot
  await page.screenshot({ path: 'screenshots/mobile-homepage.png', fullPage: true });
});
