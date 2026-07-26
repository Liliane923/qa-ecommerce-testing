describe('Testes de E-commerce - Fluxo de Compra', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Deve buscar um produto e adicionar ao carrinho', () => {
    cy.get('a[href="/products"]').click();
    cy.get('#search_product').type('tshirt');
    cy.get('#submit_search').click();
    cy.get('.title').should('contain', 'Searched Products');
    cy.get('.product-overlay').first().invoke('show');
    cy.get('.add-to-cart').first().click();
    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-title').should('contain', 'Added!');
  });

  it('Deve adicionar o produto e validar dentro do carrinho', () => {
    cy.get('a[href="/products"]').click();
    cy.get('#search_product').type('tshirt');
    cy.get('#submit_search').click();
    cy.get('.product-overlay').first().invoke('show');
    cy.get('.add-to-cart').first().click();
    
    // Clica no link "View Cart" da modal
    cy.get('.modal-content').contains('View Cart').click();

    // Valida se a página do carrinho abriu e o produto está visível
    cy.url().should('include', '/view_cart');
    cy.get('.cart_info').should('be.visible');
  });
});