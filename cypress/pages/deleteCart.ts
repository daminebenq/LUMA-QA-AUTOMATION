//Clears cart (With only one item)

import { pageElement } from "./all/selectors/elements";

class Delete {
  static deleteCart() {
    cy.checkCartNotEmpty();
    cy.get(pageElement.deleteCart).eq(0).click({force: true})
    cy.get(pageElement.acceptDeletion).click()
    cy.wait(6000);
    cy.get(pageElement.emptyCartDiv).should("exist");
  }
}

export default Delete;
