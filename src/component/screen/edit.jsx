import queen from '../../pictures/logos/queen.png';
import google from '../../pictures/logos/google.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Decoration from '../decoration';
import Title from '../title';

import apiclient from '../../utils/apiclient.js';

function EditUsername() {

    const [userData, setUserData] = useState({ newUsername: '', password: '' });
    const [message, setMessage] = useState({ text: '', color: 'black' });
    const navigate = useNavigate();

    const handleChange = async () => {
        if (!userData.newUsername || !userData.password) {
        setMessage({ text: 'Complete all fields!', color: 'red' })
        return;
        }

        const res = await apiclient.change(userData);

        if (res.success) {
        setMessage({ text: 'Changes applied!', color: 'black' })
        setTimeout(() => navigate('/'), 500);
        } else {
        setMessage({ text: res.message, color: 'red' })
        }
    }

    const screen = (
        <div className='bg-white flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132 relative'>
          <Title /> 
    
          <img
            className='m-8 hover:scale-125 transition-all'
            src={queen}
            height='80px'
            width='80px'
            border='1px'
          />
    
          <input
            className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                       transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
            id='password'
            type='password'
            placeholder='Password'
            value={userData.password}
            onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
          />
    
          <input
            className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                       transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
            id='username'
            type='text'
            placeholder='New Username'
            value={userData.newUsername}
            onChange={(e) => setUserData((prev) => ({ ...prev, newUsername: e.target.value }))}
          />
    
          <button
            className='bg-secondary-color text-white h-10 w-32 mb-6 rounded-full
                       hover:scale-110 focus:scale-110 transition-all'
            onClick={handleChange}
          >
            Apply
          </button>
    
          <h3 className='m-10 h-12 max-h-12 max-w-50' style={{color:message.color}}> {message.text} </h3>
        </div>
      );
    
      return Decoration(screen);
}

function EditMail() {

    const [userData, setUserData] = useState({ newMail: '', password: '' });
    const [message, setMessage] = useState({ text: '', color: 'black' });
    const navigate = useNavigate();

    const handleChange = async () => {
        if (!userData.newMail || !userData.password) {
        setMessage({ text: 'Complete all fields!', color: 'red' })
        return;
        }

        const res = await apiclient.change(userData);

        if (res.success) {
        setMessage({ text: 'Changes applied!', color: 'black' })
        setTimeout(() => navigate('/'), 500);
        } else {
        setMessage({ text: res.message, color: 'red' })
        }
    }

    const screen = (
        <div className='bg-white flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132 relative'>
          <Title /> 
    
          <img
            className='m-8 hover:scale-125 transition-all'
            src={queen}
            height='80px'
            width='80px'
            border='1px'
          />
    
          <input
            className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                       transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
            id='password'
            type='password'
            placeholder='Password'
            value={userData.password}
            onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
          />
    
          <input
            className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                       transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
            id='newMail'
            type='text'
            placeholder='New Mail'
            value={userData.newMail}
            onChange={(e) => setUserData((prev) => ({ ...prev, newMail: e.target.value }))}
          />
    
          <button
            className='bg-secondary-color text-white h-10 w-32 mb-6 rounded-full
                       hover:scale-110 focus:scale-110 transition-all'
            onClick={handleChange}
          >
            Apply
          </button>
    
          <h3 className='m-10 h-12 max-h-12 max-w-50' style={{color:message.color}}> {message.text} </h3>
        </div>
      );
    
      return Decoration(screen);
}

function EditPassword() {

    const [userData, setUserData] = useState({ newPassword: '', password: '' });
    const [message, setMessage] = useState({ text: '', color: 'black' });
    const navigate = useNavigate();

    const handleChange = async () => {
        if (!userData.newPassword || !userData.password) {
        setMessage({ text: 'Complete all fields!', color: 'red' })
        return;
        }

        const res = await apiclient.change(userData);

        if (res.success) {
        setMessage({ text: 'Changes applied!', color: 'black' })
        setTimeout(() => navigate('/'), 500);
        } else {
        setMessage({ text: res.message, color: 'red' })
        }
    }

    const screen = (
        <div className='bg-white flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132 relative'>
          <Title /> 
    
          <img
            className='m-8 hover:scale-125 transition-all'
            src={queen}
            height='80px'
            width='80px'
            border='1px'
          />
    
          <input
            className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                       transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
            id='password'
            type='password'
            placeholder='Password'
            value={userData.password}
            onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
          />
    
          <input
            className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                       transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
            id='newPassword'
            type='password'
            placeholder='New Password'
            value={userData.newPassword}
            onChange={(e) => setUserData((prev) => ({ ...prev, newPassword: e.target.value }))}
          />
    
          <button
            className='bg-secondary-color text-white h-10 w-32 mb-6 rounded-full
                       hover:scale-110 focus:scale-110 transition-all'
            onClick={handleChange}
          >
            Apply
          </button>
    
          <h3 className='m-10 h-12 max-h-12 max-w-50' style={{color:message.color}}> {message.text} </h3>
        </div>
      );
    
      return Decoration(screen);
}

function Edit() {

    const location = useLocation();

    if(location.state.name === "username")
        return EditUsername();
    if(location.state.name === "mail")
        return EditMail();
    if(location.state.name === "password")
        return EditPassword();
  }

// function Edit() {

//   const location = useLocation();

//   const [userData, setUserData] = useState({ newMail: '', newUsername: '', newPassword: '', password: '' });
//   const [message, setMessage] = useState({ text: '', color: 'black' });
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     if (!userData.username) {
//       setMessage({ text: 'Complete all fields!', color: 'red' })
//       return;
//     }

//     const res = await apiclient.change(userData);

//     if (res.success) {
//       setMessage({ text: 'Changes applied!', color: 'black' })
//       setTimeout(() => navigate('/'), 500);
//     } else {
//       setMessage({ text: res.message, color: 'red' })
//     }
//   }

//   const screen = (
//     <div className='bg-white flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132 relative'>
//       <Title /> 

//       <img
//         className='m-8 hover:scale-125 transition-all'
//         src={queen}
//         height='80px'
//         width='80px'
//         border='1px'
//       />

//       <div>
//           {location.state.name}
//       </div>

//       if({location.state.name} === 'sebi')
//       <input
//         className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
//                    transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
//         id='username'
//         type='text'
//         placeholder='Password'
//         value={userData.password}
//         onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
//       />

//       <input
//         className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
//                    transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
//         id='username'
//         type='text'
//         placeholder='New Username'
//         value={userData.newUsername}
//         onChange={(e) => setUserData((prev) => ({ ...prev, newUsername: e.target.value }))}
//       />

//       <input
//         className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
//                    transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
//         id='username'
//         type='text'
//         placeholder='New Password'
//         value={userData.newPassword}
//         onChange={(e) => setUserData((prev) => ({ ...prev, newPassword: e.target.value }))}
//       />

//       <input
//         className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
//                    transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
//         id='username'
//         type='text'
//         placeholder='New Mail'
//         value={userData.newMail}
//         onChange={(e) => setUserData((prev) => ({ ...prev, newMail: e.target.value }))}
//       />

//       <button
//         className='bg-secondary-color text-white h-10 w-32 mb-6 rounded-full
//                    hover:scale-110 focus:scale-110 transition-all'
//         onClick={handleSubmit}
//       >
//         Apply
//       </button>

//       <h3 className='m-10 h-12 max-h-12 max-w-50' style={{color:message.color}}> {message.text} </h3>
//     </div>
//   );

//   return Decoration(screen);
// }

export default Edit;
