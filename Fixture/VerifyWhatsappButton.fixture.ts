import { Page, expect} from '@playwright/test';

export async function VerifiyWhatsappButton(
    page: Page,
): Promise<void> {
        
    //Buttons
    await expect(page.getByRole('link', { name: 'Lähetä Whatsapp-viesti' }).first()).toBeVisible();

    //Send whatsapp message
    await page.locator('[data-test-id="car-whatsapp-button"]').first().click();

    // Listen for a new page (tab) being opened
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // Wait for a new page event
        page.locator('[data-test-id="car-whatsapp-button"]').first().click() // Perform the click action
    ]);

    // Add an assertion to verify the new tab's URL or content
    expect(newPage.url()).toContain('https://api.whatsapp.com/send/');

    // Verify the specific element is present on the new tab
    await expect(newPage.getByRole('link', { name: 'Continue to WhatsApp Web' })).toBeVisible();
  
}
