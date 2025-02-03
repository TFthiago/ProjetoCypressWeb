describe('Teste web - Kabum', () => {

    before(() => {
        cy.visit('https://www.kabum.com.br/')
    })

    it('Montar carrinho com ', () => {

        
        cy.get('#input-busca')
            .click()
            .type('RTX 3060')
        cy.get('.iKhPzQ')
            .eq(0)
            .click()
        // cy.get('.fIFCYN')
        //     .should('have.attr', 'href', '/produto/384627')
        //     .eq(0)
        //     .click()
        cy.get('h4.finalPrice')
            .should('have.text', 'R$ 1.949,99')
        cy.get('#purchaseButtonMobile')
        
        cy.get('[name="garantia"]')
            .eq(3)
            .click()
        cy.get(' svg:size-20')
            .should('have.text', 'Ir para o carrinho')
            .click()
    })
}) 