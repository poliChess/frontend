import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { clear } from '../state/userSlice';

function User() {
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  const handleLogout = () => dispatch(clear());

  if (!user.loggedIn || !user.info)
    return null;

  return (
    <div className="absolute top-4 right-4">
      <div className='text-lg float-left'>
        <Link to='/profile'>
          {user.info.username} 
          <h3 className="inline-block ml-2 font-semibold mx-2">
            {user.info.rating}
          </h3>
        </Link>
        <button className="text-md border-2 border-red-600 rounded-full px-2 hover:scale-110 transition-all"
                onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default User;
