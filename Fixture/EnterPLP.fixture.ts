import { Page } from '@playwright/test';

export async function EnterCarPLP(
    page: Page,
): Promise<void> {

    //Close black month banner / To be removed once the banner is removed from the site
    //await page.getByRole('button', { name: 'Sulje' }).click();

    //Navigate to Hybrid Cars category
    await page.getByRole('button', { name: 'Vaihtoautot' }).first().hover();
    await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'hybridiautot' }).click();
}

