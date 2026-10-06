import { Page, expect} from '@playwright/test';

export async function VerifyRequestContactButton(
    page: Page,
): Promise<void> {
        
    //Buttons
    await expect(page.locator('[data-test-id="car-request-contact-button"]')).toBeVisible();

    // Click on the contact information button to navigate to the contact information form
    await (page.locator('[data-test-id="car-request-contact-button"]')).click();

    //Verify that the contact information form is displayed
    await expect(page.getByRole('dialog', { name: 'Jätä yhteydenottopyyntö' })).toBeVisible();

    // Fill in the contact information form
    await page.getByRole('textbox', { name: 'Nimi*' }).fill('Test');
    await page.getByRole('textbox', { name: 'Puhelinnumero*' }).fill('0401234567');
    await page.getByRole('textbox', { name: 'Sähköposti*' }).fill('test@test.com')
    await page.getByRole('textbox', { name: 'Viesti*' }).fill('Test message');
    await page.getByRole('switch', { name: 'Onko sinulla vaihtoauto?' }).check();
    await page.getByRole('switch', { name: 'Oletko kiinnostunut' }).check();
    await page.getByRole('textbox', { name: 'Rekisterinumero' }).fill('ABC-123');
    await page.getByRole('spinbutton', { name: 'Kilometrimäärä (km)' }).fill('100000');
    await page.getByRole('checkbox', { name: 'Saka voi lähettää minulle' }).check();
    await page.getByRole('checkbox', { name: 'Hyväksyn tietosuojaselosteen*' }).check();

}
