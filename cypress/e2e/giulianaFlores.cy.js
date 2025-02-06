describe('Teste web - Giuliana Flores', () => {

    before(() => {
        cy.visit('https://www.giulianaflores.com.br')
    })

    it('Montar carrinho com 2 produtos', () => {

        cy.get("#txtDsKeyWord").click().type("Orquídea Mine Rara Rosa");
        cy.get(".autocomplete_completionListElement").should("be.visible").click();


        cy.get(".jq-product-name").should("contain.text", "Orquídea Mine Rara Rosa");
        cy.get(".precoPor_prod").should("contain.text", "R$ 182,90");

        cy.get("#ContentSite_txtZip").click().type("57010003");
        cy.get(".jOpenShippingPopup").click();

        cy.get(".jSelectedMonth").should("be.visible");
        cy.get(".btOk.jConfirmShippingData").click();

        cy.get(".prodBasket_nome").should("contain.text", "Orquídea Mine Rara Rosa");
        cy.get(".precoPor_basket").should("contain.text", "R$ 182,90");


        cy.get(".logo_checkout").click();
        cy.get(".img_banner").should("be.visible");
        cy.wait(3000); // Apenas para visualizar melhor durante os testes

        cy.get("#txtDsKeyWord").click().type("Buquê Magnificas Margaridas Amarelas");
        cy.get(".autocomplete_completionListElement").should("be.visible").click();


        cy.wait(5000); // Apenas para depuração, pode ser removido

        cy.get(".jq-product-name").should(
            "contain.text",
            "Buquê Magnificas Margaridas Amarelas"
        );
        cy.get(".precoPor_prod").should("contain.text", "R$ 99,90");

        cy.get("#ContentSite_lbtBuy").click();

        cy.get(".jSelectedMonth").should("be.visible");
        cy.get("#btConfirmShippingData").click();

        cy.get(".prodBasket_nome").should(
            "contain.text",
            "Buquê Magnificas Margaridas Amarelas"
        );
        cy.get(".precoPor_basket").should("contain.text", "R$ 99,90");


        cy.get(".vr-total").should("contain.text", "R$ 388,67");
                
    })

})