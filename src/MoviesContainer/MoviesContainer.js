import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'

function Movies({ movieData, downvote }) {
  console.log(movieData);
  const movieCards = movieData.map((movie) => {
    return (
      <MoviePoster  title={movie.title} 
                    vote_count={movie.vote_count} 
                    image={movie.poster_path} 
                    id={movie.id}
                    key={movie.id}
                    downvote={downvote}
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