import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';
import searchIcon from '../icons/search.png';



function App(){
  const [ movieData, setMovieData ] = useState(moviePosters);

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

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <div className='Container'>
        <MoviesContainer  movieData={movieData} handleUpvote={handleUpvote} handleDownvote={downvote}/>
      </div>
    </main>
  );
}

export default App;
