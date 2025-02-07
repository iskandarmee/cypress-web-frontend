/// <reference types="cypress" />

import LoginPage from "../components/LoginPage";


describe('login in katalon demo', () => {

const loginPage = new LoginPage()

  beforeEach(() => {

    loginPage.visitUrl('https://katalon-demo-cura.herokuapp.com')

  });

  it('validasi visit url succcess', () => {

    cy.verifyElementText('p', 'Atlanta 550 Pharr Road NE Suite 525')

    cy.verifyElementText('li', ' (678) 813-1KMS')

    cy.verifyElementText('p', 'Copyright © CURA Healthcare Service 2025')
    
  })

  it('login success with sample data', () => {

    cy.clickButtonByText('Make Appointment')

    cy.loginAccount()

      cy.verifyElementText('label', 'Facility')

      cy.verifyElementText('label', 'Healthcare Program')

      cy.verifyElementText('label', 'Visit Date (Required)')

      cy.verifyElementText('label', 'Comment')
  });
})