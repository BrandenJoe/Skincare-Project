import React, { useState } from "react";
import { Link } from "react-router-dom";
import RightButton from "./components/RightButton";
import LeftButton from "./components/LeftButton";
import Nav from "./nav"; // Ensure the path to nav.jsx is correct
function App() {
  const [isHovered, setIsHovered] = useState(false); 
  
  return (

    <div className="relative flex flex-col h-screen">
      <Nav/>
      <div className="relative flex flex-grow items-center justify-between px-4 overflow-hidden">

      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        >
        <LeftButton />
      </div>

      {/* Center Text */}
      <div
        className={`flex flex-grow items-center justify-center transition-transform duration-700 ease-in-out ${
          isHovered ? "-translate-x-[40%]" : "translate-x-0"
        }`}
        >
        <h1 className="text-center font-roobert-trial font-light text-[60px] lg:text-[100px] leading-[120px] tracking-[-0.07em]">
          Sophisticated
          <span
            className={`block transition transform duration-1000 ease-in-out ${
              isHovered ? "-translate-x-[20%]" : "translate-x-0"
            }`}
            >
            Skincare
          </span>
        </h1>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-20 left-8 w-[316px] h-[72px] font-roobert-trial font-normal text-[#1A1B1C] text-[14px] leading-6 uppercase tracking-normal">
        Skinstric developed an A.I. that creates a highly-personalised routine
        tailored to what your skin needs.
      </div>

      {/* Right Button */}
      <div
        onMouseEnter={() => setIsHovered(true)} // Trigger hover state
        onMouseLeave={() => setIsHovered(false)} // Reset hover state
        >
        <Link to="/introduce">
        <RightButton />
        </Link>
      </div>
        </div>
    </div>
  );
}

export default App;
