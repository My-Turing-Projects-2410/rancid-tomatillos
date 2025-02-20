describe('Movie Posters / Homepage view flow', () => {
  beforeEach(() => {
    // Login the user and stub the network requests 
    cy.intercept('GET', 'http://localhost:3001/api/v1/movies', {
      statusCode: 200, 
      fixture: "movie_posters.json"
    })

    cy.visit('http://localhost:3000');
  });

  it('displays the application title', () => {
    cy.get('h1').should('be.visible').and('contain', 'rancid tomatillos')
  });

})