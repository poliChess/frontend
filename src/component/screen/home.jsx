import queen from "../../pictures/logos/queen.png";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Decoration from "../decoration";
import Title from '../title';
import User from '../user';

function Play() {
  const screen = (
    <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132 relative">
      <Title />      
      <User />

      <img
        className="mb-8"
        src={queen}
        height="80px"
        width="80px"
        border="1px"
      />

      <Link to="/game">
        <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">
          Local game
        </button>
      </Link>

      <Link to="/game">
        <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">
          Online game
        </button>
      </Link>

      <Link to="/game">
        <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">
          Versus AI
        </button>
      </Link>

      <Link to="/profile">
        <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">
          Profile
        </button>
      </Link>
    </div>
  );

  return Decoration(screen);
}

function Welcome() {
  const screen = (
    <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132 relative">
      <Title /> 

      <img
        className="mb-8"
        src={queen}
        height="80px"
        width="80px"
        border="1px"
      />

      <Link to="/login">
        <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">
          Login
        </button>
      </Link>

      <Link to="/register">
        <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">
          Register
        </button>
      </Link>

      <Link to="/local">
        <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">
          Guest
        </button>
      </Link>
    </div>
  );

  return Decoration(screen);
}

function Home() {
  const user = useSelector(state => state.user);

  if (user.loggedIn || user.guest)
    return Play();

  return Welcome();
}

export default Home;
