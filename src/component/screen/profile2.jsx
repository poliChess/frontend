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
        text={`${percentage}%`}
        strokeWidth={5}
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
    <div className={result === 'Victory' ? 'bg-green-600 flex mt-4 rounded-md' : 'bg-red-600 flex mt-4 rounded-md'}>
            <div className='flex-grow text-center self-center'>
            {Math.floor(time/60)}:{time%60}
            </div>

                
            <div className=''>
              <img src={result === 'Victory' ? win : loss} height="80px" width="80px"/>
            </div>

            <div className=' flex-grow text-center self-center'>
              {enemy}
            </div>   

            
    </div>
  );
}

const wins = 15;
const losses = 5;
function Profile2() {

  const screen = (
    <div className="bg-orange-600 p-8 m-6">
        {/* <Title/> */}
        
        <div className='bg-red-600 m-6 flex'> 
        
            <div className='self-center'>
                <img
                className="m-auto"
                src={avatar}
                height="200px"
                width="200px"
                border="1px"
                />
            </div>

            <div className='bg-blue-600 flex items-center flex-grow m-2'>
                <div className='bg-green-600 flex-row'>
                    <div>
                        <strong>Faraonul</strong>
                    </div>
                    <div>
                        faraonul@piramide.com
                    </div>
                </div>
            </div>

            <div className='w-56 self-center'>
                {ProgressCircle(70)}
            </div>
              
        </div> 

          
        <div className="bg-pink-600 flex flex-grow flex-col items-center text-white m-24">

            <div className='flex-grow flex-shrink-0'>
                <div className='bg-transparent rounded-full flex flex-grow'>
                    <div className='bg-blue-500 flex-grow text-center rounded-tl-full'>
                        Played: 15
                    </div>
                
                    <div className='bg-blue-500 flex-grow text-center rounded-tr-full'>
                        Won: 10
                    </div>     
                </div>

                <div className='bg-white h-96 flex-row overflow-y-scroll flex-shrink-0'>
            
                    {Match(189, 'Decebal', 'Defeat', loss)}
                    {Match(149, 'Ghiu', 'Victory', win)}
                    {Match(169, 'Boicea', 'Defeat', loss)}
                    {Match(140, 'HeHeByeBoy', 'Victory', win)}
                    {Match(130, 'Ardeleanu', 'Victory', win)}
                    {Match(120, 'Iohannis', 'Victory', win)}
                    {Match(100, 'Popcorn', 'Victory', win)}
                    
                </div>
          
            </div>
        </div>
        
    </div>
  );

  return screen;
}

export default Profile2;