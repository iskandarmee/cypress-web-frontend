class LoginPage {
    visitUrl(url) {
        cy.visit(url);
        cy.verifyElementText('h1', 'CURA Healthcare Service');
        cy.verifyElementText('h3', 'We Care About Your Health')
        cy.verifyElementText('a', 'Make Appointment')
    }
}

export default LoginPage;
