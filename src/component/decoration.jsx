import horse_bg from "../pictures/backgrounds/horse_bg.png";
import king_bg from "../pictures/backgrounds/king_bg.png";
import pieces1_bg from "../pictures/backgrounds/pieces1_bg.png";
import pieces2_bg from "../pictures/backgrounds/pieces2_bg.png";


function Decoration(screen) {

    var images = [], quotes = [], index_quote, index_image = 0;

images[0] = horse_bg;
images[1] = king_bg;
images[2] = pieces1_bg;

index_image = Math.floor(Math.random() * images.length);

quotes[0] = '" Chess is the gymnasium of the mind "';
quotes[1] = '" Chess is beautiful enough to waste your life for "';
quotes[2] = '" Nobody ever won a chess game by resigning "';

index_quote = Math.floor(Math.random() * quotes.length);

  return (
    <div className="flex bg-white">

      {screen}

      <div className="bg-right-bg flex-row flex-grow hidden md:flex basis-[40%]">
        <div>
          {/* TODO
                        Div_1 : Make the text look better.
                    */}

          <div className="bg-right-bg text-4xl w-72 ml-20 mt-20">
            
            {quotes[index_quote]}
          </div>

          <div className="opacity-20">
            <img
              className="h-full"
              src={images[index_image]}
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
