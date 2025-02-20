describe('Movie Details View flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
      statusCode: 200,
      fixture: "movie_posters.json"
    }).as('getMovies');

    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/*', {
      statusCode: 200,
      fixture: "movie_details.json"
    }).as('getMovieDetails');

    // cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/826510', {
    //   statusCode: 200, 
    //   fixture: "movie_details.json"
    // }).as('getMovieDetails');
    
    cy.visit('http://localhost:3000');
    cy.wait('@getMovies');
    
  })  

  it('should display the correct movie details when a movie is clicked', () => {
    cy.get('[data-testid="movie-826510"]').should('exist');
    cy.get('[data-testid="movie-826510"]').click();
    cy.wait('@getMovieDetails');
    cy.get('.MovieDetails').should('exist'); 
    // cy.get('.MoviePoster').first().click()
    // cy.get('.Details').should('exist')
    cy.get('.Description h2').should('contain', 'Harold and the Purple Crayon');
    cy.get('.Genres p').should('exist');
    cy.get('.Genres p').first().should('contain', 'Adventure');
    cy.get('.Overview').should('contain', 'Inside of his book, adventurous Harold')
  })

})
