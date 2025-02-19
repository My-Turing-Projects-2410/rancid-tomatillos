describe('Movie Posters / Homepage view flow', () => {
  beforeEach(() => {
    // Login the user and stub the network requests 
    cy.intercept('GET', 'http://localhost:3001/api/v1/movies', {
      statusCode: 200, 
      fixture: "movie_posters.json"
    })
  })

  describe('Voting user flow', () => {
    beforeEach(() => {
      cy.intercept('POST', 'http://localhost:3001/api/v1/movies/496243', {
        statusCode: 200, 
        fixture: "movie_posters.json"
      })
    })
  })
})