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
import { useNavigate } from 'react-router-dom';


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

    const navigate = useNavigate();
    const handleEdit = async (type) => {
      // navigate('/edit', { state: { id: 1, name: "sebi"}});

      // type = "username";
      // if(type === "username")
        navigate('/edit', { state: { id: 1, name: "username"}});

      // if(type === "mail")
      //   navigate('/edit', { state: { id: 1, name: "mail"}});

      // if(type === "password")
      //   navigate('/edit', { state: { id: 1, name: "password"}});
    }

    const handleEditUsername = async () => {
        navigate('/edit', { state: { id: 1, name: "username"}});
    }

    const handleEditPassword = async () => {
        navigate('/edit', { state: { id: 2, name: "password"}});
    }

    const handleEditMail = async () => {
        navigate('/edit', { state: { id: 3, name: "mail"}});
    }

    const handleEditAvatar = async () => {
      navigate('/edit', { state: { id: 4, name: "avatar"}});
    }

    const handleDeleteAccount = async () => {
      navigate('/edit', { state: { id: 5, name: "delete"}});
    }

    // console.log({user.username})

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

              <div className='hidden md:flex flex-grow self-center justify-end m-2'>
                <div className='flex'>

                  <div className='flex-row'>
                    
                    <div className='text-center mr-2 mb-16 font-mono font-bold text-green-600'>
                      5
                    </div>

                    <div className='text-center mr-2 mt-16 font-mono font-bold text-red-600'>
                      15
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