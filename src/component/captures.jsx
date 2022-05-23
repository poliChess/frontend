import React, { useState } from "react";

import pieces from "../utils/pieces";

function Captures({golden, color}) {

    return (
        <div className="flex-row items-center bg-white flex-grow rounded-2xl border-b-black border-t-black border-4 shadow-xl shadow-button-1 hover:shadow-purple-600 text-center">
        {golden.map((item) => (item.color === color) 
            ? (<div key={(item.color, item.type)} className="flex justify-center">
                    <div>
                        <img
                            className=""
                            src={pieces[item.color][item.type]}
                            height="50px"
                            width="50px"
                            border="1px"
                        />
                    </div>
                    <div className="self-center">
                        X {item.count}
                    </div>
                </div>)
            : null
        )}
        </div>
    );
}

export default Captures;
