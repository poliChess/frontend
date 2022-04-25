import horse from "../horse.png"
import queen from "../queen.png"
import horse_bg from "../horse_bg.png"
import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="flex bg-white">
                        
            <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen pb-8 pt-8">

                <div style={{position: "fixed", left: "1em", top: "1em"}}>

                    <Link to="/">
                        <div>
                            <div style={{float: "left"}}><img src={horse} height="20px" width="20px" border="1px"/></div>
                            Poli<strong>Chess</strong>
                        </div>
                    </Link>

                </div>

                <img className="mb-8" src={queen} height="80px" width="80px" border="1px"/>
                
                <Link to="/login">
                    <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">Login</button>
                </Link>

                <Link to="/register">
                    <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">Register</button>
                </Link>

                <Link to="/play">
                    <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">Guest</button>
                </Link>

            </div>

            <div className="bg-right-bg flex-row flex-grow hidden md:flex basis-[40%]">

                <div>

                    {/* TODO
                        Div_1 : Make the text look better.
                        Div_2 : Fix the overflow generated here when resizing the windows.
                    */}

                    <div className="bg-right-bg text-4xl w-72 ml-20 mt-20">
                        " Chess is the gymnasium of the mind "
                    </div>

                    <div className="opacity-20">
                        <img className="h-full" src={horse_bg} alt="Horse background" style={{position: "fixed", right: "-12em", bottom: "-6em"}}/>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;