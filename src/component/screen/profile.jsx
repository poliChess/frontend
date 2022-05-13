import queen from '../../pictures/logos/queen.png';
import google from '../../pictures/logos/google.png';
import avatar_bishop from '../../pictures/avatars/avatar_bishop.png';
import { useState } from 'react';


import Title from '../title';

import apiclient from '../../utils/apiclient.js';


/**
 * 
 * @param {int} time seconds elapsed
 * @param {String} enemy name of the enemy
 * @param {String} result Victory / Defeat
 * @returns 
 */
function Match(time, enemy, result) {

  const background = result == 'Victory' ? 'bg-green-600' : 'bg-red-600';
  return (<div className='bg-green-600 grid grid-cols-3 divide-3 justify-center'>
            <div>{result}
            {Math.floor(time/60)}:{time%60}</div>
            <img src={avatar_bishop}
              alt="User avatar" 
              className="rounded-full mt-40 ml-auto mr-auto mb-20"
              height="100px"
              width="100px"
              border="1px"/>
            <div>
              {enemy}
            </div>
          </div>
          );
}

const wins = 15;
const losses = 5;
function Profile() {

  const screen = (
      <div className="flex bg-white">
        <div className='bg-white flex flex-grow flex-col h-screen p-8 z-10 w-132'>
          <Title /> 

          <img src={avatar_bishop}
            alt="User avatar" 
            className="rounded-full mt-40 ml-auto mr-auto mb-20"
            height="100px"
            width="100px"
            border="1px"/>

          <div className='bg-white flex-row text-white'>
              <div className='grid grid-cols-2 divide-2 justify-center mb-10 '>
                <div className='bg-blue-600 flex items-center justify-center text-center h-10 '>Mail</div>
                <div className='bg-purple-600 flex items-center justify-center text-center h-10'>tudor.hermenean@gmail.com</div>
              </div>
              <div className='grid grid-cols-2 divide-2 justify-center mb-10'>
                <div className='bg-blue-600 flex items-center justify-center text-center h-10'>Username</div>
                <div className='bg-purple-600 flex items-center justify-center text-center h-10'>tudiXX</div>
              </div>
              <div className='grid grid-cols-2 divide-2 justify-center mb-10'>
                <div className='bg-blue-600 flex items-center justify-center text-center h-10'>Matches</div>
                <div className='bg-purple-600 flex items-center justify-center text-center h-10'>20</div>
              </div>
              <div className='grid grid-cols-2 divide-2 justify-center'>
                <div className='bg-blue-600 flex items-center justify-center text-center h-10'>Rating</div>
                <div className='bg-purple-600 flex items-center justify-center text-center h-10'>xxx</div>
              </div>
          </div>
          
        </div>
        <div className="bg-decoration-bg flex flex-grow flex-col basis-[40%] items-center text-white">
          <div className='bg-gray-400 flex-col items-center justify-center mt-16'>
              <div className='pt-5 pb-2 px-32'>Match History</div>
              <div className='grid grid-cols-2 divide-2 justify-center'>
                <div className='flex items-center justify-center text-center h-10 '>Won: {wins}</div>
                <div className='flex items-center justify-center text-center h-10'>Lost: {losses}</div>
              </div>
          </div>
          {Match(189, 'Enemy1', 'Victory')}
          
        </div>
    </div>
  );

  return screen;
}

export default Profile;