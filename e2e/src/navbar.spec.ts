import { expect, test } from '@playwright/test';

const { describe } = test;

describe('Test navbar functionality', () => {
  test('should contain links', async ({ page }) => {
    await page.goto('/en');

    expect(page.getByLabel('Primary').getByRole('link', { name: 'Home' })).not.toBeNull();
    expect(page.getByLabel('Primary').getByRole('link', { name: 'About' })).not.toBeNull();
    expect(page.getByLabel('Primary').getByRole('link', { name: 'Projects' })).not.toBeNull();
    expect(page.getByLabel('Primary').getByRole('link', { name: 'Blog' })).not.toBeNull();
    expect(page.getByLabel('Primary').getByRole('link', { name: 'Faq' })).not.toBeNull();
    expect(page.getByLabel('Primary').getByRole('link', { name: 'Contact' })).not.toBeNull();
  });
  describe('Test should contain to the correct page', () => {
    test('should direct to the home page', async ({ page }) => {
      await page.goto('/en');
      await page.getByLabel('Primary').getByRole('link', { name: 'Home' }).click();
      await expect(page).toHaveURL('en');
    });
    test('should direct to the about page', async ({ page }) => {
      await page.goto('/en');
      await page.getByLabel('Primary').getByRole('link', { name: 'About' }).click();
      await expect(page).toHaveURL('en');
    });
    test('should direct to the projects page', async ({ page }) => {
      await page.goto('/en');
      await page.getByLabel('Primary').getByRole('link', { name: 'Projects' }).click();
      await expect(page).toHaveURL('en');
    });
    test('should direct to the blog page', async ({ page }) => {
      await page.goto('/en');
      await page.getByLabel('Primary').getByRole('link', { name: 'Blog' }).click();
      await expect(page).toHaveURL('en');
    });
    test('should direct to the faq page', async ({ page }) => {
      await page.goto('/en');
      await page.getByLabel('Primary').getByRole('link', { name: 'Faq' }).click();
      await expect(page).toHaveURL('en');
    });
    test('should direct to the Contact page', async ({ page }) => {
      await page.goto('/en');
      await page.getByLabel('Primary').getByRole('link', { name: 'Contact' }).click();
      await expect(page).toHaveURL('en');
    });
  });
});
