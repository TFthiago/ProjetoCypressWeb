describe('Verifica nomes dos produtos', { testIsolation: false }, () => {

    before(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[placeholder=Username]')
            .and('have.class', 'input_error form_input')
            .click()
            .type('standard_user');

        cy.get('[data-test=password]')
            .and('have.class', 'input_error form_input')
            .click()
            .type('secret_sauce');

        cy.get('[data-test=login-button]')
            .click();
    });
    
    const produtos = [
        { posicao: 0, texto: 'Sauce Labs Backpack' },
        { posicao: 1, texto: 'Sauce Labs Bike Light' },
        { posicao: 2, texto: 'Sauce Labs Bolt T-Shirt' },
        { posicao: 3, texto: 'Sauce Labs Fleece Jacket' },
        { posicao: 4, texto: 'Sauce Labs Onesie' },
        { posicao: 5, texto: 'Test.allTheThings() T-Shirt (Red)' }
    ];

    produtos.forEach(({ posicao, texto }) => {
        it(`Valida o nome do produto na posição ${posicao}`, () => {
            cy.get('.inventory_item_name')
                .should('be.visible')
                .eq(posicao)
                .should('have.text', texto);
        });
    });
});
