import { pageElement } from "./all/selectors/elements";

export class Checkout {
  static checkout() {
    cy.checkCartNotEmpty();
    cy.contains(pageElement.proceedToCheckout).click({force: true});
    cy.wait(5000);
    cy.contains(pageElement.bestWayDeliveryOption, {timeout: 5000}).click();
    cy.contains(pageElement.nextButton, {timeout: 5000}).click();
    cy.contains(pageElement.placeOrder).click();
    cy.contains(pageElement.thankYouMessage, {timeout: 5000}).should("be.visible");
  }
}
