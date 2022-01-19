

describe('home page', () => {
    it('app deve estar online', () => {
        cy.visit('/') //acessar o site

        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') //deve ter o texto
        cy.get('#page-home main p').should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.')
    })
})