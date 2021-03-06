import LitmusLoginPage from "../../../../page-objects/litmus/LitmusLoginPage";
import LitmusBuilderPage from "../../../../page-objects/litmus/LitmusBuilderPage";

const testingData = [
    "Apple Mail 13 (macOS 10.15)",
    "Apple Mail 13 Dark (macOS 10.15)"/*,
    "Apple Mail 14 (macOS 11.0)",
    "Apple Mail 14 Dark (macOS 11.0)",
    "IBM Notes 10 (Windows 10)",
    "IBM Notes 9 (Windows 10)",
    "Lotus Notes 8.5 (Windows 10)",
    "Outlook 2007 (Windows 10)",
    "Outlook 2010 (Windows 10)",
    "Outlook 2013 (Windows 10)",
    "Outlook 2013 120 DPI (Windows 10)",
    "Outlook 2016 (macOS 10.12.6)",
    "Outlook 2016 (Windows 10)",
    "Outlook 2016 120 DPI (Windows 10)",
    "Outlook 2019 (Windows 10)",
    "Outlook 2019 120 DPI (Windows 10)",
    "Outlook Office 365 (macOS 10.15)",
    "Outlook Office 365 (Windows 10)",
    "Outlook Office 365 Dark (macOS 10.15)",
    "Outlook Office 365 Dark (Windows 10)",
    "Thunderbird 60 (Windows 10)",
    "Windows 10 Mail (Windows 10)",
    "Android 6.0 (Android 6.0)",
    "Gmail App (Android 10.0 Dark)",
    "Gmail App (Android 10.0)",
    "Gmail App (Android 6.0)",
    "Gmail App (Android 7.1)",
    "Gmail App (Android 8.0)",
    "Gmail App (Android 9.0)",
    "Gmail App (iOS 13.4.1)",
    "Gmail App Dark (iOS 13.4.1)",
    "Gmail App IMAP (Android 6.0)",
    "iPad (Gen 7) (iOS 13.1)",
    "iPad (Gen 7) Dark (iOS 13.1)",
    "iPad (Retina) (iOS 13.1)",
    "iPad Air (Gen 4) (iOS 14.2)",
    "iPad Pro (10.5 inch) (iOS 13.1)",
    "iPad Pro (11 inch) (iOS 13.1)",
    "iPad Pro (12.9 inch) (iOS 13.1)",
    "iPhone 11 (iOS 13.1)",
    "iPhone 11 (iOS 14.2)",
    "iPhone 11 Dark (iOS 14.2)",
    "iPhone 11 Pro (iOS 13.1)",
    "iPhone 11 Pro Dark (iOS 13.1)",
    "iPhone 11 Pro Max (iOS 13.1)",
    "iPhone 12 (iOS 14.2)",
    "iPhone 12 Dark (iOS 14.2)",
    "iPhone 12 mini (iOS 14.2)",
    "iPhone 12 mini Dark (iOS 14.2)",
    "iPhone 12 Pro Max (iOS 14.2)",
    "iPhone 12 Pro Max Dark (iOS 14.2)",
    "iPhone 8 (iOS 12.0)",
    "iPhone 8 Plus (iOS 12.0)",
    "iPhone SE (Gen 2) (iOS 13.4)",
    "iPhone SE (iOS 14.2)",
    "iPhone XR (iOS 12.0)",
    "iPhone XS (iOS 12.0)",
    "iPhone XS Max (iOS 12.0)",
    "Outlook (Android 7.0)",
    "Outlook iOS (iOS 12.0)",
    "Samsung Mail (Android 6.0)",
    "Samsung Mail (Android 7.0)",
    "Color Blindness (Simulated)",
    "AOL Mail (Chrome)",
    "AOL Mail (Edge)",
    "AOL Mail (Firefox)",
    "Gmail (Chrome)",
    "Gmail (Edge)",
    "Gmail (Firefox)",
    "GMX.de (Chrome)",
    "GMX.de (Edge)",
    "GMX.de (Firefox)",
    "Mail.ru (Chrome)",
    "Mail.ru (Edge)",
    "Mail.ru (Firefox)",
    "Office 365 (Chrome)",
    "Office 365 (Edge)",
    "Office 365 (Firefox)",
    "Outlook.com (Chrome)",
    "Outlook.com (Edge)",
    "Outlook.com (Firefox)",
    "Outlook.com Dark (Chrome)",
    "Outlook.com Dark (Firefox)",
    "T-Online.de (Chrome)",
    "T-Online.de (Edge)",
    "T-Online.de (Firefox)",
    "Web.de (Chrome)",
    "Web.de (Edge)",
    "Web.de (Firefox)",
    "Yahoo! Mail (Chrome)",
    "Yahoo! Mail (Edge)",
    "Yahoo! Mail (Firefox)"*/
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

    testingData.forEach((configuration) => {
        it(`Test notification image ${configuration}`, function () {
            cy.log(`AND selects device ${configuration}`)
            LitmusBuilderPage.selectConfiguration(configuration);
            cy.log('THEN Image presented at the page is equal to the expected screen');
            LitmusBuilderPage.saveNotificationForConfig(configuration, 'Expected');
            LitmusBuilderPage.closeConfigView();
        });
    })
});
