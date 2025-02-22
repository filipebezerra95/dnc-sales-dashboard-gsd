describe('Login Flow Correct Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with valid credentials', () => {
    cy.get('input[type="email"]').type('tester1.cypress.bza@dnc.com')
    cy.get('input[type="password"]').type('@Teste123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login Flow invalid Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with invalid credentials', () => {
    cy.get('input[type="email"]').type('tester.zero.bza@dnc.com')
    cy.get('input[type="password"]').type('@Test123')
    cy.get('button[type="submit"]').click()
    cy.contains('email e/ou senha invalidos').should('be.visible')
  })
})
