import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

function User() {
  const user = useSelector(state => state.user);

  if (!user.loggedIn || !user.info)
    return null;

  return (
    <div className="absolute top-4 right-4">
      <Link to='/profile'>
        <div className='text-lg float-left'>
          {user.info.username} 
          <h3 className="inline-block ml-2 font-semibold">{user.info.rating}</h3>
        </div>
      </Link>
    </div>
  );
}

export default User;
