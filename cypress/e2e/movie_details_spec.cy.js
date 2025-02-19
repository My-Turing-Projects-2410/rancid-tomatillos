describe('Movie Details View flow', () => {
  beforeEach(() => {
    // Login the user and stub the network requests 
    cy.intercept('GET', 'http://localhost:3001/api/v1/movies/826510', {
      statusCode: 200, 
      fixture: "movie_details.json"
      })
    })
  })
