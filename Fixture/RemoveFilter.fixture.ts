import { Page, expect } from '@playwright/test';

export async function RemoveFilter(
    page: Page,
): Promise<void> {
        

    // Verify that user can remove selected filters
    await (page.getByRole('button', { name: 'Poista kaikki rajaukset' }).click());
    
}

