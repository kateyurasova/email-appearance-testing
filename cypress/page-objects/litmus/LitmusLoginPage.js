
import LitmusBuilderPage from "./LitmusBuilderPage";

class LitmusLoginPage {
  open() {
    cy.viewport(1280, 720);
    cy.visit("https://litmus.com/sessions/new")
  }

  login(login, password) {
    cy.get('#email').type(login);
    cy.get('#password').type(password);
    cy.get('button:contains("Sign in")').click({force: true});
    cy.wait(10000);
    // LitmusBuilderPage.waitForPageLoading();
  }
}

export default new LitmusLoginPage();
