class HomePage {
  static visit() {
    const url = Cypress.env("homeUrl");
    cy.visit(url);
  }
}

export default HomePage;
