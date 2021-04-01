import * as litmusData from "../../../fixtures/litmus-data.json"
import LitmusBuilderPage from "../../../page-objects/litmus/LitmusBuilderPage";

describe('Notification View in Litmus', function () {
    before(() => {
        litmusData.array.forEach(notificationData => {
            console.log(notificationData);
            let urlArray = notificationData.full_url.split('/');
            let fileName = `actual-${urlArray[urlArray.length - 1]}`;
            const fullPath = `cypress/fixtures/${Cypress.env('notificationScreenFolderAPI')}`;
            cy.downloadFile(notificationData.full_url, fullPath, fileName);
        })
    })

    it(`Get all images and save in data folder`, function () {
        cy.log("Test");
        const fullPath = `cypress/fixtures/${Cypress.env('notificationScreenFolderAPI')}`;

        litmusData.array.forEach(notificationData => {
            let urlArray = notificationData.full_url.split('/');
            let expectedImageFileName = `expected-${urlArray[urlArray.length - 1]}`;
            let actualImageFileName = `actual-${urlArray[urlArray.length - 1]}`;
            LitmusBuilderPage.compareImages(Cypress.env('notificationScreenFolderAPI'), expectedImageFileName,
                actualImageFileName);
        })

    });


});
