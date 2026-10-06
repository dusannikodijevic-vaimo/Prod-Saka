import { Page, expect} from '@playwright/test';

export async function EnterPDP(
    page: Page,
): Promise<void> {
        
    // Verify that user is able to enter Product Page
    await (page.locator('[data-test-id="vehicle-card"]').first().click());
    await expect(page).toHaveURL(/.*vaihtoauto/);
    await expect(page.locator('#car-title')).toBeVisible();
    await expect(page.locator('[data-test-id="car-reserve-button"]')).toBeVisible();
    await expect(page.locator('[data-test-id="car-finance-calculator-button"]')).toBeVisible();
}

