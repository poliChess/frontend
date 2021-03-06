import horse from '../pictures/logos/horse.png';
import { Link } from 'react-router-dom';

function Title() {
  return (
    <div className="absolute left-4 top-4">
      <Link to='/'>
        <div className='text-lg float-left transition-all hover:scale-110'>
          <div className="float-left">
            <img src={horse} alt="" height='24px' width='24px' />
          </div>
          Poli<strong>Chess</strong>
        </div>
      </Link>
    </div>
  );
}

export default Title;
