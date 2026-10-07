/* import { test, expect } from '@playwright/test';
import { AcceptCookie } from '../Fixture/Cookie.fixture';
import { EnterCarPLP } from '../Fixture/EnterPLP.fixture';
import { VerifyPLP } from '../Fixture/Verify PLP.fixture';
import { ApplyFilter } from '../Fixture/ApplyFilter.fixture';
import { EnterPDP } from '../Fixture/EnterPDP.fixture';
import { VerifyPagination } from '../Fixture/Verify PLP Pagination.fixture';
import { ApplySorting } from '../Fixture/ApplySorting.fixture';
import { RemoveFilter } from '../Fixture/RemoveFilter.fixture';
import { SearchAlertGuest } from '../Fixture/SearchAlertGuest.fixture';
import { VerifyBreadcrumbs } from '../Fixture/VerifyBreadcrumbs.fixture';

test.describe('PLP Smoke test ', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://saka.fi/fi');

        await AcceptCookie(page);

    });

    test('Verify that user can navigate from Homepage to Hybrid cars category', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        // Verify that user is navigated to Hybrid Cars category page
        await expect(page).toHaveURL(/.*hybridiautot/);
        await expect(page.getByRole('heading', { name: 'hybridiautot', level: 1 })).toBeVisible();



    });

    test('Verify that Car cards, sorting and filtering options are visible', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        // Verify content of the category page
        await VerifyPLP(page);


    });

    test('Verify that product counter is visible', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        // Verify that search result counter is visible
        await expect(page.getByText('Löytyy')).toBeVisible();

    });

    test('Save search alert as guest will redirect user to login page', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        // Verify that search alert button is visible, click the butto and verify that the login page is displayed
        await SearchAlertGuest(page);

    });

    test('Verify breadcrumbs are visible and working', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        // Verify that breadcrumbs are visible and working
        await VerifyBreadcrumbs(page);


    });

    test('Verify pagination of the category page', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        // Verify pagination of the category page
        await VerifyPagination(page);


    });

    test('Verify that user can sort on category page', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Sort by asc-price 
        await ApplySorting(page);

    });

    test('Verify that user can filter on category page', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        // Verify that user can filter by car brand
        await ApplyFilter(page);


    });

    test('Verify that user can remove selected filters', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);


        // Verify that user can filter by car brand
        await ApplyFilter(page);


        // Verify that user can remove selected filters
        await RemoveFilter(page);

        // Verify url
        await expect(page).toHaveURL(/.*hybridiautot/);


    });

    test('Verify user is able to enter Product Page', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        // Verify that user is able to enter Product Page
        await EnterPDP(page);

    });
});
 */