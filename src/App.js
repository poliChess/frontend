import Home from "./component/home";
import Login from "./component/login";
import Register from "./component/register";
import Play from "./component/play";
import Local from "./component/local"
import Game from "./component/game"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/play" element={<Play/>}/>
          <Route path="/local" element={<Local/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
