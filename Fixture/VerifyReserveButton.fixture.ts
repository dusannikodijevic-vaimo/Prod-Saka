import { Page, expect} from '@playwright/test';

export async function VerifyReserveButton(
    page: Page,
): Promise<void> {
        
   
    //Buttons
    await expect(page.locator('[data-test-id="car-reserve-button"]')).toBeVisible();

    // Click on the "Varaa" button to navigate to the reservation page
    await page.locator('[data-test-id="car-reserve-button"]').click();

    //wait for 2s
    await page.waitForTimeout(2000);

    // Scroll down
    await page.evaluate(() => {
        window.scrollBy(0, 500); // Scroll down by 500 pixels
    });

    // Verify that the reservation page is displayed
    await page.locator('section').filter({ hasText: 'Mitä auton varaaminen' }).locator('iframe').contentFrame().getByRole('button', { name: 'Siirry maksamaan' }).click();

    //Fill in the reservation form
    await page.locator('section').filter({ hasText: 'Mitä auton varaaminen' }).locator('iframe').contentFrame().getByRole('textbox', { name: 'Etunimi *' }).fill('Test');
    await page.locator('section').filter({ hasText: 'Mitä auton varaaminen' }).locator('iframe').contentFrame().getByRole('textbox', { name: 'Sukunimi *' }).fill('Test');
    await page.locator('section').filter({ hasText: 'Mitä auton varaaminen' }).locator('iframe').contentFrame().getByRole('textbox', { name: 'Sähköposti *' }).fill('Test@test.com')
    await page.locator('section').filter({ hasText: 'Mitä auton varaaminen' }).locator('iframe').contentFrame().getByRole('textbox', { name: 'Puhelinnumero *' }).fill('0401234567');




}
