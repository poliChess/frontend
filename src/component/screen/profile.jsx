import queen from '../../pictures/logos/queen.png';
import google from '../../pictures/logos/google.png';
import avatar_bishop from '../../pictures/avatars/avatar_bishop.png';
import { useState } from 'react';
import win from '../../pictures/misc/win.png'
import loss from '../../pictures/misc/loss.png'
import avatar from '../../pictures/avatars/avatar_king.png'

import Title from '../title';

import apiclient from '../../utils/apiclient.js';
import User from '../user';
import { useSelector } from "react-redux";


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

/**
 * 
 * @param {int} time seconds elapsed
 * @param {String} enemy name of the enemy
 * @param {String} result Victory / Defeat
 * @returns 
 */
function Match(time, enemy, result) {
  return (
    <div className={result === 'Victory' ? 'bg-green-600 flex mt-4 rounded-md' : 'bg-red-800 flex mt-4 rounded-md'}>
            <div className='w-1/3 text-center self-center text-white font-mono'>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            </div>

                
            <div className='w-1/3'>
              <img className='m-auto' src={result === 'Victory' ? win : loss} height="80px" width="80px"/>
            </div>

            <div className='w-1/3 text-center self-center text-white font-mono'>
              {enemy}
            </div>   

            
    </div>
  );
}

const wins = 15;
const losses = 5;
function Profile() {

    const user = useSelector(state => state.user.info);

    // console.log({user.username})

    const screen = (
        <div className="p-8 m-6 mt-24">
    
          <Title/>
    
          <div className='flex-row'>
    
            <div className='flex'>
                
              <div className='self-center'>
                <img
                  className="m-auto"
                  src={avatar}
                  height="200px"
                  width="200px"
                  border="1px"
                />
              </div>
    
              <div className='flex items-center m-2 flex-grow'>
                <div className='flex-row'>
                  <div className='font-mono font-bold text-2xl'>
                    <strong>{user.username}</strong>
                  </div>
                  <div className='font-mono text-md'>
                    {user.mail}
                  </div>
                  <div className='md:hidden font-mono mt-6'>
                    Rank 70
                  </div>
                  <div className='md:hidden font-mono'>
                    W/L - 5/15
                  </div>
                  
                </div>
              </div>
    
              <div className='self-center w-44 m-2 hidden md:flex font-mono font-bold'>
                {ProgressCircle2(25)}
              </div>

              <div className='hidden md:flex items-center m-2 flex-grow'>
                <div className='flex'>
                  <div className='flex-row'>
                    
                    <div className='bg-green-600 w-6 h-6 text-center mb-1 font-mono font-bold'>
                      <strong>W</strong>
                    </div>
                    <div className='bg-decoration-bg w-6 h-6 text-center mb-1 font-mono font-bold'>
                      <strong>P</strong>
                    </div>
                    <div className='bg-red-600 w-6 h-6 text-center mb-1 font-mono font-bold'>
                      <strong>L</strong>
                    </div>

                  </div>

                  <div className='flex-row'>
                  
                    <div className='text-center ml-2 mb-1 font-mono font-bold text-green-600'>
                      5
                    </div>
                    <div className='text-center ml-2 mb-1 font-mono font-bold'>
                      20
                    </div>
                    <div className='text-center ml-2 mb-1 font-mono font-bold text-red-600'>
                      15
                    </div>
                  </div>
                </div>
              </div>

              <div className='self-center w-44 hidden md:flex font-mono font-bold'>
                {ProgressCircle(70)}
              </div>
            </div>
    
            <div className='mt-24'>
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
    
              <div className='bg-decoration-bg h-96 flex-row overflow-y-scroll flex-shrink-0 border-4 border-decoration-bg scrollbar-hide'>
                
                {Match(100000, 'Decebal', 'Defeat', loss)}
                {Match(149, 'Ghiu', 'Victory', win)}
                {Match(169, 'Boicea', 'Defeat', loss)}
                {Match(140, 'HeHeByeBoy', 'Victory', win)}
                {Match(130, 'Ardeleanu', 'Victory', win)}
                {Match(120, 'Iohannis', 'Victory', win)}
                {Match(100, 'Popcorn', 'Defeat', win)}
                {Match(100000, 'Decebal', 'Defeat', loss)}
                {Match(149, 'Ghiu', 'Victory', win)}
                {Match(169, 'Boicea', 'Defeat', loss)}
                {Match(140, 'HeHeByeBoy', 'Victory', win)}
                {Match(130, 'Ardeleanu', 'Victory', win)}
                {Match(120, 'Iohannis', 'Victory', win)}
                {Match(100, 'Popcorn', 'Defeat', win)}
                        
              </div>
            </div>
          </div> 
        </div>
    
        
      );

  return screen;
}

export default Profile;