describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.visit('https://seusite.com/cadastro')
    cy.get('#nome').type('Mariana')
    cy.get('#email').type('mari@email.com')
    cy.get('#senha').type('123456')
    cy.get('button[type="submit"]').click()
    cy.contains('Cadastro realizado com sucesso')
  })
})
