import { useEffect, useState } from 'react';
import { useParams, useNavigate, replace } from 'react-router-dom';
import './MovieDetails.css';



function fetchMovieDetails(movieId, setDetails, navigate) {  
  fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${movieId}`)
    .then(response => { 
      if (!response.ok) {
        navigate('/RouteNotFound', {replace: true});
        return;
      }
      return response.json(); })
    .then(data => setDetails(data))
  .catch(error => { console.log(error.message); 
    navigate('/RouteNotFound', {replace: true})
   })
}

function formatGenres(genres) {
    if(!genres) return null;
    return genres.map((genre) => {
      return (
        <p key={genre} className='genre'>{genre}</p>
      );
    })
  }

function MovieDetails() { 
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [ details, setDetails ] = useState({});

  useEffect(() => {
    fetchMovieDetails(movieId, setDetails, navigate);
  }, [movieId])


  return details ? (
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
  ) : null ; 
}

export default MovieDetails;