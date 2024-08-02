describe('Teste web - Cacau Show', () => {

    before(() => {
        cy.visit('https://www.cacaushow.com.br/')
    })

    it('Montar carrinho com dois itens', () => {

        //categoria de produtos: chocolate
        cy.get('#cat_002')
            .should('have.attr', 'href', '/categoria/chocolate')
            .click()

        //Primeiro item
        cy.get('.link')
            .should('have.attr', 'href', '/produto/trufas-lacreme-160g-1000624.html')
            .eq(0)
            .click()

        //Asserção de preço item 1
        cy.get('.it__shelf__discountPrice')
            .should('contain.text', '\n    R$\n    32.99\n    /un\n')

        //Adicionar ao carrinho
        cy.get('.it_product__tocart__btn')
            .click()

        //categoria de produtos: chocolate
        cy.get('#cat_002')
            .should('have.attr', 'href', '/categoria/chocolate')
            .click()

        //Segundo item
        cy.get('.link')
            .should('have.attr', 'href', '/produto/trufas-lacreme-160g-1000624.html')
            .eq(7)
            .click()

        //Asserção de preço item 2
        cy.get('.it__shelf__discountPrice')
            .should('contain.text', '\n    R$\n    22.99\n    /un\n')

        //Adicionar ao carrinho
        cy.get('.it_product__tocart__btn')
            .click()
        
        //Visitar carrinho
        cy.get('.it__minicart')
            .click()
        
        //Asserção de preço item 1
        cy.get('.it__shelf__discountPrice')
            .eq(0)
            .should('contain.text', '\n    R$\n    32.99\n    /un\n')
        
        //Asserção de preço item 2
        cy.get('.it__shelf__discountPrice')
            .eq(1)
            .should('contain.text', '\n    R$\n    22.99\n    /un\n')
        
        //Asserção de preço total
        cy.get('[class="text-right grand-total"]')
            .should('have.text', 'R$67.36')

    })
})