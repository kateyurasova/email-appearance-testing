import LitmusLoginPage from "../../../../page-objects/litmus/LitmusLoginPage";
import LitmusBuilderPage from "../../../../page-objects/litmus/LitmusBuilderPage";

describe('Notification View in Litmus', function () {
    const FIXTURE_FILE = 'cypress/fixtures/all-configs-viaUI.json';
    before(() => {
        LitmusBuilderPage.routeRequests();
        cy.log('WHEN User goes to the Litmus Login page');
        LitmusLoginPage.open();
        cy.log('AND performs log in action')
        LitmusLoginPage.login(Cypress.env('litmusCredentials').login, Cypress.env('litmusCredentials').password);
        cy.log('AND User clicks Run Email Previews button');
        LitmusBuilderPage.open()
        LitmusBuilderPage.clickRunEmailPreviews();
        cy.wait(Cypress.env('waitTime'));
        cy.writeFile(FIXTURE_FILE, `{\n"allConfigArray": [\n`)
    })

    after(() => {
        cy.writeFile(FIXTURE_FILE, '\n]\n}', { flag: 'a+' })
    })

    it(`Test notification image`, function () {
        cy.get('iframe.builder').then(function ($iframe) {
            const $body = $iframe.contents().find('body');
            let new_array = cy.wrap($body).find("div.client").each(($el) => {
                cy.wrap($el).invoke('text').then(text => {
                    cy.writeFile(FIXTURE_FILE, `"${text.trim()}",\n`, { flag: 'a+' })
                })
            })
        })

    });
});
