import React from "react";
import Nav from "./nav.jsx";
import { Link, useLocation } from "react-router-dom";
import polygon from "./assets/Polygon.png";
import gallery from "./assets/gallery.png";
import camera from "./assets/camera.png";

function Photo() {
  const location = useLocation();
  const { imgSrc } = location.state || {}; // Retrieve imgSrc from state

  return (
    <div className="relative w-full h-screen bg-white">
      <Nav showEnterCode={false} />

      <div className="absolute top-16 left-6 text-left">
        <p className="text-black font-semibold text-xs">TO START ANALYSIS</p>
      </div>

      {/* Camera and Gallery Icons */}
      <div className="flex items-center justify-center gap-120 h-full mt-[-90px]">
        {/* Camera Icon with Label */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* Square Wrapper */}
          <div className="absolute w-72 h-72 border-[2px] border-black border-dotted rotate-45 animate-pulse opacity-5"></div>
          <div className="absolute w-76 h-76 border-[2px] border-black border-dotted rotate-45 animate-pulse opacity-5"></div>

          {/* Camera Image */}
          <Link to="/camera">
            <div className="relative z-10 flex items-center justify-center">
              <img src={camera} alt="Camera" className="w-40 h-40 cursor-pointer" />
            </div>
          </Link>

          {/* Label */}
          <div className="absolute top-1/2 -translate-y-1/2 text-white text-xs font-medium -right-32 text-left">
            <p className="uppercase leading-4 text-[12px] text-[#1A1B1C] mt-[-150px]">
              Allow A.I. <br /> To Scan Your Face
            </p>
          </div>
        </div>

        {/* Gallery Icon with Label */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* Square Wrapper */}
          <div className="absolute w-72 h-72 border-[2px] border-black border-dotted rotate-45 animate-pulse opacity-5"></div>
          <div className="absolute w-76 h-76 border-[2px] border-black border-dotted rotate-45 animate-pulse opacity-5"></div>

          {/* Gallery Image */}
          <div className="relative z-10 flex items-center justify-center">
            <img src={gallery} alt="Gallery" className="w-40 h-40 cursor-pointer" />
          </div>

          {/* Label */}
          <div className="absolute top-1/2 -translate-y-1/2 text-white text-xs font-medium -left-32 text-right">
            <p className="uppercase leading-4 text-[12px] text-[#1A1B1C] mt-[200px]">
              Allow A.I. <br /> Access Gallery
            </p>
          </div>
        </div>
      </div>

      {/* Preview of Captured Image */}
      <div className="relative w-full h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4">Captured Photo</h1>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt="Captured"
          className="w-[600px] h-[450px] object-cover border border-gray-300 rounded-md"
        />
      ) : (
        <p className="text-red-500">No photo available</p>
      )}
    </div>

      {/* Navigation Links */}
      <Link
        to="/"
        className="flex items-center fixed bottom-8 left-8 gap-2 text-black hover:text-gray-700 transition-colors"
      >
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
        to="/demographics"
        className="flex items-center fixed bottom-8 right-8 gap-2 text-black hover:text-gray-700 transition-colors"
      >
        <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 flex items-center justify-center">
          <img
            src={polygon}
            alt="Triangle"
            className="w-[9.43px] h-[10.89px] rotate-[315deg]"
          />
        </div>
        <span className="text-sm font-medium">Proceed</span>
      </Link>
    </div>
  );
}

export default Photo;
