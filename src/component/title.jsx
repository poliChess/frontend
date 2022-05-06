import horse from '../pictures/logos/horse.png';
import { Link } from 'react-router-dom';

function Title() {
  return (
    <div style={{ position: 'fixed', left: '1em', top: '1em' }}>
      <Link to='/'>
        <div>
          <div style={{ float: 'left' }}>
            <img src={horse} height='20px' width='20px' border='1px' />
          </div>
          Poli<strong>Chess</strong>
        </div>
      </Link>
    </div>
  );
}

export default Title;
