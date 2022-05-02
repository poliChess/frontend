import horse_bg from "../pictures/backgrounds/horse_bg.png";
import { Link } from "react-router-dom";

function Decoration(screen) {
  return (
    <div className="flex bg-white">
        
      {screen}

      <div className="bg-right-bg flex-row flex-grow hidden md:flex basis-[40%]">
        <div>
          {/* TODO
                        Div_1 : Make the text look better.
                    */}

          <div className="bg-right-bg text-4xl w-72 ml-20 mt-20">
            " Chess is the gymnasium of the mind "
          </div>

          <div className="opacity-20">
            <img
              className="h-full"
              src={horse_bg}
              alt="Horse background"
              style={{ position: "fixed", right: "-12em", bottom: "-6em" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decoration;
