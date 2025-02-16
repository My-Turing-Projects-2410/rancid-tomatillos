import { useState, useEffect } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import searchIcon from '../icons/search.png';
import homeIcon from '../icons/home.png';

function App(){
  const [ movieData, setMovieData ] = useState([]);
  const [ details, setDetails ] = useState();
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

  function handleView(target, id=129) {
    setView(target);
  }

  function handleUpvote(id){
    const upvotedMovie = movieData.map((movie) => {
      if (movie.id === id){
        return { ...movie, vote_count: movie.vote_count + 1}
      }
      return movie  
    })
    setMovieData(upvotedMovie)
  }

  function handleDownvote(id) {
    const updatedMovieData = movieData.map((movie) => {
       return movie.id === id ? {...movie, vote_count: movie.vote_count - 1 } : movie
    });
   
    setMovieData(updatedMovieData);
  }

  if (view === "homepage") {
    return (
      <main className='App'>
        <header>
          <h1>rancid tomatillos</h1>
        </header>
        <div className='Container'>
          <MoviesContainer  movieData={movieData} 
                            handleUpvote={handleUpvote} 
                            handleDownvote={handleDownvote} 
                            handleView={handleView}/>
        </div>
      </main>
    );
  } else if (view === "movieDetails") {
    return (
      <main className='App'>
         <header>
          <h1>rancid tomatillos</h1>
          <button><img src={homeIcon} onClick={() => handleView("homepage")}/></button>
        </header>
        <div className='Details'>
          <MovieDetails details={details} />
        </div>
      </main>
    );
  }
}

export default App;
