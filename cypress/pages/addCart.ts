import { pageElement } from "./all/selectors/elements";

export class Cart {
  static addItemCart(isCategory = false, isSearch = false) {
    if (isCategory) {
      cy.get(pageElement.categoryMen).trigger("mouseover");
      cy.get(pageElement.categoryTops).click();
      cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()

      cy.wait(4000)

      cy.get(pageElement.sizeL).click();
      cy.get(pageElement.colorOption1).click();
      cy.get(pageElement.quantity).clear().type("10");
      cy.contains(pageElement.addToCart).click();
      cy.checkCartNotEmpty();
      cy.contains(pageElement.proceedToCheckout, {timeout: 5000}).should("be.visible");
      return;
    }
    if (isSearch) {
      cy.get(pageElement.search).type("Hero Hoodie").type("{enter}");
      cy.get(
        pageElement.firstProduct, {timeout: 5000}).click();
      cy.get(pageElement.sizeL).click();
      cy.get(pageElement.colorOption1).click();
      cy.get(pageElement.quantity).clear().type("20");
      cy.contains(pageElement.addToCart).click();
      cy.checkCartNotEmpty();
      cy.contains(pageElement.proceedToCheckout, {timeout: 5000}).should("be.visible");
      return;
    }

    cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.wait(4000)

    cy.get(pageElement.sizeL, {timeout: 5000}).click();
    cy.get(pageElement.colorOption2).click();
    cy.get(pageElement.quantity).clear().type("30");
    cy.contains(pageElement.addToCart).click();
    cy.checkCartNotEmpty();
    cy.contains(pageElement.proceedToCheckout, {timeout: 5000}).should("be.visible");
  }
}
