import Home from "./component/screen/home";
import Login from "./component/screen/login";
import Register from "./component/screen/register";
import Game from "./component/screen/game"
import Profile from "./component/screen/profile"
import Profile2 from "./component/screen/profile2"
import Profile3 from "./component/screen/profile3"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile2" element={<Profile2/>}/>
          <Route path="/profile3" element={<Profile3/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
