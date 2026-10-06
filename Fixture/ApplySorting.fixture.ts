import { Page, expect } from '@playwright/test';

export async function ApplySorting(
    page: Page,
): Promise<void> {
        
    //Sort by asc-price 
    await (page.getByTitle('Järjestys').click());
    await (page.getByText('Halvimmat').click());
    await expect(page).toHaveURL(/.*price&order=asc/);
}

