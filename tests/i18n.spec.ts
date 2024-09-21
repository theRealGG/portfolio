import { expect, test, type Cookie } from '@playwright/test';

test.describe('Test internationalization', () => {
  test('should handle routing', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/en');

    await page.goto('/de');
    await page.goto('/');
    await expect(page).toHaveURL('/de');
  });
  test('should set a cookie', async ({ page }) => {
    function localeCookies(cookies: Array<Cookie>) {
      return cookies.find((cookie) => cookie.name === 'locale');
    }

    await page.goto('/en');
    const localeCookie = localeCookies(await page.context().cookies());

    expect(localeCookie?.path).toBe('/');
    expect(localeCookie?.sameSite).toBe('Strict');
    expect(localeCookie?.httpOnly).toBeTruthy();
    expect(localeCookie?.secure).toBeFalsy();
    expect(localeCookie?.value).toBe('en');

    await page.goto('/de');
    await expect(page).toHaveURL('/de');

    expect(localeCookies(await page.context().cookies())?.value).toBe('de');
  });
});
