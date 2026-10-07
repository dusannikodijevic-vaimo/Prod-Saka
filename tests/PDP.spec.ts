import { test, expect } from '@playwright/test';
import { AcceptCookie } from '../Fixture/Cookie.fixture';
import { EnterCarPLP } from '../Fixture/EnterPLP.fixture';
import { EnterPDP } from '../Fixture/EnterPDP.fixture';
import { VerifiyWhatsappButton } from '../Fixture/VerifyWhatsappButton.fixture';
import { VerifyReserveButton } from '../Fixture/VerifyReserveButton.fixture';
import { VerifyRequestVideoButton } from '../Fixture/VerifyRequestVideoButton.fixture';
import { VerifyRequestContactButton } from '../Fixture/VerifyRequestContactButton.fixture';
import { VerifyBreadcrumbs } from '../Fixture/VerifyBreadcrumbs.fixture';

test.describe('PDP Smoke Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://saka.fi/en');

        await AcceptCookie(page);
    });

    test('Verify that the car title is showing', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Verify that the car title is showing
        await expect(page.locator('#car-title')).toBeVisible();


    });

/*     test('Verify that the car price is showing', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Verify that the car price is showing
        await expect(page.locator(`//div[@data-id='price']`)).toBeVisible();


    });

    test('Verify that color variants are showing', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Verify that color variants are showing
        await expect(page.locator('[data-test-id="car-variant-color-button"]').first()).toBeVisible();


    });

    test('Verify that breadcrumbs are showing & working', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Verify that breadcrumbs are showing & working
        await VerifyBreadcrumbs(page);

    });

    test('Verify that image and gallery of the cars is displayed', async ({ page }) => {

        //Navigate to Car category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Verify that image and gallery of the cars is displayed
        await expect(page.locator(`//div[1]/picture/img`)).toBeVisible();


    });

    test('Verify that user can view image in full screen', async ({ page }) => {

        //Navigate to Car category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Verify that user can view image in full screen
        await page.getByRole('button', { name: 'Laajenna kuvagalleria' }).click();
        await expect(page.getByRole('button', { name: 'Pienennä kuvagalleria' })).toBeVisible();

    });

    test('Verify that user can minimise image', async ({ page }) => {

        //Navigate to Car category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Verify that user can minimise image
        await page.getByRole('button', { name: 'Laajenna kuvagalleria' }).click();
        await page.getByRole('button', { name: 'Pienennä kuvagalleria' }).click();


    });

    test('Verify user can expand condition report accordion and the condition form is available', async ({ page }) => {

        //Navigate to Car category with a condition report
        await page.goto('https://saka.fi/fi/vaihtoauto/bmw-ix-389940');

        //click on the condition report accordion to expand it'
        await page.getByRole('tab', { name: 'Kuntoraportti' }).click();

        // Verify condition report elements are visible
        await expect(page.getByRole('button', { name: 'DEKRA Katsastus' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Lataa raportti' })).toBeVisible();
        await expect(page.getByRole('img', { name: 'DEKRA Katsastus' })).toBeVisible();
        await expect(page.getByText('Järjestelmät1Sähkö- ja')).toBeVisible();
        await expect(page.getByText('Kunto kartalla12345678ETU')).toBeVisible();
        await expect(page.getByText('RenkaatEtu')).toBeVisible();

    });

    test('Verify user can expand car information accordion and the content is visible', async ({ page }) => {

        //Navigate to Car category with a technical information
        await page.goto('https://saka.fi/fi/vaihtoauto/bmw-ix-389940');

        //click on the technical information accordion to expand it'
        await expect(page.getByRole('tab', { name: 'Auton tiedot' })).toBeVisible();
        await (page.getByRole('tab', { name: 'Auton tiedot' })).click();

        // Verify technical information elements are visible
        await expect(page.getByRole('tabpanel', { name: 'Auton tiedot' })).toBeVisible();
        await expect(page.getByText('Väri')).toBeVisible();
        await expect(page.getByText('Vetotapa')).toBeVisible();
        await expect(page.getByText('Rekisterinumero')).toBeVisible();

    });

    test('Verify user can expand equipment accordion and the content is visible', async ({ page }) => {

        //Navigate to Car category with a basic information
        await page.goto('https://saka.fi/fi/vaihtoauto/bmw-ix-389940');

        //click on the basic information accordion to expand it'
        await page.getByRole('tab', { name: 'Varusteet' }).click();

        // Verify basic information elements are visible
        await expect(page.getByRole('tabpanel', { name: 'Varusteet' }).locator('div').filter({ hasText: 'Ajoavustimet ja' })).toBeVisible();

    });

    test('Verify Reservation button & Reservation page', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Click on the "Varaa" button to navigate to the reservation page and fil out the form
        await VerifyReserveButton(page);

    });

    test('Verify contact information button & form', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Click on the contact information button to navigate to the contact information form and fill out the form
        await VerifyRequestContactButton(page);


    });

    test('Verify request video button & form', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Click on the request video button to navigate to the request video form and fill out the form
        await VerifyRequestVideoButton(page);

    });

    test('Verify Whatsapp message button & link', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        //Click on whatsapp button
        await VerifiyWhatsappButton(page);

    });

    test('Verify that phone button is visible', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        //Verify that phone button is visible
        await expect(page.locator('[data-test-id="car-phone-button"]')).toBeVisible();


    });

    test('Verify that chat is showing on pdp', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Scroll down to activate chat
        await page.evaluate(() => {
            window.scrollBy(0, 1400); // Scroll down by 800 pixels
        });

        //wait 4 sec for chat to appear
        await page.waitForTimeout(4000);

        //Chat (check to see if it work)
        await expect(page.locator('#sf-chat-tool-inline')).toBeVisible();


    });


    test('Verify that reviews are showing on pdp', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        //Verify that reviews are showing
        await expect(page.locator('[data-test-id="reviews-component"]')).toBeVisible();
        await expect(page.locator('[data-test-id="reviews-component"]').getByText('01')).toBeVisible();


    });


    test('Verify that sales people are showing on pdp', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        // Scroll down to activate sales people section
        await page.evaluate(() => {
            window.scrollBy(0, 3000); // Scroll down by 3000 pixels
        });

        //Verify that sales people are showing
        await expect(page.locator('[data-test-id="salesperson-card-link"]').first()).toBeVisible();


    });

    test('Verify that related cars are showing on pdp', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        //Verify that related cars are showing
        await expect(page.locator('[data-test-id="vehicle-card"]').first()).toBeVisible();


    });



    test('Verify that financing calculator is visible & user is able to interact with it', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        //Verify that financing calculator is visible
        await expect(page.locator('[data-test-id="car-finance-calculator-button"]')).toBeVisible();
        await expect(page.locator('#finance-calculator-form')).toBeVisible();

        //Click on the financing calculator button to open the financing calculator form
        await page.getByRole('button', { name: 'Hae rahoituspäätös' }).click();

        //Verify that financing calculator form is visible and user is able to enter information
        await expect(page.getByRole('button', { name: 'Lähetä' })).toBeVisible();
        await page.getByRole('textbox', { name: 'Nimi*' }).fill('John Doe');
        await page.getByRole('textbox', { name: 'Puhelinnumero*' }).fill('1234567890');
        await page.getByRole('textbox', { name: 'Sähköposti*' }).fill('Test@test.com')



    });


    test('Add product to compare list & Verify that it is there', async ({ page }) => {

        //Navigate to Hybrid Cars category
        await EnterCarPLP(page);

        //Enter PDP page of the first car in the list
        await EnterPDP(page);

        //Click on compare button
        await page.getByRole('button', { name: 'Vertaa' }).last().click();

        // Verify that the product has been added to the compare list
        await expect(page.getByText('Vertaa autoja').first()).toBeVisible();
        await expect(page.getByRole('button', { name: 'Poista', exact: true })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Lisää auto vertailuun' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Vertaa', exact: true })).toBeVisible(); 

    });*/
});