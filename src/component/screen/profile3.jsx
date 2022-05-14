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
function Profile3() {

  const screen = (
    <div className="bg-red-600 flex-row flex-grow justify-center items-center h-screen p-8 z-10 w-132 relative">
        
        <div className='bg-green-600 h-32 flex-row overflow-y-scroll'>
            <div className='bg-yellow-600'>
                adsda
            </div>
            <div className='bg-purple-600'>
                adsda
            </div>
            <div className='bg-blue-600'>
                adsda
            </div>
            <div className='bg-yellow-600'>
                adsda
            </div>
            <div className='bg-purple-600'>
                adsda
            </div>
            <div className='bg-blue-600'>
                adsda
            </div>
            <div className='bg-yellow-600'>
                adsda
            </div>
            <div className='bg-purple-600'>
                adsda
            </div>
            <div className='bg-blue-600'>
                adsda
            </div>
        </div>
    </div>
  );

  return screen;
}

export default Profile3;