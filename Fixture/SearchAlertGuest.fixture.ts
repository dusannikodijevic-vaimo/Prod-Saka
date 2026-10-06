import { Page, expect } from '@playwright/test';

export async function SearchAlertGuest(
    page: Page,
): Promise<void> {
        
    // Verify that search alert button is visible
    await expect(page.getByRole('button', { name: 'Luo hakuvahti' })).toBeVisible();

    // Click on "Create search alert" button
    await page.getByRole('button', { name: 'Luo hakuvahti' }).click();

    // Verify that the login page is displayed
    await expect(page.getByText('DEVKirjaudu sisäänKirjaudu')).toBeVisible();
    await expect(page).toHaveURL(/.*msg=search-alert/);
    await expect(page.getByText('Kirjaudu sisään ja jatka siit')).toBeVisible();
}

