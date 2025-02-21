import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import homeIcon from '../icons/home.png';

function App(){
  const [ movieData, setMovieData ] = useState([]);

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

    return (
      <main className='App'>
        <header>
          <h1>rancid tomatillos</h1>
          {useLocation().pathname !== '/' && (<Link to="/" className="homeButton"><img className='home' alt="Home" src={homeIcon} /></Link> )}
        </header>
        <section className="content">
          <Routes>
            <Route path="/" element={<MoviesContainer movieData={movieData} handleVote={handleVote}/>} />
            <Route path="/:movieId" element={<MovieDetails/>} />
          </Routes>
        </section>
      </main>
    );
}

export default App;