import { Page, expect} from '@playwright/test';

export async function EnterSearchPage(
    page: Page,
): Promise<void> {
        
    //click search icon
    await page.locator('#radix-_R_acl6ivb_-trigger-search').click();

    // Enter search term and press enter
    await page.getByRole('textbox', { name: 'Hae mitä tahansa' }).fill('Tesla');
    await page.getByRole('textbox', { name: 'Hae mitä tahansa' }).press('Enter');
}

