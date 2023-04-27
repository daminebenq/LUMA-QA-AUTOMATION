import { appMessages, pageSelectors, utilities } from "./selectors/elements";
import { selectors } from "./../all/selectors/elements";

export const email = selectors.email;
export const pass = selectors.pass;

export const loginMethod = () => {
    cy.contains(pageSelectors.signInButton).click();
    cy.get(pageSelectors.emailInput, {timeout: 5000}).type(email);
    cy.get(pageSelectors.passwordInput).type(pass);
    cy.get(pageSelectors.submitButton).click();
    cy.wait(10000);
    cy.contains(pageSelectors.welcomeMessage, {timeout: 10000});
}

export const wrongLogin = (email = utilities.wrongEmail, pass = utilities.wrongPassword) => {
    cy.contains(pageSelectors.signInButton).click();

    cy.get(pageSelectors.emailInput, {timeout: 5000}).type(email);
    cy.get(pageSelectors.passwordInput).type(pass);
    cy.get(pageSelectors.submitButton).click();
    cy.contains(
        appMessages.invalidEmail
        , {timeout: 5000}).should("be.visible");
    return;
}

export const notFilledInputs = () => {
    cy.contains(pageSelectors.signInButton).click();
    cy.wait(5000)
    cy.get(pageSelectors.submitButton, {timeout: 5000}).click();
    cy.contains(appMessages.requiredField, {timeout: 5000});
    return;
}