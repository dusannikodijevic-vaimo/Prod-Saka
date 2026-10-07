import { Page } from '@playwright/test';

export async function AcceptCookie(
    page: Page,
): Promise<void> {
        
    // Accept cookie consent
    await page.getByRole('button', { name: 'Salli kaikki' }).click();
}

