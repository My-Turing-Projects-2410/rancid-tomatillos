import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'

function Movies({ movieData, handleUpvote}) {
  const movieCards = movieData.map((movie) => {
   console.log('BIG movie vote: ', movie.vote_count)
    return (
      <MoviePoster
        title={movie.title} 
        vote_count={movie.vote_count} 
        image={movie.poster_path} 
        id={movie.id}
        key={movie.id}
        handleUpvote={handleUpvote}
      />
    );
  });


  return (
      <section className='MoviesContainer'>
        {movieCards}
      </section>
  );
}
  
export default Movies;