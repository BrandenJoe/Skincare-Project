import React from "react";
import leftrectangle from "./assets/leftrectangle.png";
import rightrectangle from "./assets/rightrectangle.png";
function App() {
  return (
    <div className="flex h-screen items-center">
      <div className=" relative flex-shrink-0">
        <img src={leftrectangle} alt ="Right Rectangle" className=" h-auto" />
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1A1B1C] px-4 py-2 rounded">
         Discover A.I.
         </button>
      </div>

      <div className=" flex flex-col items-center justify-center h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
      <div className="flex items-center justify-center flex-grow">
        <h1 className="text-center font-roobert-trial font-light text-[60px] lg:text-[100px] leading-[120px] tracking-[-0.07em]">
          Sophisticated
          <span className="block">Skincare</span>
        </h1>
      </div>
      </div>

      <div className="flex-shrink-0 ml-auto">
        <img src={rightrectangle} alt ="Right Rectangle" className=" h-auto" />
      </div>
    </div>
  );
}

export default App;
