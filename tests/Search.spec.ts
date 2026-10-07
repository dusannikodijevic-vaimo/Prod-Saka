import { test, expect } from '@playwright/test';
import { AcceptCookie } from '../Fixture/Cookie.fixture';
import { VerifyPLP } from '../Fixture/Verify PLP.fixture';
import { EnterPDPSearch } from '../Fixture/EnterPDPSearch.fixture';
import { VerifyPagination } from '../Fixture/Verify PLP Pagination.fixture';
import { ApplyFilter } from '../Fixture/ApplyFilter.fixture';
import { EnterSearchPage } from '../Fixture/EnterSearchPage.fixture';
import { ApplySorting } from '../Fixture/ApplySorting.fixture';
import { RemoveFilter } from '../Fixture/RemoveFilter.fixture';
import { SearchAlertGuest } from '../Fixture/SearchAlertGuest.fixture';
import { VerifyPDP } from '../Fixture/VerifyPDP.fixture';


test.describe('Search Smoke test cases', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://saka.fi/fi');

        //await AcceptCookie(page);

    });

    test('Verify search suggestions are displayed', async ({ page }) => {

        //click search icon
        await page.locator('#radix-_R_acl6ivb_-trigger-search').click();

        // Verify content inside search dropdown 
        await expect(page.getByRole('textbox', { name: 'Hae mitä tahansa' })).toBeVisible();
        await expect(page.getByText('Suositut haut')).toBeVisible();
        await expect(page.getByText('autoaartikkeliahenkilöä')).toBeVisible();


    });

    test('Verify user can navigate to search result page', async ({ page }) => {

        // Enter search results page
        await EnterSearchPage(page);

        // Verify that the search results page is displayed
        await expect(page).toHaveURL(/.*q=Tesla/);
        await expect(page.getByRole('button', { name: 'Luo hakuvahti' })).toBeVisible();

    });

    test('Verify that Car cards, sorting and filtering options are visible on search result page', async ({ page }) => {

        // Enter search results page
        await EnterSearchPage(page);

        // Verifiy search rusults
        await VerifyPLP(page);


    });

    test('Verify that product counter is visible', async ({ page }) => {

        // Enter search results page
        await EnterSearchPage(page);

        // Verify that search result counter is visible
        await expect(page.getByText('Löytyy')).toBeVisible();

    });

    test('Verify pagination of the category page', async ({ page }) => {

        // Enter search results page
        await EnterSearchPage(page);

        // Verify pagination of the search result page
        await VerifyPagination(page);

    });

    test('Verify that user can sort on category page', async ({ page }) => {

        // Enter search results page
        await EnterSearchPage(page);

        //Sort by asc-price 
        await ApplySorting(page);

    });

    test('Verify that user can filter on category page', async ({ page }) => {

        // Enter search results page
        await EnterSearchPage(page);

        // Verify that user can filter by car brand
        await ApplyFilter(page);


    });

    test('Verify that user can remove selected filters', async ({ page }) => {

        // Enter search results page
        await EnterSearchPage(page);

        // Verify that user can filter by car brand
        await ApplyFilter(page);


        // Verify that user can remove selected filters
        await RemoveFilter(page);

        // Verify url
        await expect(page).toHaveURL(/.*Tesla/);


    });

    test('Verify that user can navigate to a car page from search result page', async ({ page }) => {

        // Enter search results page
        await EnterSearchPage(page);

        //wait 3 sec
        await page.waitForTimeout(3000);

        //Enter PDP
        await EnterPDPSearch(page);

        //Verify PDP
        await VerifyPDP(page);


    });

    test('Save search alert as guest will redirect user to login page', async ({ page }) => {

        // Enter search results page
        await EnterSearchPage(page);

        // Verify that search alert button is visible, click the butto and verify that the login page is displayed
        await SearchAlertGuest(page);

    });

    test('Empty search page', async ({ page }) => {

        //click search icon
        await page.locator('#radix-_R_acl6ivb_-trigger-search').click();

        // Enter search term and press enter
        await page.getByRole('textbox', { name: 'Hae mitä tahansa' }).fill('sdfsd');
        await page.getByRole('textbox', { name: 'Hae mitä tahansa' }).press('Enter');

        // Verify that the empty search page is displayed
        await expect(page.getByText('Autoja ei löytynyt')).toBeVisible();



    });
});