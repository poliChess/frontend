import queen from "../../pictures/logos/queen.png";
import { Link } from "react-router-dom";

import Decoration from "../decoration";
import Title from '../title';

function Home() {
  const screen = (
    <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen pb-8 pt-8 z-10">
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

export default Home;
