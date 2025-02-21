import './MoviePoster.css';
import { Link } from 'react-router-dom';
import upvoteIcon from '../icons/upvote.png';
import downvoteIcon from '../icons/downvote.png';

function MoviePoster({ title, vote_count, image, id, handleVote}) {
  return (
    <section className='MoviePoster'  data-testid={`movie-${id}`}>
      <Link to={`/${id}`}><img src={image} alt={title}/></Link>
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