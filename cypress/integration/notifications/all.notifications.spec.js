import LitmusLoginPage from "../../page-objects/litmus/LitmusLoginPage";
import LitmusBuilderPage from "../../page-objects/litmus/LitmusBuilderPage";

const testingData = [
    'Apple Mail 13 (macOS 10.15)'/*,
    'Apple Mail 13 Dark (macOS 10.15)',
    'Apple Mail 14 (macOS 11.0)'*/
]

describe('Notification View in Litmus', function () {
    before(() => {
        LitmusBuilderPage.routeRequests();
        cy.log('WHEN User goes to the Litmus Login page');
        LitmusLoginPage.open();
        cy.log('AND performs log in action')
        LitmusLoginPage.login(Cypress.env('litmusCredentials').login, Cypress.env('litmusCredentials').password);
        cy.log('AND User clicks Run Email Previews button');
        LitmusBuilderPage.open()
        LitmusBuilderPage.clickRunEmailPreviews();
    })

    testingData.forEach((device) => {
        it(`Test notification image ${device}`, function () {
            cy.log(`AND selects device ${device}`)
            LitmusBuilderPage.selectDevice(device);
            cy.log('THEN Image presented at the page is equal to the expected screen');
            LitmusBuilderPage.checkDeviceNotificationImage(device);
            LitmusBuilderPage.closeDeviceView();
        });
    })
});
