import './MoviePoster.css';
import upvoteIcon from '../icons/upvote.png';
import downvoteIcon from '../icons/downvote.png';

function MoviePoster({ title, vote_count, image, id, handleVote, handleView}) {

  const handleClick = () => {
    handleView("movieDetails", id);
  }

  return (
    <section className='MoviePoster'>
      <img src={image} alt={title} onClick={() => {handleClick()}}/>
      <div className='Votes'>
        <button className='upVoteBtn' onClick={() => handleVote(id, 'up')}>
          <img  className='VoteImage Up' src={upvoteIcon} alt='upVote'/>
        </button>
        <p>{vote_count}</p>
        <button className='downVoteBtn' onClick={() => handleVote(id, 'down')}>
          <img className='VoteImage Down' src={downvoteIcon} alt='downVote' />
        </button>
      </div>
    </section>
  );
}

export default MoviePoster;