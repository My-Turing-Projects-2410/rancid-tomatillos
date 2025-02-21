describe('Movie Posters / Homepage view flow', () => {
  beforeEach(() => {
    // Login the user and stub the network requests 
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
      statusCode: 200, 
      fixture: "movie_posters.json"
    });

    cy.visit('http://localhost:3000');
  });

  it('displays the application title', () => {
    cy.get('h1').should('be.visible').and('contain', 'rancid tomatillos')
  });

  it('should fetch movies from API and display them', () => {
    cy.get('.MoviesContainer').should('exist')
    cy.get('.MoviePoster').should('have.length', 5)
    cy.get('.MoviePoster').find('.upVoteBtn').should('exist')
    cy.get('.MoviePoster').find('.upVoteBtn img').should('have.attr', 'alt', 'upVote')
    cy.get('.MoviePoster').find('.downVoteBtn').should('exist')
    cy.get('.MoviePoster').find('.downVoteBtn img').should('have.attr', 'alt', 'downVote')
    cy.get('.MoviePoster').first().find('img').should('have.attr', 'alt', 'The Dark Knight')
    cy.get('.MoviePoster').first().find('.Votes p').should('have.text', '32544')
    cy.get('.MoviePoster').last().find('img').should('have.attr', 'alt', 'Pulp Fiction')
    cy.get('.MoviePoster').last().find('.Votes p').should('have.text', '27642')
  });

  describe('Voting user flow', () => {
    it('should decrement the vote count when downVote button is pushed for a certain poster', () => {
      cy.intercept('PATCH', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/496243', {
        statusCode: 200,
        body: { 
              id: 496243,
              poster_path: "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
              title: "Parasite",
              vote_count: 18017
              }
      }).as('updateVote')

      cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
          statusCode: 200, 
          fixture: 'down_voted_movie_posters.json'
      }).as('getMovies')

      cy.get('.MoviePoster').eq(2).find('.Votes p').should('have.text', '18018')
      cy.get('.MoviePoster').eq(2).find('.downVoteBtn').click()
      cy.wait('@updateVote')
      cy.wait('@getMovies')
      cy.get('.MoviePoster').eq(2).find('.Votes p').should('have.text', '18017')
    }); 

    it('should increment the vote count when upVote button is clicked for a certain poster', () => {
      cy.intercept('PATCH', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/496243', {
        statusCode: 200,
        body: { 
              id: 496243,
              poster_path: "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
              title: "Parasite",
              vote_count: 18019
              }
      }).as('updateVote')

      cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
          statusCode: 200, 
          fixture: 'up_voted_movie_posters.json'
      }).as('getMovies')

      cy.get('.MoviePoster').eq(2).find('.Votes p').should('have.text', '18018')
      cy.get('.MoviePoster').eq(2).find('.upVoteBtn').click()
      cy.wait('@updateVote')
      cy.wait('@getMovies')
      cy.get('.MoviePoster').eq(2).find('.Votes p').should('have.text', '18019')
    }); 
  });
});