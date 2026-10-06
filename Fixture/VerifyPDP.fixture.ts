import { Page, expect } from '@playwright/test';

export async function VerifyPDP(
    page: Page,
): Promise<void> {
        
    // Verify that the car title is showing
    await expect(page.locator('#car-title')).toBeVisible();

    // Verify that the car price is showing
    await expect(page.locator(`//div[@data-id='price']`)).toBeVisible();


}

