import './MoviePoster.css';

function MoviePoster({ title, vote_count, image, id}) {
  return (
    <section className='MoviePoster'>
      <img src={image} alt={title} />
      <h4>{vote_count}</h4>
    </section>
  );
}

export default MoviePoster;