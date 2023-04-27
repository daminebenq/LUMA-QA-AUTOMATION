//Clears cart (With only one item)

import { pageElement } from "./all/selectors/elements";

class Delete {
  static deleteCart() {
    const url = Cypress.env("homeUrl");
    cy.visit(url);
    cy.checkCartNotEmpty();
    cy.get('.action-delete').eq(0).click()
    cy.wait(3000);
    cy.get(pageElement.emptyCartDiv).should("be.visible");
  }
}

export default Delete;
