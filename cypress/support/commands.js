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

Cypress.Commands.add('verifyElementText', (selector, text) => {
    cy.get(selector).should('contains.text', text);
});

Cypress.Commands.add('verifyElementById', (id) => {
    cy.get(`#${id}`).should('be.visible')
})

Cypress.Commands.add('inputById', (id, value) => {
    cy.get(`#${id}`).type(value)
})

Cypress.Commands.add('clickButtonByText', (text) => {
    cy.contains(text).should('be.visible').click()
});

Cypress.Commands.add('clickButtonById', (id) => {
    cy.get(`#${id}`).should('be.visible').click()
});

Cypress.Commands.add('visitUrl', (url) => {
    cy.visit(url);
    cy.verifyElementText('h1', 'CURA Healthcare Service');
    cy.verifyElementText('h3', 'We Care About Your Health')
    cy.verifyElementText('a', 'Make Appointment')
});

Cypress.Commands.add('loginAccount', () => {
    cy.fixture('dataTest').then((data) => {
        cy.get('#txt-username').type(data.username)
        cy.get('#txt-password').type(data.password)
        cy.clickButtonById('btn-login')
    })
})
