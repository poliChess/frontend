import queen from '../../pictures/logos/queen.png';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';

import { setInfo, clear } from '../../state/userSlice';
import apiclient, { getAvatar } from '../../utils/apiclient.js';
import Decoration from '../decoration';
import Title from '../title';

function EditUsername() {
  const user = useSelector(state => state.user);

  const [credentials, setCredentials] = useState( { username: user.info.username, password: ''} );
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

    if (res1.success) {
        const res2 = await apiclient.updateUser(userData);

        if (res2.success) {
          setMessage({ text: 'Changes applied!', color: 'black' })
          dispatch(setInfo({ user: res2.user }));
          setTimeout(() => navigate('/profile'), 500);
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
        alt=""
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
      <button className="bg-red-600 text-white h-8 w-24 mb-6 rounded-full
                         hover:scale-105 focus:scale-110 transition-all"
              onClick={() => navigate('/profile')}>
        Back
      </button>

      <h3 className='m-10 h-12 max-h-12 max-w-50' style={{color:message.color}}> {message.text} </h3>
    </div>
  );

  return Decoration(screen);
}

function EditMail() {
  const user = useSelector(state => state.user.info);

  const [credentials, setCredentials] = useState( { username: user.username, password: '' });
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

    if (res1.success) {
        const res2 = await apiclient.updateUser(userData);

        if (res2.success) {
          setMessage({ text: 'Changes applied!', color: 'black' })
          dispatch(setInfo({ user: res2.user }));
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
        alt=""
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
      <button className="bg-red-600 text-white h-8 w-24 mb-6 rounded-full
                         hover:scale-105 focus:scale-110 transition-all"
              onClick={() => navigate('/profile')}>
        Back
      </button>

      <h3 className='m-10 h-12 max-h-12 max-w-50' style={{color:message.color}}> {message.text} </h3>
    </div>
  );

  return Decoration(screen);
}

function EditPassword() {
  const user = useSelector(state => state.user.info);

  const [credentials, setCredentials] = useState( { username: user.username, password: '' });
  const [userData, setUserData] = useState({ password: '' });
  const [security, setSecurity] = useState({ password: '' })
  const [message, setMessage] = useState({ text: '', color: 'black' });

  const navigate = useNavigate();

  const handleChange = async () => {
      if (!userData.password || !credentials.password) {
        setMessage({ text: 'Complete all fields!', color: 'red' })
        return;
      }

      if (userData.password !== security.password) {
        setMessage({ text: 'Password mismatch!', color: 'red'})
        return;
      }

      const res1 = await apiclient.login(credentials);

      if (res1.success) {
          const res2 = await apiclient.updateUser(userData);

          if (res2.success) {
            setMessage({ text: 'Changes applied!', color: 'black' });
            setTimeout(() => navigate('/profile'), 500);
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
        alt=""
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

      <input
        className='bg-white text-black text-lg h-11 w-70 mb-6 outline outline-main-color outline-2 focus:scale-105
                  transition-all focus:outline-secondary-color placeholder-gray-500 rounded-full text-center'
        id='confirmedPassword'
        type='password'
        placeholder='Confirme New Password'
        value={security.password}
        onChange={(e) => setSecurity((prev) => ({ ...prev, password: e.target.value }))}
      />

      <button
        className='bg-secondary-color text-white h-10 w-32 mb-6 rounded-full
                   hover:scale-110 focus:scale-110 transition-all'
        onClick={handleChange}
      >
        Apply
      </button>
      <button className="bg-red-600 text-white h-8 w-24 mb-6 rounded-full
                         hover:scale-105 focus:scale-110 transition-all"
              onClick={() => navigate('/profile')}>
        Back
      </button>

      <h3 className='m-10 h-12 max-h-12 max-w-50' style={{color:message.color}}> {message.text} </h3>
    </div>
  );

  return Decoration(screen);
}

const avatars = [
  'pawn1', 'pawn2', 'pawn3', 'bishop1', 'knight1', 'knight2', 'king1', 'king2', 'rook1',
  'queen1', 'queen2', 'queen3' 
]

function EditAvatar() {
  const user = useSelector(state => state.user.info);
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState({ text: '', color: 'black' });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = async () => {
    if (selected !== user.avatar) {
      const res = await apiclient.updateUser({ avatar: selected });

      if (res.success) {
        setMessage({ text: 'Avatar Selected!', color: 'black' });
        dispatch(setInfo({ user: res.user }));
        setTimeout(() => navigate('/profile'), 500);
      } else {
        setMessage({ text: res.message, color: 'red' });
      }
    } else {
      navigate('/profile');
    }
  }

  const screen = (
    <div className='bg-white flex flex-grow flex-col justify-center items-center h-screen p-8 z-10 w-132 relative'>
      <Title /> 

      <img
        className='m-12'
        src={ selected ? getAvatar(selected) : getAvatar(user.avatar) }
        alt=""
        height='120px'
        width='120px'
        border='1px'
      />

      <section class="overflow-hidden border-4 border-secondary-color rounded-xl">
        <div class="container p-5 mx-auto w-96">
          <div class="flex flex-wrap">
            {
              avatars.map(avatar => 
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-3">
                    <img alt={avatar} src={getAvatar(avatar)} onClick={() => setSelected(avatar)}
                      class="block object-cover object-center w-full h-full rounded-2xl hover:scale-110 transition-all"/> 
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>

      <button className='bg-secondary-color text-white h-10 w-32 mt-12 mb-6 rounded-full
                         hover:scale-110 focus:scale-110 transition-all'
        onClick={handleChange}>
        Select 
      </button>
      <button className="bg-red-600 text-white h-8 w-24 mb-6 rounded-full
                         hover:scale-105 focus:scale-110 transition-all"
              onClick={() => navigate('/profile')}>
        Back
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

    if (res1.success) {
        const res2 = await apiclient.deleteUser();

        if (res2.success) {
          setMessage({ text: 'Account deleted!', color: 'black' });
          dispatch(clear());
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
        alt=""
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
      <button className="bg-red-600 text-white h-8 w-24 mb-6 rounded-full
                         hover:scale-105 focus:scale-110 transition-all"
              onClick={() => navigate('/profile')}>
        Back
      </button>

      <h3 className='m-10 h-12 max-h-12 max-w-50' style={{color:message.color}}> {message.text} </h3>
    </div>
  );

  return Decoration(screen);
}

function Edit() {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (!user.loggedIn) navigate('/');
    if (!location.state) navigate('/');
  });

  if (location.state && location.state.name === "username")
      return EditUsername();
  if (location.state && location.state.name === "mail")
      return EditMail();
  if (location.state && location.state.name === "password")
      return EditPassword();
  if (location.state && location.state.name === "avatar")
      return EditAvatar();

  if (location.state && location.state.name === "delete")
      return DeleteAccount();
}

export default Edit;
