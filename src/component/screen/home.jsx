import queen from "../../pictures/logos/queen.png";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Decoration from "../decoration";
import Title from '../title';
import User from '../user';
import apiclient from '../../utils/apiclient';

function Play() {
  const navigate = useNavigate();

  const handleVsComputer = async () => {
    const res = await apiclient.enterQueue(true);

    if (res.success) {
      navigate('/game');
    } else {
      console.warn(res);
    }
  }

  const handleVsPlayer = async () => {
    const res = await apiclient.enterQueue(false);

    if (res.success) {
      navigate('/game');
    } else {
      console.warn(res);
    }
  }

  const screen = (
    <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132 relative">
      <Title />      
      <User />

      <img
        className="mb-8 hover:scale-125 transition-all"
        src={queen}
        alt=""
        height="80px"
        width="80px"
        border="1px"
      />

      <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full"
              onClick={() => navigate('/local')}>
        Local game
      </button>

      <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full"
              onClick={handleVsPlayer}>
        Online game
      </button>

      <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full"
              onClick={handleVsComputer}>
        Versus AI
      </button>

      <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-60 my-6 rounded-full"
              onClick={() => navigate('/profile')}>
        Profile
      </button>

    </div>
  );

  return Decoration(screen);
}

function Welcome() {
  const navigate = useNavigate();

  const screen = (
    <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132">
      <Title /> 

      <img
        className="mb-8 hover:scale-125 transition-all"
        src={queen}
        alt=""
        height="80px"
        width="80px"
        border="1px"
      />

      <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full"
              onClick={() => navigate('/login')}>
        Login
      </button>

      <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-70 mb-6 rounded-full"
              onClick={() => navigate('/register')}>
        Register
      </button>

      <button className="bg-main-color hover:bg-secondary-color hover:scale-105 transition-all text-white text-lg h-11 w-60 my-6 rounded-full"
              onClick={() => navigate('/local')}>
        Local game
      </button>
      
    </div>
  );

  return Decoration(screen);
}

function Home() {
  const user = useSelector(state => state.user);

  if (user.loggedIn || user.guest)
    return <Play/>;

  return <Welcome/>;
}

export default Home;
