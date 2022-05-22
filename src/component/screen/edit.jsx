import queen from '../../pictures/logos/queen.png';
import google from '../../pictures/logos/google.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../state/userSlice';

import Decoration from '../decoration';
import Title from '../title';

import apiclient from '../../utils/apiclient.js';

function EditUsername() {

    const user = useSelector(state => state.user.info);

    const [credentials, setCredentials] = useState( { username: user.username, password: ''});
    const [userData, setUserData] = useState({ username: ''});
    const [message, setMessage] = useState({ text: '', color: 'black' });
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = async () => {
        if (!userData.username || !credentials.password) {
        setMessage({ text: 'Complete all fields!', color: 'red' })
        return;
        }

        const res1 = await apiclient.login(credentials);

        if(res1.success) {
            console.log('AM INTRAT 1')
            const res2 = await apiclient.updateUser(userData);
            console.log('AM INTRAT 2')

            if(res2.success) {
                setMessage({ text: 'Changes applied!', color: 'black' })
                dispatch(setLoggedIn(res2));
                setTimeout(() => navigate('/profile'), 500);
            } else {
                setMessage({ text: res2.message, color: 'red' })
            }

        } else {
            setMessage({ text: res1.message, color: 'red' })
        }

        console.log('sal')

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
            value={credentials.password}
            onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
          />
    
          <input
            className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                       transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
            id='username'
            type='text'
            placeholder='New Username'
            value={userData.username}
            onChange={(e) => setUserData((prev) => ({ ...prev, username: e.target.value }))}
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

    const user = useSelector(state => state.user.info);

    const [credentials, setCredentials] = useState( { username: user.username, password: ''});

    const [userData, setUserData] = useState({ mail: '' });
    const [message, setMessage] = useState({ text: '', color: 'black' });
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = async () => {
        if (!userData.mail || !credentials.password) {
        setMessage({ text: 'Complete all fields!', color: 'red' })
        return;
        }

        const res1 = await apiclient.login(credentials);

        if(res1.success) {
            console.log('AM INTRAT 1')
            const res2 = await apiclient.updateUser(userData);
            console.log('AM INTRAT 2')

            if(res2.success) {
                setMessage({ text: 'Changes applied!', color: 'black' })
                dispatch(setLoggedIn(res2))
                setTimeout(() => navigate('/profile'), 500)
            } else {
                setMessage({ text: res2.message, color: 'red' })
            }

        } else {
            setMessage({ text: res1.message, color: 'red' })
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
            value={credentials.password}
            onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
          />
    
          <input
            className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                       transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
            id='newMail'
            type='text'
            placeholder='New Mail'
            value={userData.mail}
            onChange={(e) => setUserData((prev) => ({ ...prev, mail: e.target.value }))}
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

    const user = useSelector(state => state.user.info);

    const [credentials, setCredentials] = useState( { username: user.username, password: ''});

    const [userData, setUserData] = useState({ password: '' });
    const [message, setMessage] = useState({ text: '', color: 'black' });
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = async () => {
        if (!userData.password || !credentials.password) {
        setMessage({ text: 'Complete all fields!', color: 'red' })
        return;
        }

        const res1 = await apiclient.login(credentials);

        if(res1.success) {
            console.log('AM INTRAT 1')
            const res2 = await apiclient.updateUser(userData);
            console.log('AM INTRAT 2')

            if(res2.success) {
                setMessage({ text: 'Changes applied!', color: 'black' });
                dispatch(setLoggedIn(res2));
                setTimeout(() => navigate('/login'), 500);
            } else {
                setMessage({ text: res2.message, color: 'red' });
            }

        } else {
            setMessage({ text: res1.message, color: 'red' });
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
            value={credentials.password}
            onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
          />
    
          <input
            className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                       transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
            id='newPassword'
            type='password'
            placeholder='New Password'
            value={userData.password}
            onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
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

function DeleteAccount() {

  const user = useSelector(state => state.user.info);

  const [credentials, setCredentials] = useState( { username: user.username, password: ''});

  const [message, setMessage] = useState({ text: '', color: 'black' });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = async () => {
      if (!credentials.password) {
      setMessage({ text: 'Complete all fields!', color: 'red' })
      return;
      }

      const res1 = await apiclient.login(credentials);

      if(res1.success) {
          console.log('AM INTRAT 1')
          // oare ce se face logout automat??
          const res2 = await apiclient.deleteUser();
          console.log('AM INTRAT 2')

          if(res2.success) {
              setMessage({ text: 'Account deleted!', color: 'black' });
              dispatch(setLoggedIn(res2));
              setTimeout(() => navigate('/'), 500);
          } else {
              setMessage({ text: res2.message, color: 'red' });
          }

      } else {
          setMessage({ text: res1.message, color: 'red' });
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
          value={credentials.password}
          onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
        />
  
        <button
          className='bg-secondary-color text-white h-10 w-32 mb-6 rounded-full
                     hover:scale-110 focus:scale-110 transition-all'
          onClick={handleChange}
        >
          Delete Account
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
    if(location.state.name === "avatar")
        return EditPassword();
    if(location.state.name === "delete")
        return DeleteAccount();
  }


export default Edit;
