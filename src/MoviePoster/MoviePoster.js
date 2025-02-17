import './MoviePoster.css';
import upvoteIcon from '../icons/upvote.png';
import downvoteIcon from '../icons/downvote.png';

function MoviePoster({ title, vote_count, image, id, handleUpvote, handleDownvote, handleView}) {

  const handleClick = () => {
    handleView("movieDetails", id);
  }

  return (
    <section className='MoviePoster'>
      <img src={image} alt={title} onClick={() => {handleClick()}}/>
      <div className='Votes'>
        <button onClick={() => handleUpvote(id)}>
          <img  className='VoteImage Up' src={upvoteIcon} alt='upvote'/>
        </button>
        <p>{vote_count}</p>
        <button onClick={() => handleDownvote(id)}>
          <img className='VoteImage Down' src={downvoteIcon} alt='downVote' />
        </button>
      </div>
    </section>
  );
}

export default MoviePoster;