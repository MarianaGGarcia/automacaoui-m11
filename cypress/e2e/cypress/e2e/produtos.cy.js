describe('Produtos', () => {
  it('Adicionar produto ao carrinho', () => {
    cy.visit('https://seusite.com/produtos')
    cy.get('.produto:first').click()
    cy.get('#quantidade').clear().type('2')
    cy.get('#add-carrinho').click()
    cy.contains('Produto adicionado ao carrinho')
  })
})
