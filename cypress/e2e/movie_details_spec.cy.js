import MovieDetails from "../../src/MovieDetails/MovieDetails";

describe('Movie Details View flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/826510', {
      statusCode: 200, 
      fixture: "movie_details.json"
    })
    
    cy.visit('http://localhost:3000');
  })  

})
