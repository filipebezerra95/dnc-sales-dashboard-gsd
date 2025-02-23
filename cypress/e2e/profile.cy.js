describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.login('tester1.cypress.bza@dnc.com', '@Teste123')
    cy.visit('http://localhost:5173/perfil')
  })

  it('should display profile form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="text"]').should('be.visible')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="tel"]').should('be.visible')
    cy.get('#update-profile').should('be.visible')
    cy.get('#delete-profile').should('be.visible')
  })

  it('should display theme button switch', () => {
    cy.get('#theme-switch').should('be.visible')
  })

  it('should display logout button and logout flow works', () => {
    cy.get('#logout').click()
    cy.url().should('include', '/')
  })
})
