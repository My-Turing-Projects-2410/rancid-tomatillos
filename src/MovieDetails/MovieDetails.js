import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [ details, setDetails ] = useState({});

  function fetchMovieDetails() {
    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${movieId}`)
      .then(response => response.json())
      .then(data => setDetails(data))
    .catch(error => console.log(error.message))
  }

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId])

  function formatGenres(genres) {
    if(!genres) return null;
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