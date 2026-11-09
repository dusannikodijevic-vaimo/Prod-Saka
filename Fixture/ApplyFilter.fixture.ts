import { Page, expect } from '@playwright/test';

export async function ApplyFilter(
    page: Page,
): Promise<void> {

    //Wait for 2 seconds to ensure that the page is loaded
    await page.waitForTimeout(2000);

    // Verify that user can filter by car brand
    await (page.getByRole('button', { name: 'Vetotapa' }).click());
    await page.getByRole('button', { name: 'Neliveto' }).click();
    await expect(page).toHaveURL(/.*drive=Neliveto/);
}

