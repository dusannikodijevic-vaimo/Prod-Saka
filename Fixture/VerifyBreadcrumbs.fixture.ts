import { Page, expect} from '@playwright/test';

export async function VerifyBreadcrumbs(
    page: Page,
): Promise<void> {
        
    // Verify that breadcrumbs are visible and working
    await expect(page.getByRole('navigation', { name: 'breadcrumb' })).toBeVisible();
    await (page.getByRole('link', { name: 'Etusivu' }).click());
    await expect(page).toHaveURL('https://saka.fi/fi');

}
