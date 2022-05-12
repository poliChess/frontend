import queen from '../../pictures/logos/queen.png';
import google from '../../pictures/logos/google.png';
import { useState } from 'react';

import Decoration from '../decoration';
import Title from '../title';

import apiclient from '../../utils/apiclient.js';

function Profile() {

  const screen = (
    <div className='bg-red-600 flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132'>
      <Title /> 

      <img
        className='mb-8'
        src={queen}
        height='80px'
        width='80px'
        border='1px'
      />

      <input
        className='bg-white text-black h-10 w-60 mb-6 rounded-full outline outline-button-1 outline-2
                   focus:outline-purple-600 focus:shadow-purple-600 
                   placeholder-gray-500 text-center'
        id='email'
        type='text'
        placeholder='Email'
      />

      <input
        className='bg-white text-black h-10 w-60 mb-6 rounded-full outline outline-button-1 outline-2
                   focus:outline-purple-600 focus:shadow-purple-600 
                   placeholder-gray-500 text-center'
        id='username'
        type='text'
        placeholder='Username'
      />

      <input
        className='bg-white text-black h-10 w-60 mb-6 rounded-full outline outline-button-1 outline-2
                   focus:outline-purple-600 focus:shadow-purple-600 
                   placeholder-gray-500 text-center'
        id='password'
        type='password'
        placeholder='Password'
      />

      <button
        className='bg-button-2 hover:bg-purple-600 text-white h-10 w-28 mb-6 rounded-full 
                   hover:shadow-purple-600 shadow-button-2 shadow-md'
      >
        Sign Up
      </button>

      <a className='mt-8' href='www.google.com'>
        <img src={google} height='60px' width='60px' border='1px' />
      </a>

    </div>
  );

  return screen;
}

export default Profile;