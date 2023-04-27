declare namespace Cypress {
    interface Chainable {
      checkCartNotEmpty(): Chainable<Element>
      visitUrl(urlParam: 'home' | 'orders'): Chainable;
    }
}