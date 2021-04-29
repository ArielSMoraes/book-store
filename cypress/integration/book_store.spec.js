context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('search for a book', () => {
    cy.get("[data-testid='search-icon']").click()
    
    cy.get("[data-testid='search-input']").type('any book')
    
    cy.get("[data-testid='do-search']").click()
    cy.get("[data-testid='back-page']").should('exist')
  })
})
