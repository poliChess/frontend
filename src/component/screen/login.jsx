import queen from "../../pictures/logos/queen.png";
import google from "../../pictures/logos/google.png";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from "react-google-login";

import { setLoggedIn, setGoogleLogIn } from "../../state/userSlice";
import apiclient from "../../utils/apiclient";

import Decoration from "../decoration";
import Title from "../title";
import User from "../user";

import { googleClientID } from "../../App";

function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState({ text: "", color: "black" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!userData.username || !userData.password) {
      setMessage({ text: "Enter credentials!", color: "red" });
      return;
    }

    const res = await apiclient.login(userData);

    if (res.success) {
      setMessage({ text: "Login Successful", color: "black" });
      dispatch(setLoggedIn(res));
      setTimeout(() => navigate('/'), 500);
    } else {
      setMessage({ text: res.message, color: "red" });
    }
  };

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

      <input
        className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                   transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
        id='username'
        type='text'
        placeholder='Username'
        value={userData.username}
        onChange={(e) => setUserData((prev) => ({ ...prev, username: e.target.value }))}
      />

      <input
        className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                   transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
        id='password'
        type='password'
        placeholder='Password'
        value={userData.password}
        onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
      />

      <button
        className="bg-secondary-color text-white h-10 w-32 mb-6 rounded-full 
                   hover:scale-110 focus:scale-110 transition-all"
        onClick={handleSubmit}
      >
        Sign In
      </button>

      <GoogleLogin 
        clientId={googleClientID}
        render={(props) => 
          <button onClick={() => props.onClick()} disabled={props.disabled}>
            <img src={google} alt="" height="60px" width="60px"/>
          </button>
        }
        buttonText="Login"
        onSuccess={async (googleRes) => { 
          setMessage({ text: "", color: "black" });
          const res = await apiclient.googleLogin({ idToken: googleRes.xc.id_token });

          if (res.success) {
            dispatch(setGoogleLogIn(res));
            navigate('/');
          } else {
            setMessage({ text: "Google Sign-in Failed", color: "red" })
          }
        }}
        onFailure={() => setMessage({ text: "Google Sign-in Failed", color: "red" })}
        isSignedIn={false}
        />

      <h3 className='m-10 h-12 max-h-12 max-w-50' style={{color:message.color}}> {message.text} </h3>

    </div>
  );

  return Decoration(screen);
}

export default Login;
