// Mock data to use for testing:
// import posters from '../fixtures/movie_posters.json' (we've added mock data to this file for you!)
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)
 
describe('Bad URL', () => {
  beforeEach(() => {
    // Login the user and stub the network requests 
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
      statusCode: 200, 
      fixture: "movie_posters.json"
    });

    cy.visit('http://localhost:3000');
  });

  it('navigates to page not found if URL is bad', () => {
    cy.visit('http://localhost:3000/')
    .get('.MoviesContainer').should('exist')

    cy.visit('http://localhost:3000/sdfkjsdf')
    cy.get('h2').should('have.text', '404 Not Found')

    cy.get('p').should('have.text', 'Whoah! That movie is too rancid for our blood. Best you navigate back home.')

    cy.get('.NotFound img').should('have.attr', 'alt', 'grumpy rancid tomatillo dude')
  })
})