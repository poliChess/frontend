import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react";
import { gapi } from "gapi-script";

import Home from "./component/screen/home";
import Login from "./component/screen/login";
import Register from "./component/screen/register";
import LocalGame from "./component/screen/localGame";
import OnlineGame from "./component/screen/onlineGame";
import Profile from "./component/screen/profile";
import OtherProfile from "./component/screen/otherProfile";
import Edit from "./component/screen/edit";

export const googleClientID = '202173917816-q127ko40g6h9d2rvcsmjmdsj8kupmpro.apps.googleusercontent.com';

function App() {
  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        client_id: googleClientID,
        scope: ''
      })
    });
  });

  return (
    <div className="bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/game" element={<OnlineGame/>}/>
          <Route path="/local" element={<LocalGame/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile/:id" element={<OtherProfile/>}/>
          <Route path="/edit" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
