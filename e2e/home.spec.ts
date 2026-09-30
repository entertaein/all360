import { expect, test } from '@playwright/test';

test('홈에서 Case Study로 이동하고 돌아온다', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Nadir 360');
  await page
    .getByRole('region', { name: '프로젝트' })
    .getByRole('link', { name: 'Nadir 360', exact: true })
    .click();
  await expect(page).toHaveURL(/\/projects\/nadir-360$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Nadir 360' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: '검증', exact: true })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    /\/projects\/nadir-360$/,
  );
  await page.getByRole('link', { name: '프로젝트 목록으로' }).click();
  await expect(page).toHaveURL(/\/#projects$/);
});

test('없는 프로젝트에는 복귀 안내를 제공한다', async ({ page }) => {
  await page.goto('/projects/does-not-exist');
  await expect(page.getByRole('heading', { name: '프로젝트를 찾을 수 없습니다' })).toBeVisible();
  await page.getByRole('link', { name: '홈으로 돌아가기' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('프론트엔드 개발자');
});

test('키보드로 본문을 바로 탐색할 수 있다', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: '본문 바로가기' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();
});

test('모바일 폭에서 가로 스크롤이 생기지 않는다', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  expect(overflow).toBe(false);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
