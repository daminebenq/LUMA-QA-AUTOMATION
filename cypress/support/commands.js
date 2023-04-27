// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { pageElement } from "../pages/all/selectors/elements";

before(() => {
    cy.fixture('user.json').as('user');
})

Cypress.Commands.add('checkCartNotEmpty', () => {
    cy.get(pageElement.cartCounter).then(($counter) => {
        const count = parseInt($counter.text())
        if (count > 0) {
            cy.get(pageElement.showCart).click()
        } else {
            cy.wait(6000)
            cy.wrap(null).then(() => {
                cy.checkCartNotEmpty()
            })
        }
    })
})

Cypress.Commands.add('visitUrl', (urlParam) => {
    const homeUrl = Cypress.env("homeUrl");
    const ordersUrl = Cypress.env("ordersUrl");

    const url = urlParam === 'home' ? homeUrl : ordersUrl;
    cy.visit(url);
});