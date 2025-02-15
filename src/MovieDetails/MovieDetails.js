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
      <img className='Backdrop' src={details.backdrop_path}/>
      <div className='Description'>
        <h2 className='Title'>{details.title}</h2>
        <div className='Genres'>
          {formatGenres(details.genre_ids)}
        </div>
        <p>{details.overview}</p>
      </div>
      
    </section>
  );
}

export default MovieDetails;