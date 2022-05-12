import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

function User() {
  const user = useSelector(state => state.user);

  console.log(user);

  if (!user.loggedIn || !user.info)
    return null;

  return (
    <div className="fixed right-4 top-4">
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
