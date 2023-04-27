import { pageElement } from "./all/selectors/elements";

export class Reorder {
  static reOrder() {
    cy.contains(pageElement.welcomeMessage);
    cy.get(
      pageElement.customerDropdown
    ).click();
    cy.contains(pageElement.myAccount).click();
    cy.contains(pageElement.myOrders, {timeout: 5000});
    cy.get(pageElement.reorderButton).click();
    cy.contains(pageElement.shoppingCartHeader, {timeout: 5000}).should("be.visible");
    cy.get(pageElement.primaryCheckout).eq(0).click();
    cy.contains(pageElement.bestWayDeliveryOption, {timeout: 5000}).click({force: true});
    cy.contains(pageElement.proceedToCheckout).click({force: true}).then(()=> cy.wait(5000));
    cy.contains(pageElement.bestWayDeliveryOption, {timeout: 5000}).click({force: true});
    cy.contains(pageElement.nextButton, {timeout: 5000}).click();
    cy.contains(pageElement.placeOrder, {timeout: 5000}).click();
    cy.contains(pageElement.thankYouMessage, {timeout: 5000}).should("be.visible");
  }
}
