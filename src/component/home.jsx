function Home() {

    return (
        <div className="flex bg-white">

            <div className="bg-right-bg">
                Poli<strong>Chess</strong>
            </div>
                        
            <div className="bg-white flex flex-grow flex-col justify-center items-center h-screen">

                <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-4 rounded-full shadow-md shadow-button-1">Login</button>

                <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-4 rounded-full shadow-md shadow-button-1">Register</button>

                <button className="bg-button-1 hover:bg-purple-600 text-white h-10 w-60 mb-4 rounded-full shadow-md shadow-button-1">Guest</button>
                            
            </div>

            <div className="bg-right-bg flex-row flex-grow hidden md:flex">

                <div>
                    Citat inspirational
                </div>

                <div className="bg-[url('https://cdn-icons-png.flaticon.com/512/1322/1322264.png')] w-full h-full bg-no-repeat bg-cover opacity-20">

                </div>

            </div>

        </div>
    );
}

export default Home;