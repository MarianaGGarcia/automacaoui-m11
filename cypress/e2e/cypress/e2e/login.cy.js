describe('Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://seusite.com/login')
    cy.get('#usuario').type('meuusuario')
    cy.get('#senha').type('minhasenha')
    cy.get('button[type="submit"]').click()
    cy.contains('Bem-vindo')
  })
})
