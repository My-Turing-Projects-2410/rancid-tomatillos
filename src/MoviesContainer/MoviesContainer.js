import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'

function Movies({ movieData, handleUpvote, handleDownvote, handleView}) {
  
  const movieCards = movieData.map((movie) => {
    return (

      <MoviePoster
        title={movie.title} 
        vote_count={movie.vote_count} 
        image={movie.poster_path} 
        id={movie.id}
        key={movie.id}
        handleUpvote={handleUpvote}
        handleDownvote={handleDownvote}
        handleView={handleView}
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