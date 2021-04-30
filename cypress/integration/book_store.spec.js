context('Home Page', () => {
  it('search for a book', () => {
    cy.visit('http://localhost:3000')
    cy.get("[data-testid='search-icon']").click()
    
    cy.get("[data-testid='search-input']").type('any book')
    
    cy.get("[data-testid='do-search']").click()
    cy.get("[data-testid='back-page']").should('exist')
  })

  it('after open filters and close it, go to search page', () => {
    cy.visit('http://localhost:3000/search/books')
    
    cy.get("[data-testid='filter']").click()
    cy.get("[data-testid='close-filter']").click()
    cy.get("[data-testid='back-page']").should('exist')
  })

  it('search for a book and filter it', () => {
    cy.visit('http://localhost:3000/search/books')
    
    cy.get("[data-testid='filter']").click()
    cy.get("[data-testid='first-price']").click()
    cy.get("[data-testid='first-available']").click()
    cy.get("[data-testid='epub']").click()
    cy.get("[data-testid='apply-filter']").click({force: true})
    cy.get("[data-testid='back-page']").should('exist')
  })
})
