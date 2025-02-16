import './MovieDetails.css';

function MovieDetails({details}) {

  function formatGenres(genres) {
    return genres.map((genre) => {
      return (
        <p key={genre} className='genre'>{genre}</p>
      );
    })
  }

  return (
    <section className='MovieDetails'>
      <img src={details.backdrop_path} alt={details.title}/>
      <div className='Description'>
        <h2>{details.title}</h2>
        <div className='Genres'>
          {formatGenres(details.genre_ids)}
        </div>
        <p className='Overview'>{details.overview}</p>
      </div>
      
    </section>
  );
}

export default MovieDetails;