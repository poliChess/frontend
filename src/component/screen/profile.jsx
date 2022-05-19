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
    <div className={result === 'Victory' ? 'bg-green-600 flex mt-4 rounded-md' : 'bg-red-800 flex mt-4 rounded-md'}>
            <div className='w-1/3 text-center self-center text-white'>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            </div>

                
            <div className='w-1/3'>
              <img className='m-auto' src={result === 'Victory' ? win : loss} height="80px" width="80px"/>
            </div>

            <div className='w-1/3 text-center self-center text-white'>
              {enemy}
            </div>   

            
    </div>
  );
}

const wins = 15;
const losses = 5;
function Profile() {

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
    
              <div className='flex items-center flex-grow m-2'>
                <div className='flex-row'>
                  <div>
                    <strong>Faraonul</strong>
                  </div>
                  <div>
                    faraon@piramide.com
                  </div>
                </div>
              </div>
    
              <div className='self-center w-48'>
                {ProgressCircle(70)}
              </div>
            </div>
    
            <div className='mt-24'>
              <div className='bg-transparent rounded-full flex flex-grow'>
                <div className='bg-secondary-color text-white w-1/3 text-center rounded-tl-full'>
                  Won: 10
                </div>
                    
                <div className='bg-secondary-color text-white w-1/3 text-center'>
                  Played: 15
                </div>
    
                <div className='bg-secondary-color text-white w-1/3 text-center rounded-tr-full'>
                  Lost: 5
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