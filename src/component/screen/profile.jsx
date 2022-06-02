import { useState } from 'react';

import Title from '../title';

import apiclient, { getAvatar } from '../../utils/apiclient.js';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Matches from '../matches';

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// https://github.com/kevinsqi/react-circular-progressbar <- aici daca 
// vrei sa vezi cum modifici chestii
function ProgressCircle(percentage) {
    return ( 
        <CircularProgressbar
        value={percentage}
        text={`Rank ${percentage}`}
        strokeWidth={5}
        styles={buildStyles({
          textColor: "black",
          textSize: 14
        })}
      />);
}

function ProgressCircle2(percentage) {
  return ( 
      <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      strokeWidth={5}
      styles={buildStyles({
        textColor: "black",
        pathColor: "green",
        trailColor: "red"
      })}
    />);
}

function Profile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleEditUsername  = () => navigate('/edit', { state: { id: 1, name: "username"}});
  const handleEditPassword  = () => navigate('/edit', { state: { id: 2, name: "password"}});
  const handleEditMail      = () => navigate('/edit', { state: { id: 3, name: "mail"}});
  const handleEditAvatar    = () => navigate('/edit', { state: { id: 4, name: "avatar"}});
  const handleDeleteAccount = () => navigate('/edit', { state: { id: 5, name: "delete"}});

  useEffect(() => {
    apiclient.myProfile()
      .then(res => setUser(res))
      .catch(err => console.warn(err));
    // TODO: fetch other user if route is host/profile/:username
    // apiclient.userProfile({username: user.username})
    //   .then(res => setUser(res))
    //   .catch(err => console.warn(err));
  }, []);

  const screen = (
    <div className="p-8 m-6 mt-20">

      <Title/>

      <div className="absolute top-4 right-4">
        <button
          className="bg-red-600 text-white h-10 w-36 rounded-full 
            hover:scale-110 focus:scale-110 transition-all"
            onClick={handleDeleteAccount}
          >
          Delete Account
        </button>
      </div>

      <div className='flex-row'>

        <div className='flex'>
            
          <div className='self-center'>
            <img
              className="m-auto"
              src={ getAvatar(user.avatar) }
              height="200px"
              width="200px"
              border="1px"
            />
          </div>

          <div className='flex items-center m-2 flex-grow'>
            <div className='flex-row'>
              <div className='font-mono font-bold text-2xl'>
                <strong>{ user.username }</strong>
              </div>
              <div className='font-mono text-md'>
                { user.mail }
              </div>
              <div className='md:hidden font-mono mt-6'>
                { user.rating }
              </div>
              <div className='md:hidden font-mono'>
                W/L - { user.wonGames }/{user.playedGames}
              </div>
              
            </div>
          </div>

          <div className='hidden md:flex flex-grow self-center justify-end m-2'>
            <div className='flex'>

              <div className='flex-row'>
                
                <div className='text-center mr-2 mb-16 font-mono font-bold text-green-600'>
                  { user.wonGames }
                </div>

                <div className='text-center mr-2 mt-16 font-mono font-bold text-red-600'>
                  { user.playedGames }
                </div>
              </div>

              <div className='flex-row'>
                
                <div className='bg-green-600 w-6 h-6 text-center mb-16 font-mono font-bold'>
                  <strong>W</strong>
                </div>

                <div className='bg-red-600 w-6 h-6 text-center mt-16 font-mono font-bold'>
                  <strong>L</strong>
                </div>

              </div>

            </div>
          </div>

          <div className='w-44 m-2 hidden md:flex font-mono font-bold'>
            {ProgressCircle2(25)}
          </div>

          <div className='hidden md:flex items-center m-2 flex-grow'>
            <div className='flex'>
              <div className='flex-row'>
                
                <div className='bg-decoration-bg w-6 h-6 text-center font-mono font-bold'>
                  <strong>P</strong>
                </div>

              </div>

              <div className='flex-row'>
              
                <div className='text-center ml-2 font-mono font-bold'>
                  20
                </div>
                
              </div>
            </div>
          </div>

          <div className='self-center w-44 hidden md:flex font-mono font-bold'>
            {ProgressCircle(70)}
          </div>
        </div>

        <div className='mt-16'>
          <div className='bg-transparent rounded-full flex flex-grow'>
            <div className='bg-secondary-color text-white w-1/3 text-center rounded-tl-full text-xl'>
              Time
            </div>
                
            <div className='bg-secondary-color text-white w-1/3 text-center text-2xl font-mono font-bold'>
              History
            </div>

            <div className='bg-secondary-color text-white w-1/3 text-center rounded-tr-full text-xl'>
              Enemy
            </div>   

          </div>

          <Matches golden={user.history} user={user}/>

        </div>

        <div className='text-center mt-5 border-b-4'>
          Edit
        </div>

        <div className='flex mt-1'>

          <div className='w-1/4 flex justify-center'>

            <button
              className="bg-main-color text-white h-10 w-36 rounded-full 
                hover:scale-110 focus:scale-110 transition-all"
                onClick={handleEditUsername}
              >
              Username
            </button>
              
          </div>
            
          <div className='w-1/4 flex justify-center'>
            <button
              className="bg-main-color text-white h-10 w-36 rounded-full 
                hover:scale-110 focus:scale-110 transition-all"
                onClick={handleEditPassword}
              >
              Password
            </button>
          </div>

          <div className='w-1/4 flex justify-center'>
            <button
              className="bg-main-color text-white h-10 w-36 rounded-full 
                hover:scale-110 focus:scale-110 transition-all"
                onClick={handleEditMail}
              >
              Mail
            </button>
          </div>

          <div className='w-1/4 flex justify-center'>
            <button
              className="bg-main-color text-white h-10 w-36 rounded-full 
                hover:scale-110 focus:scale-110 transition-all"
                onClick={handleEditAvatar}
              >
              Avatar
            </button>
          </div>

        </div>
      </div> 
    </div>
  
      
    );

  return screen;
}

export default Profile;
