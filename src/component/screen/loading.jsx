import queen from "../../pictures/logos/queen.png";
import google from "../../pictures/logos/google.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setLoggedIn } from "../../state/userSlice";
import { useEffect } from "react";
import Stopwatch from "../Stopwatch";

import Decoration from "../decoration";
import Title from "../title";
import User from "../user";

import apiclient from "../../utils/apiclient";

function Loading() {

  const screen = (
    <div className="flex h-screen justify-center items-center">

        <div className="flex-row">

            <div className="text-center mb-16 font-mono font-bold text-4xl">
                <Stopwatch/>
            </div>

            <div className="flex">
                <div className="w-20 h-20 border-t-4 border-b-4 bg-secondary-color rounded-full animate-bounce"></div>

                <div className="w-20 h-20 ml-10 mr-10 border-t-4 border-b-4 bg-main-color rounded-full animate-bounce"></div>

                <div className="w-20 h-20 border-t-4 border-b-4 bg-secondary-color rounded-full animate-bounce"></div>
            </div>

            
            
        </div>
    </div>
  );

  return screen;

}

export default Loading;
