import React, { useState } from "react";

function Hero() {
  const [pageLoad, setPageLoad] = useState(false);
  window.addEventListener("load", () => setPageLoad(!pageLoad));
  return (
    <div className="w-full h-screen relative  bg-gradient-to-b from-orange-900 to-black md:from-black md:to-black flex justify-end">
      <img
        src="images\coffeeHeroImage.jpg"
        alt="coffeimage"
        className="object-contain md:visible collapse"
      />
      <div
        className={`absolute text-white inset-x-0 bottom-0 md:w-1/2 h-screen flex justify-center flex-col gap-3 items-center  transition-all duration-1000 ${
          !pageLoad ? "translate-y-0 opacity-100" : "translate-y-0 opacity-100"
        }`}
      >
        <img
          className="md:w-32 w-20 h-auto md-collapse"
          src="images\tea.png"
          alt="coffe"
        />
        <h1 className="font-serif md:text-3xl text-lg">greatest coffee</h1>
        <p className="w-1/2 font-serif text-sm md:text-base lg:text-lg text-center	">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis <span className="text-orange-700">484-426-2349 </span>
          exercitationem culpa nesciunt nihil aut nostrum
        </p>
        <a href="#menu">
          <button className="bg-transparent md:hover:bg-orange-700 md:text-orange-700 font-semibold hover:text-white py-2 px-4 border md:border-orange-700 hover:border-transparent rounded transition duration-300 ease-in-out">
            menu here
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
