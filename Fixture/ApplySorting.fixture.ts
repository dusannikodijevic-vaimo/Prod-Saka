import { Page, expect } from '@playwright/test';

export async function ApplySorting(
    page: Page,
): Promise<void> {

    //Wait for 2 seconds to ensure that the page is loaded
    await page.waitForTimeout(2000);

    //scroll to the sorting dropdown
    await page.evaluate(() => window.scrollBy(0, 500));
        
    //Sort by asc-price 
    await (page.getByTitle('Järjestys').click());
    await (page.getByText('Halvimmat').click());
    await expect(page).toHaveURL(/.*price&order=asc/);
}

