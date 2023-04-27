import { pageElement, selectors } from "./all/selectors/elements";

export class Order {
  static findsOrder(
      order = selectors.orderNumber,
      name = selectors.lastName,
      zip = selectors.zip,
      email = selectors.email,
      isZip = false
    ) {
    const orders = Cypress.env("ordersUrl");
    cy.visit(orders);
    cy.contains(pageElement.orderAndReturns).should("be.visible");
    cy.get(pageElement.orderIdInput).type(order);
    cy.get(pageElement.orderLastName).type(name);
    if (isZip) {
      cy.get(pageElement.quickSearchDropdown).select(pageElement.zip).should("have.value", pageElement.zip),
      cy.get(pageElement.oarZip, {timeout: 5000}).type(zip);
      cy.contains(pageElement.continueButton).click();
      cy.contains(`Order # ${selectors.orderNumber}`).should("be.visible");
      return;
    }
    cy.get(pageElement.aorEmail).type(email);
    cy.contains(pageElement.continueButton).click();
    cy.contains(`Order # ${selectors.orderNumber}`).should("be.visible");
  }
}
