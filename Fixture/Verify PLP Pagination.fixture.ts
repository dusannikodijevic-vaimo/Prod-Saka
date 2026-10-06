import { Page, expect } from '@playwright/test';

export async function VerifyPagination(
    page: Page,
): Promise<void> {

    //Verify that pagination is visble and working
    await expect(page.getByRole('button', { name: 'Lataa lisää autoja' })).toBeVisible();
    await (page.getByRole('button', { name: 'Lataa lisää autoja' }).click());
    await expect(page).toHaveURL(/.*page=2/);

}

