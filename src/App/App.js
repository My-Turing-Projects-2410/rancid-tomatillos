import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
import searchIcon from '../icons/search.png';
import homeIcon from '../icons/home.png';

function App(){
  const [ movieData, setMovieData ] = useState(moviePosters);
  const [ selectedMovieId, setselectedMovieId ] = useState(null);  
  // const [ details, setDetails ] = useState(movieDetails);
  const [ view, setView ] = useState("homepage");

  function handleView(target='homepage', id=0) {
    console.log(`switch view to: ${target}, with movie id: ${id}`);
    setView(target);
    if (id) {
      setselectedMovieId(id)
    }
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
          <MoviesContainer  movieData={movieData} handleUpvote={handleUpvote} handleDownvote={handleDownvote} handleView={handleView}/>
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
