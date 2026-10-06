import { Page, expect} from '@playwright/test';

export async function VerifyRequestVideoButton(
    page: Page,
): Promise<void> {
        
    //Buttons
    await expect(page.locator('[data-test-id="car-request-video-button"]')).toBeVisible();

    // Click on the request video button to navigate to the request video form
    await (page.locator('[data-test-id="car-request-video-button"]')).click();

    //Fill in the request video form
    await page.getByRole('textbox', { name: 'Nimi*' }).fill('Test');
    await page.getByRole('textbox', { name: 'Puhelinnumero*' }).fill('0401234567');
    await page.getByRole('textbox', { name: 'Sähköposti*' }).fill('test@test.com');
    await page.getByRole('checkbox', { name: 'Saka voi lähettää minulle' }).check();
    await page.getByRole('checkbox', { name: 'Hyväksyn tietosuojaselosteen*' }).check();
    await page.getByRole('switch', { name: 'Haluan videon WhatsAppissa' }).check();

}
