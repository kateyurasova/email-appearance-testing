import * as litmusData from "../../../../fixtures/litmus-data.json"

describe('Notification View in Litmus', function () {
    it(`Get all images and save in data folder`, function () {
        cy.log("Test");
        const fullPath = `cypress/fixtures/${Cypress.env('notificationScreenFolderAPI')}`;

        litmusData.array.forEach(notificationData => {
            console.log(notificationData);
            let urlArray = notificationData.full_url.split('/');
            let fileName = `expected-${urlArray[urlArray.length - 1]}`;
            cy.downloadFile(notificationData.full_url, fullPath, fileName);
        })
    });


});
