describe('Teste web Samsung', () => {

    before(() => {
        cy.visit('https://www.samsung.com/br/')
    })

    it('Montar carrinho com 3 itens', () => {
        
        cy.get('.nv00-gnb__l0-menu-btn')
            .eq(2)
            .should('contain.text', 'Mobile')
            .click()
        cy.get('.nv00-gnb__l1-menu-link')
            .eq(5)
            .should('contain.text', 'Descobrir Smartphones')   
            .click() 
        cy.get('.nv14-visual-lnb__featured-item-link-text-wrap')
            .eq(2)
            .should('contain.text', 'Galaxy A')
            .click()
        cy.get('.pd03-product-card__product-name')
            .eq(0)
            .should('contain.text', 'Galaxy A55 5G (128GB)')
            .click()
        cy.get('.cost-box__price-now')
            .should('have.text', 'R$2.609,10 à vista (10% de desconto)')
        cy.get('.cost-box__cta')
            //.should('have.attr', 'an-la', 'buy now')
            .click()
        // cy.get('//*[@id="samsungCareContent"]/div[4]/label')
        //     .should('be.visible')
        //     .click()

        cy.get('#postal-code')
            .should('be.visible')
            .click()
            .type('13085612')
        cy.get('#buttonPostalCodePdp')
            .should('not.be.disabled')   
            .click()   
        cy.get('[for="samsung-care-0"]', { timeout: 10000 })
            //, { timeout: 20000 }
            .should('be.visible')
            .click()
        cy.get('#button-buy-product')
            .eq(0)
            .click()
        cy.get('[class="v-custom-quantity-price__best"]', { timeout: 10000 })
            .should('contain.text', 'R$ 2.609,10')
        cy.get('#cart-to-orderform')
            .should('be.visible')
            // .eq(1)
            .click()
        // cy.get('[data-di-id="di-id-758f2693-5a0416fd"]')
        //     .should('be.visible')
        //     .should('have.text', 'Ir para o carrinho')

    })
})