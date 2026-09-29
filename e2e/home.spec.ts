import { expect, test } from '@playwright/test';

test('홈 화면이 열린다', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: '360° Virtual Tour Portfolio' })).toBeVisible();
  await expect(page).toHaveTitle(/Nadir 360/);
});
