import { Page, expect } from '@playwright/test';

export async function VerifyPLP(
    page: Page,
): Promise<void> {
        
    // Verify that filers are visible on the left side of the page
    await expect(page.locator('.space-y-2.hidden.flex-1')).toBeVisible();

    //Verify that sorting options are visible on the right side of the page
    await expect(page.getByTitle('Järjestys')).toBeVisible();

    // Verify that car cards are visible
    await expect(page.locator('.mb-5').first()).toBeVisible();
    await expect(page.locator('[data-test-id="car-whatsapp-button"]').nth(1)).toBeVisible();
    //await expect(page.locator('[data-test-id="card-phone-button"]').first()).toBeVisible();
}

