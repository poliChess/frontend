import Home from "./component/screen/home";
import Login from "./component/screen/login";
import Register from "./component/screen/register";
import Play from "./component/screen/play";
import Game from "./component/screen/game"
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
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
