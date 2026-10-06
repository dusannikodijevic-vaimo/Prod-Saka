import { Page } from '@playwright/test';

export async function EnterCarPLP(
    page: Page,
): Promise<void> {
        
    //Navigate to Hybrid Cars category
    await page.getByRole('button', { name: 'Vaihtoautot' }).first().hover();
    await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'hybridiautot' }).click();
}

