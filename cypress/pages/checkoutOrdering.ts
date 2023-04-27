import { pageElement } from "./all/selectors/elements";

export class Checkout {
  static checkout() {
    const url = Cypress.env("homeUrl");
    cy.visit(url);
    cy.checkCartNotEmpty();
    cy.contains(pageElement.proceedToCheckout).click();
    cy.contains(pageElement.bestWayDeliveryOption, {timeout: 5000}).click();
    cy.contains(pageElement.nextButton, {timeout: 5000}).click();
    cy.contains(pageElement.placeOrder).click();
    cy.contains(pageElement.thankYouMessage, {timeout: 5000}).should("be.visible");
  }
}
