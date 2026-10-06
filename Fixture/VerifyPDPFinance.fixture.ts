import { Page, expect} from '@playwright/test';

export async function VerifyPDPFinance(
    page: Page,
): Promise<void> {
        
    //Finance and Compare
    await expect(page.locator('[data-test-id="car-finance-calculator-button"]')).toBeVisible();
    await expect(page.locator('#finance-calculator-form')).toBeVisible();
}
