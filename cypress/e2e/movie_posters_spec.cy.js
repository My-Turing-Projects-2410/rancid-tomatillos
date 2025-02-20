describe('Movie Posters / Homepage view flow', () => {
  beforeEach(() => {
    // Login the user and stub the network requests 
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
      statusCode: 200, 
      fixture: "movie_posters.json"

    })
    cy.visit('http://localhost:3000')
  })

  it('should fetch movies from API and display them', () => {
    cy.get('.Container').should('exist')
    cy.get('.MoviesContainer').should('exist')
    cy.get('.MoviePoster').should('have.length', 4)
    cy.get('.MoviePoster').find('button').first().should('exist')
    cy.get('.MoviePoster').find('button').first().find('img').should('have.attr', 'alt', 'upVote')
    cy.get('.MoviePoster').find('button').last().should('exist')
    cy.get('.MoviePoster').find('button').last().find('img').should('have.attr', 'alt', 'downVote')
    cy.get('.MoviePoster').first().find('img').should('have.attr', 'alt', 'The Dark Knight')
    cy.get('.MoviePoster').first().find('.Votes p').should('have.text', (32544).toString())
    cy.get('.MoviePoster').last().find('img').should('have.attr', 'alt', 'Pulp Fiction')
    cy.get('.MoviePoster').last().find('.Votes p').should('have.text', (27642).toString())
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