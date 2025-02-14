import './MoviePoster.css';
import upvoteIcon from '../icons/upvote.png';
import downvoteIcon from '../icons/downvote.png';

function MoviePoster({ title, vote_count, image, id}) {
  return (
    <section className='MoviePoster'>
      <img src={image} alt={title} />
      <div className='Votes'>
        <button>
          <img  className='VoteImage Up' src={upvoteIcon} alt='upVote'/>
        </button>
        <p>{vote_count}</p>
        <button>
          <img className='VoteImage Down' src={downvoteIcon} alt='downVote' />
        </button>
      </div>
    </section>
  );
}

export default MoviePoster;