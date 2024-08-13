describe('teste web - OrangeHRM', () => {
    let credenciais;

    before(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('credenciais').then((cred) => {
            credenciais = cred
        })
        
    })

    it('Teste de login na plataforma', () => {

        cy.get(".orangehrm-login-title")
            .should('have.text','Login')
        cy.get('[name="username"]')
            .click()
            .type(credenciais.username)
        cy.get('[name="password"]') 
            .click()
            .type(credenciais.password)
        cy.get(".orangehrm-login-button")
            .should('be.visible')
            .click()
        cy.get('span h6')
            .should('have.text','Dashboard')
    })
})