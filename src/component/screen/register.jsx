import queen from '../../pictures/logos/queen.png';
import google from '../../pictures/logos/google.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Decoration from '../decoration';
import Title from '../title';

import apiclient from '../../utils/apiclient.js';

function Register() {
  const [userData, setUserData] = useState({ mail: '', username: '', password: '' });
  const [message, setMessage] = useState({ text: '', color: 'black' });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!userData.mail || !userData.username || !userData.password) {
      setMessage({ text: 'Complete all fields!', color: 'red' })
      return;
    }

    const res = await apiclient.register(userData);

    if (res.success) {
      setMessage({ text: 'Register Successful', color: 'black' })
      setTimeout(() => navigate('/login'), 500);
    } else {
      setMessage({ text: res.message, color: 'red' })
    }
  }

  const screen = (
    <div className='bg-white flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132 relative'>
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
        value={userData.mail}
        onChange={(e) => setUserData((prev) => ({ ...prev, mail: e.target.value }))}
      />

      <input
        className='bg-white text-black h-10 w-60 mb-6 rounded-full outline outline-button-1 outline-2
                   focus:outline-purple-600 focus:shadow-purple-600 
                   placeholder-gray-500 text-center'
        id='username'
        type='text'
        placeholder='Username'
        value={userData.username}
        onChange={(e) => setUserData((prev) => ({ ...prev, username: e.target.value }))}
      />

      <input
        className='bg-white text-black h-10 w-60 mb-6 rounded-full outline outline-button-1 outline-2
                   focus:outline-purple-600 focus:shadow-purple-600 
                   placeholder-gray-500 text-center'
        id='password'
        type='password'
        placeholder='Password'
        value={userData.password}
        onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
      />

      <button
        className='bg-button-2 hover:bg-purple-600 text-white h-10 w-28 mb-6 rounded-full 
                   hover:shadow-purple-600 shadow-button-2 shadow-md'
        onClick={handleSubmit}
      >
        Sign Up
      </button>

      <a className='mt-8' href='www.google.com'>
        <img src={google} height='60px' width='60px' border='1px' />
      </a>

      <h3 className='m-10 h-12 max-h-12 max-w-50' style={{color:message.color}}> {message.text} </h3>
    </div>
  );

  return Decoration(screen);
}

export default Register;
