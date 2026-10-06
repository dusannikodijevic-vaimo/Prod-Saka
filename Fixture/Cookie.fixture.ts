import { Page } from '@playwright/test';

export async function AcceptCookie(
    page: Page,
): Promise<void> {
        
    // Verify Header Elements
    await page.getByRole('button', { name: 'Allow all' }).click();
}

