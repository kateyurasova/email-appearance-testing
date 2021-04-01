import LitmusLoginPage from "../../../page-objects/litmus/LitmusLoginPage";
import LitmusBuilderPage from "../../../page-objects/litmus/LitmusBuilderPage";

const testingData = [
    'Apple Mail 13 (macOS 10.15)',
    'Apple Mail 13 Dark (macOS 10.15)',
    'Apple Mail 14 (macOS 11.0)',
    'IBM Notes 10 (Windows 10)',
    'Outlook 2019 120 DPI (Windows 10)'
]

const fullPath = `cypress/fixtures/${Cypress.env('notificationScreenFolder')}`;
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

    testingData.forEach((configuration) => {
        it(`Test notification image ${configuration}`, function () {
            cy.log(`AND selects device ${configuration}`)
            LitmusBuilderPage.selectConfiguration(configuration);
            cy.log('THEN Image presented at the page is equal to the expected screen');
            LitmusBuilderPage.checkConfigurationNotificationImage(configuration);

            const actualFileName = `${configuration} Actual.png`;
            const expectedFileName = `${configuration} Expected.png`;
            LitmusBuilderPage.downloadImage(fullPath, actualFileName);
            cy.compareImages(Cypress.env('notificationScreenFolder'), expectedFileName, actualFileName);

            LitmusBuilderPage.closeConfigView();
        });
    })
});
