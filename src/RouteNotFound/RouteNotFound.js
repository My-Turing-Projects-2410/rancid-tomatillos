import './RouteNotFound.css';
import rancid from '../icons/rancid_tomatillo_dude.png';

function RouteNotFound() {
  return (
    <section className='NotFound'>
      <div className='NotFoundContainer'>
        <h2 className='StatusMessage'>404 Not Found</h2>
        <p className='ErrorMessage'>Whoah! That movie is too rancid for our blood. Best you navigate back home.</p>
      </div>
    <img alt='grumpy rancid tomatillo dude' src={rancid}/>
    </section>
  );
}

export default RouteNotFound;

