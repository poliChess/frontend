import horse from "../pictures/logos/horse.png";
import queen from "../pictures/logos/queen.png";
import google from "../pictures/logos/google.png";
import pieces_bg from "../pictures/backgrounds/pieces1_bg.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Decoration from "./decoration";

function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const screen = (
    <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen pb-8 pt-8 z-10">
      <div style={{ position: "fixed", left: "1em", top: "1em" }}>
        <Link to="/">
          <div>
            <div style={{ float: "left" }}>
              <img src={horse} height="20px" width="20px" border="1px" />
            </div>
            Poli<strong>Chess</strong>
          </div>
        </Link>
      </div>

      <img
        className="mb-8"
        src={queen}
        height="80px"
        width="80px"
        border="1px"
      />

      <input
        className="bg-button-1 text-white h-10 w-60 mb-6  
    focus:outline outline-purple-600 focus:shadow-purple-600 placeholder-white 
    text-center shadow-lg shadow-button-1"
        id="username"
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, username: e.target.value }))
        }
      />

      <input
        className="bg-button-1 text-white h-10 w-60 mb-6 
    focus:outline outline-purple-600 focus:shadow-purple-600 placeholder-white 
    text-center shadow-lg shadow-button-1"
        id="password"
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, password: e.target.value }))
        }
      />

      <Link to="/play">
        <button
          className="bg-button-2 hover:bg-purple-600 text-white h-10 w-28 mb-6 rounded-full 
        shadow-lg hover:shadow-purple-600 shadow-button-2"
          onClick={() => console.log(userData)}
        >
          Sign In
        </button>
      </Link>

      <a className="mt-8" href="www.google.com">
        <img src={google} height="80px" width="80px" border="1px" />
      </a>
    </div>
  );

  return Decoration(screen);
}

export default Login;
