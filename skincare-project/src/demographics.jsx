import React from "react";
import Nav from "./nav.jsx";
import { Link } from "react-router-dom";
import polygon from "./assets/Polygon.png";

function Demographics() {
  return (
    <div className="relative w-full h-screen bg-white flex flex-col items-center justify-center">
      {/* Navigation Bar at the Top */}
      <div className="absolute top-0 left-0 w-full bg-white shadow-md z-10">
        <Nav showEnterCode={false} />
      </div>

      {/* Title */}
      <div className="absolute top-16 left-6 text-left">
        <p className="text-black font-semibold text-xs">A.I. ANALYSIS</p>
        <p className="text-gray-500 text-xs">
          A.I. has estimated the following. <br />
          Fix estimated information if needed.
        </p>
      </div>

      
      <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-[1px">
        <div className="flex items-center justify-center col-start-2">
          <button className="w-32 h-32 bg-gray-200 hover:bg-gray-300 rounded transform rotate-45 flex items-center justify-center"
          >
            <span className="transform -rotate-45">Demographics</span>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <Link
        to="/photo"
        className="flex items-center fixed bottom-8 left-8 gap-2 text-black hover:text-gray-700 transition-colors"
      >
        {/* Back Button */}
        <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 flex items-center justify-center">
          <img
            src={polygon}
            alt="Triangle"
            className="w-[9.43px] h-[10.89px] rotate-[135deg]"
          />
        </div>
        <span className="text-sm font-medium">Back</span>
      </Link>

      <Link
        to="/"
        className="flex items-center fixed bottom-8 right-8 gap-2 text-black hover:text-gray-700 transition-colors"
      >
        {/* Home Button */}
        <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 flex items-center justify-center">
          <img
            src={polygon}
            alt="Triangle"
            className="w-[9.43px] h-[10.89px] rotate-[315deg]"
          />
        </div>
        <span className="text-sm font-medium">Home</span>
      </Link>
    </div>
  );
}

export default Demographics;
