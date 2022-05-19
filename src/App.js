import Home from "./component/screen/home";
import Login from "./component/screen/login";
import Register from "./component/screen/register";
import LocalGame from "./component/screen/localGame"
import OnlineGame from "./component/screen/onlineGame"
import Profile from "./component/screen/profile"
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
