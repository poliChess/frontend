import horse from "../horse.png"
import queen from "../queen.png"
import google from "../google.png"
import pieces_bg from "../pieces1_bg.png"
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const [userData, setUserData] = useState({username: "", password: ""});

    return (
        <div className="flex bg-white">
                        
            <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen pb-8 pt-8 z-10">

                <div style={{position: "fixed", left: "1em", top: "1em"}}>

                    <Link to="/">
                        <div>
                            <div style={{float: "left"}}><img src={horse} height="20px" width="20px" border="1px"/></div>
                            Poli<strong>Chess</strong>
                        </div>
                    </Link>

                </div>

                <img className="mb-8" src={queen} height="80px" width="80px" border="1px"/>

                <input className="bg-button-1 text-white h-10 w-60 mb-6 rounded-full 
                focus:outline outline-purple-600 focus:shadow-purple-600 placeholder-white 
                text-center shadow-lg shadow-button-1" 
                id="username" type="text" placeholder="Username" 
                value={userData.username} onChange={(e) => setUserData(prev => ({...prev, username: e.target.value}))}/>

                <input className="bg-button-1 text-white h-10 w-60 mb-6 rounded-full 
                focus:outline outline-purple-600 focus:shadow-purple-600 placeholder-white 
                text-center shadow-lg shadow-button-1" 
                id="password" type="password" placeholder="Password" 
                value={userData.password} onChange={(e) => setUserData(prev => ({...prev, password: e.target.value}))}/>

                <Link to="/play">
                    <button className="bg-button-2 hover:bg-purple-600 text-white h-10 w-28 mb-6 rounded-full 
                    shadow-lg hover:shadow-purple-600 shadow-button-2" 
                    onClick={() => console.log(userData)}>Sign In</button>
                </Link>

                <a className="mt-8" href="www.google.com">
                    <img src={google} height="80px" width="80px" border="1px"/>
                </a>
        
            </div>

            <div className="bg-right-bg flex-row flex-grow hidden md:flex basis-[40%]">

                <div>

                    {/* TODO
                        Div_1 : Make the text look better.
                        Div_2 : Fix the overflow generated here when resizing the windows.
                    */}

                    <div className="bg-right-bg text-4xl w-72 ml-20 mt-20">
                        " Chess is beautiful enough to waste your life for "
                    </div>

                    <div className="opacity-20">
                        <img className="h-full" src={pieces_bg} alt="Horse background" style={{position: "fixed", right: "-12em", bottom: "-6em"}}/>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;