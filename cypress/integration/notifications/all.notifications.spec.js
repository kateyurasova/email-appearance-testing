import LitmusLoginPage from "../../page-objects/litmus/LitmusLoginPage";
import LitmusBuilderPage from "../../page-objects/litmus/LitmusBuilderPage";

const testingData = [{device: 'Apple Mail 13 (macOS 10.15)'},
    {device: 'Apple Mail 13 Dark (macOS 10.15)'}
]

describe('Notification View in Litmus', function () {
    before(() => {
        LitmusBuilderPage.routeRequests();
        cy.log('WHEN User goes to the Litmus Login page');
        LitmusLoginPage.open();
        cy.log('AND performs log in action')
        LitmusLoginPage.login(Cypress.env('litmusCredentials').login, Cypress.env('litmusCredentials').password);
        cy.visit("https://litmus.com/folders/unsorted_emails/emails/2650141/builder");
        cy.log('AND User clicks Run Email Previews button');
        LitmusBuilderPage.clickRunEmailPreviews();
        cy.wait(15000);
    })

    afterEach(() => {
        LitmusBuilderPage.closeDeviceView();
    })

    testingData.forEach(({device, testId}) => {
        it(`Test notification image ${device} ${testId}`, function () {
            cy.log(`AND selects device ${device}`)
            LitmusBuilderPage.selectDevice(device);
            cy.log('THEN Image presented at the page is equal to the expected screen');
            LitmusBuilderPage.checkDeviceNotificationImage(device);
        });
    })
});
