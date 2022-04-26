import horse from "../horse.png"
import queen from "../queen.png"
import pieces_bg from "../pieces2_bg.png"
import { Link } from "react-router-dom";

function Play() {

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

                <Link to="/game">
                    <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">Local game</button>
                </Link>

                <Link to="/game">
                    <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">Online game</button>
                </Link>

                <Link to="/game">
                    <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">Versus AI</button>
                </Link>

            </div>

            <div className="bg-right-bg flex-row flex-grow hidden md:flex basis-[40%]">

                <div>

                    {/* TODO
                        Div_1 : Make the text look better.
                    */}

                    <div className="bg-right-bg text-4xl w-72 ml-20 mt-20">
                        " When you see a good move, look for a better one "
                    </div>

                    <div className="opacity-20">
                        <img className="h-full" src={pieces_bg} alt="Horse background" style={{position: "fixed", right: "-12em", bottom: "-6em"}}/>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Play;