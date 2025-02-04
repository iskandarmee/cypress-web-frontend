/// <reference types="cypress" />

describe('Test API', () => {
    it('POST Login', () => {
        cy.fixture('dataTestAPI').then((data) => {

            cy.request({
                methode: 'POST',
                url: 'https://reqres.in/api/login',
                body: data
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })

});