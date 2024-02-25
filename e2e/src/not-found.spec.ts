import { expect, test } from '@playwright/test';

const { describe } = test;

describe('Test not-found functionality', () => {
  test('should render global not found page', async ({ page }) => {
    await page.goto('/fre/fro/fi');
    const heading = page.getByRole('heading', { name: 'This page does not exist' });
    expect(heading).not.toBeNull();
  });
  test('should contain links to pages', async ({ page }) => {
    await page.goto('/fre/fro/fi');
    expect(page.getByRole('heading', { name: 'About' }).getByRole('link')).not.toBeNull();
    expect(page.getByRole('heading', { name: 'Faq' }).getByRole('link')).not.toBeNull();
    expect(page.getByRole('heading', { name: 'Contact' }).getByRole('link')).not.toBeNull();
    expect(page.getByRole('heading', { name: 'Blog' }).getByRole('link')).not.toBeNull();
  });
  test('should redirect to new page', async ({ page }) => {
    await page.goto('/fre/fro/fi');
    await page.getByRole('heading', { name: 'About' }).getByRole('link').click();
    await expect(page).toHaveURL('/en/about');
  });
});
