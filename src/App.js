import Home from "./component/screen/home";
import Login from "./component/screen/login";
import Register from "./component/screen/register";
import LocalGame from "./component/screen/localGame"
import OnlineGame from "./component/screen/onlineGame"
import Profile from "./component/screen/profile"
import Profile2 from "./component/screen/profile2"
import Profile3 from "./component/screen/profile3"
import Loading from "./component/screen/loading";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/game" element={<OnlineGame/>}/>
          <Route path="/local" element={<LocalGame/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile2" element={<Profile2/>}/>
          <Route path="/profile3" element={<Profile3/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
