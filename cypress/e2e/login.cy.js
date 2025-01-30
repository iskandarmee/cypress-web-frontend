describe('login in katalon demo', () => {
  it('login success with sample data', () => {
    cy.visitUrl('https://katalon-demo-cura.herokuapp.com')

    cy.clickButtonByText('Make Appointment')

    cy.loginAccount()
  })
})