import { useState, useEffect  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import apiclient, { getAvatar } from '../../utils/apiclient.js';

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
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    apiclient.userProfile({ username: id })
      .then(res => setUser(res))
      .catch(err => {
        console.warn(err);
        navigate('/profile');
      });
  }, [id, navigate]);

  const screen = (
    <div className="p-8 m-6 mt-20">
      <Title/>

      <div className="absolute top-4 right-4">
        <button className="bg-secondary-color text-white h-10 w-36 rounded-full 
            hover:scale-110 focus:scale-110 transition-all"
            onClick={() => navigate('/profile')}>
          Back
        </button>
      </div>

      <div className='flex-row'>

        <div className='flex'>
            
          <div className='self-center'>
            <img
              className="m-auto"
              src={ getAvatar(user.avatar) }
              alt="avatar"
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
      </div> 
    </div>
    );

  return screen;
}

export default Profile;
