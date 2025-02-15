import './MoviePoster.css';
import upvoteIcon from '../icons/upvote.png';
import downvoteIcon from '../icons/downvote.png';

function MoviePoster({ title, vote_count, image, id, handleUpvote}) {
  
  function clickUpvote() {
    handleUpvote(id)
  }
  
  return (
    <section className='MoviePoster'>
      <img src={image} alt={title} />
      <div className='Votes'>
        <button onClick={clickUpvote}>
          <img  className='VoteImage Up' src={upvoteIcon} alt='upvote'/>
        </button>
        <p>{vote_count}</p>
        <button>
          <img className='VoteImage Down' src={downvoteIcon} alt='downvote' />
        </button>
      </div>
    </section>
  );
}

export default MoviePoster;