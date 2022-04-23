import horse from "../horse.png"
import queen from "../queen.png"

function Home() {

    return (
        <div className="flex bg-white">

            <div className="bg-right-bg">
                
                <div className="m-2">
                    <p style={{float: "left"}}><img src={horse} height="20px" width="20px" border="1px"/></p>
                    Poli<strong>Chess</strong>
                </div>

            </div>
                        
            <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen">

                <img className="mb-8" src={queen} height="80px" width="80px" border="1px"/>

                <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">Login</button>

                <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">Register</button>

                <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-6 rounded-full shadow-lg hover:shadow-purple-600 shadow-button-1">Guest</button>
                            
            </div>

            <div className="bg-right-bg flex-row flex-grow hidden md:flex">

                <div className="bg-right-bg">
                    <p className="">
                    "Chess is the gymnasium of the mind"
                    </p>
                </div>

                <div className="bg-[url('https://cdn-icons-png.flaticon.com/512/1322/1322264.png')] w-full h-full bg-no-repeat bg-cover opacity-20">

                </div>

            </div>

        </div>
    );
}

export default Home;