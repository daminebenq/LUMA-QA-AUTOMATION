declare namespace Cypress {
    interface Chainable {
      checkCartNotEmpty(): Chainable<Element>
    }
}