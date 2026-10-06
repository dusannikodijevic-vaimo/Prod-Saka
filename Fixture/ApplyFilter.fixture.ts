import { Page, expect } from '@playwright/test';

export async function ApplyFilter(
    page: Page,
): Promise<void> {
        
    // Verify that user can filter by car brand
    await (page.getByRole('button', { name: 'Vetotapa' }).click());
    await page.getByRole('button', { name: 'Neliveto' }).click();
    await expect(page).toHaveURL(/.*drive=Neliveto/);
}

