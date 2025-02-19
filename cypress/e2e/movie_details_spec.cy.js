describe('Movie Details View flow', () => {
  beforeEach(() => {
    // Login the user and stub the network requests 
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/826510', {
      statusCode: 200, 
      fixture: "movie_details.json"
    })
    cy.visit('http://localhost:3000');

  })  

    it('displays the application title', () => {
      cy.get('h1').should('exist')
      cy.get('h1').should('be.visible').and('contain', 'rancid tomatillos')
    });

    // it('displays the movie title', () => {
    //   cy.get('h2').should('be.visible').and('contain', 'Harold and the Purple Crayon')
    // });

    // it('displays the movie genres', () => {
    //   cy.get('div.Genres p.genre').should('be.visible').and('contain', 'Adventure')
    //   .genre 
    // });


})
