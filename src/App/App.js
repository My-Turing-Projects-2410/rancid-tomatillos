import { useState, useEffect } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import searchIcon from '../icons/search.png';
import homeIcon from '../icons/home.png';

function App(){
  const [ movieData, setMovieData ] = useState([]);
  const [ selectedMovieId, setselectedMovieId ] = useState(null);  
  const [ view, setView ] = useState("homepage");

  function getMovies() {
    fetch('https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(data => {
        setMovieData(data);
      })
      .catch(error => console.log(error.message))
  }

  useEffect(() => {
    getMovies();
  }, [])

  function handleView(target, id) {
    setView(target); 

    if (id) {
      setselectedMovieId(id)
    }
  }

  function handleVote(id, direction) {
    const vote_data = { vote_direction: direction }
    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vote_data),
    })
      .then(response => response.json())
      .then(data => getMovies())
      .catch(error => console.log(error.message))
  }

  if (view === "homepage") {
    return (
      <main className='App'>
        <header>
          <h1>rancid tomatillos</h1>
        </header>
        <div className='Container'>
          <MoviesContainer  movieData={movieData} 
                            handleVote={handleVote} 
                            handleView={handleView}/>
        </div>
      </main>
    );
  } else if (view === "movieDetails" && selectedMovieId) {
    return (
      <main className='App'>
         <header>
          <h1>rancid tomatillos</h1>
          <button className='homeButton'><img className='home' src={homeIcon} onClick={() => handleView("homepage")}/></button>
        </header>
        <div className='Details'>
          <MovieDetails movieId={selectedMovieId} />
        </div>
      </main>
    );
  }
}

export default App;
