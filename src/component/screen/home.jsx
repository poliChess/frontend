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
        className="mb-8 hover:scale-125 transition-all"
        src={queen}
        height="80px"
        width="80px"
        border="1px"
      />

      <Link to="/game">
        <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full">
          Local game
        </button>
      </Link>

      <Link to="/game">
        <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full">
          Online game
        </button>
      </Link>

      <Link to="/game">
        <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full">
          Versus AI
        </button>
      </Link>

      <Link to="/profile">
        <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full">
          Profile
        </button>
      </Link>
    </div>
  );

  return Decoration(screen);
}

function Welcome() {
  const screen = (
    <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132">
      <Title /> 

      <img
        className="mb-8 hover:scale-125 transition-all"
        src={queen}
        height="80px"
        width="80px"
        border="1px"
      />

      <Link to="/login">
        <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full">
          Login
        </button>
      </Link>

      <Link to="/register">
        <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full">
          Register
        </button>
      </Link>

      <Link to="/local">
        <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full">
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
