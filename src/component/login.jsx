import horse from "../horse.png"

function Login() {

    return (
        <div className="flex bg-white">

            <div className="bg-right-bg">
                
                <div>
                    <p style={{float: "left"}}><img src={horse} height="20px" width="20px" border="1px"/></p>
                    Poli<strong>Chess</strong>
                </div>
                
            </div>
                        
            <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen">

                <input className="bg-button-1 text-white h-10 w-60 mb-4 rounded-full leading-tight focus:outline-none focus:shadow-outline placeholder-white text-center" id="username" type="text" placeholder="Username"/>

                <input className="bg-button-1 text-white h-10 w-60 mb-4 rounded-full leading-tight focus:outline-none focus:shadow-outline placeholder-white text-center" id="password" type="text" placeholder="Password"/>

                <button className="bg-button-2 hover:bg-purple-600 text-white h-10 w-28 mb-4 rounded-full shadow-md hover:shadow-purple-600 shadow-button-2">Sign In</button>
        
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

export default Login;