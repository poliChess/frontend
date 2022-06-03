import { useState, useEffect  } from 'react';
import { useNavigate, generatePath } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import apiclient, { getAvatar } from '../../utils/apiclient.js';
import search from '../../pictures/misc/search.png';

import Title from '../title';
import Matches from '../matches';

function RatingProgressCircle(rating) {
  return <CircularProgressbar
    value={rating / 22}
    text={rating}
    strokeWidth={8}
    styles={ buildStyles({
      textColor: "black",
      textSize: 14
    })}
  />
}

function WinRateProgressCircle(percentage) {
  return <CircularProgressbar
    value={percentage}
    text={`${percentage}%`}
    strokeWidth={8}
    styles={buildStyles({
      textColor: "black",
      pathColor: "green",
      trailColor: "red"
    })}
  />
}

function PlaceholderProgressCricle() {
  return <CircularProgressbar
    text={'0'}
    value={0}
    strokeWidth={8}
    styles={buildStyles({
      trailColor: "gray",
      textColor: "gray"
    })}
  />
}

function Profile() {
  const [user, setUser] = useState({});
  const [otherUser, setOtherUser] = useState('');
  const navigate = useNavigate();

  const handleEditUsername  = () => navigate('/edit', { state: { id: 1, name: "username"}});
  const handleEditPassword  = () => navigate('/edit', { state: { id: 2, name: "password"}});
  const handleEditMail      = () => navigate('/edit', { state: { id: 3, name: "mail"}});
  const handleEditAvatar    = () => navigate('/edit', { state: { id: 4, name: "avatar"}});
  const handleDeleteAccount = () => navigate('/edit', { state: { id: 5, name: "delete"}});

  useEffect(() => {
    apiclient.myProfile()
      .then(res => setUser(res))
      .catch(err => {
        console.warn(err);
        navigate('/');
      });
  }, []);

  const screen = (
    <div className="p-8 m-6 mt-20">
      <Title/>

      <div className="absolute top-4 right-4">
        <button
          className="bg-red-600 text-white h-10 w-36 rounded-full 
            hover:scale-110 focus:scale-110 transition-all"
            onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>

      <div className='flex-row'>

        <div className='flex'>
            
          <div className='self-center'>
            <img
              className="m-auto"
              src={ getAvatar(user.avatar) }
              height="140px"
              width="140px"
              border="1px"
            />
          </div>

          <div className='flex items-center m-2 flex-grow'>
            <div className='flex-row'>
              <div className='font-mono font-bold text-2xl'>
                <strong>{ user.username }</strong>
              </div>
              <div className='md:hidden font-mono mt-6'>
                Rating { user.rating }
              </div>
              <div className='md:hidden font-mono'>
                W/L - { user.wonGames }/{ user.playedGames - user.wonGames }
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
                  { user.playedGames - user.wonGames }
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
            { 
              user.playedGames > 0 
                ? WinRateProgressCircle( user.wonGames / user.playedGames )
                : PlaceholderProgressCricle()
            }
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
                  { user.playedGames }
                </div>
                
              </div>
            </div>
          </div>

          <div className='flex self-center w-44 font-mono font-bold'>
            { RatingProgressCircle(user.rating) }
          </div>
        </div>

        <div className='mt-16 lg:w-2/3 md:w-132 m-auto'>
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

        <div className='text-center mt-5 lg:w-2/3 md:w-132 m-auto font-bold'>
          Search Player
        </div>

        <div className="py-2.5 px-4 flex flex-row m-auto border-4 w-fit border-secondary-color rounded-full justify-center">
          <input className='bg-white text-black text-lg h-10 w-60 outline outline-main-color outline-2
                   transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
            id='Username'
            type='text'
            placeholder='Username'
            value={otherUser}
            onChange={(e) => setOtherUser(e.target.value)}/>

          <button className="ml-6 mr-1 hover:scale-110"
            onClick={() => navigate(generatePath('/profile/:id', { id: otherUser }))}>
            <img src={search} alt="search" height="32px" width="32px"/>
          </button>
        </div>

        <div className='text-center mt-5 lg:w-2/3 md:w-132 m-auto font-bold'>
          Edit
        </div>

        <div className='flex flex-row p-2.5 lg:w-2/3 md:w-132 m-auto border-4 border-secondary-color rounded-full justify-between'>
          <button className="bg-main-color text-white h-10 w-1/6 rounded-full 
              hover:scale-110 focus:scale-110 hover:bg-secondary-color transition-all"
            onClick={handleEditUsername} >
            Username
          </button>
          
          <button className="bg-main-color text-white h-10 w-1/6 rounded-full 
              hover:scale-110 focus:scale-110 hover:bg-secondary-color transition-all"
            onClick={handleEditPassword} >
            Password
          </button>

          <button className="bg-main-color text-white h-10 w-1/6 rounded-full 
              hover:scale-110 focus:scale-110 hover:bg-secondary-color transition-all"
            onClick={handleEditMail}>
            Mail
          </button>

          <button className="bg-main-color text-white h-10 w-1/6 rounded-full 
              hover:scale-110 focus:scale-110 hover:bg-secondary-color transition-all"
            onClick={handleEditAvatar}>
            Avatar
          </button>

        </div>
      </div> 
    </div>
  
      
    );

  return screen;
}

export default Profile;
