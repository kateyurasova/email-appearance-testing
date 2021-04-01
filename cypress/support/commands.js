// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('compareImages', (folderName, expectedFileName, actualFileName) => {
    const fileType = 'image/png';
    cy.log('expectedFileName: ' + expectedFileName);
    cy.getFixtureFromFolder(folderName, expectedFileName).then(expectedScreen => {
        cy.getFixtureFromFolder(folderName, actualFileName).then(actualScreen => {
            const actualBlob = Cypress.Blob.base64StringToBlob(actualScreen, fileType);
            const expectedBlob = Cypress.Blob.base64StringToBlob(expectedScreen, fileType);
            expect(actualBlob).to.deep.equal(expectedBlob);
        })
    })
});

Cypress.Commands.add('getFixtureFromFolder', (folderName, fileName) => {
    return cy.fixture(`${folderName}/${fileName}`)
});
