import React from "react";
import Nav from "./nav.jsx";
import { Link } from "react-router-dom";
import polygon from "./assets/Polygon.png";
import gallery from "./assets/gallery.png";
import camera from "./assets/camera.png";
import WebcamCapture from "./camera.jsx";
import {useState} from "react";


function Photo() {
  const [captureImage, setCaptureImage] = useState(null);
  const {image} = location.state || {};
   
  const handleCapture = (image) => {
    console.log("Received Captured Image:", image);
    setCaptureImage(image);
    
  }
  return (
    <div className="relative w-full h-screen bg-white">
      <Nav showEnterCode={false} />

      <div className="absolute top-16 left-6 text-left">
        <p className="text-black font-semibold text-xs">TO START ANALYSIS</p>
      </div>

  {/* Preview of Captured Image */}
  {image ? (
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-lg font-semibold">Captured Image Preview</h2>
          <img
            src={image}
            alt="Captured"
            className="w-80 h-80 object-cover border border-gray-300 rounded-md mt-2"
          />
        </div>
      ) : (
        <p className="text-center mt-8 text-gray-500">
          No image captured. Please go back and try again.
        </p>
      )}



      <div className="flex items-center justify-center gap-120 h-full mt-[-90px]">
 {/* Camera Icon with Label */}
 <div className="relative w-80 h-80 flex items-center justify-center">
    {/* Square Wrapper */}
    <div className="absolute w-72 h-72 border-[2px] border-black border-dotted rotate-45 animate-pulse opacity-5 "></div>
    <div className="absolute w-76 h-76 border-[2px] border-black border-dotted rotate-45 animate-pulse  opacity-5"></div>
  

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
  <div className="absolute w-72 h-72 border-[2px] border-black border-dotted rotate-45 animate-pulse opacity-5 "></div>
  <div className="absolute w-76 h-76 border-[2px] border-black border-dotted rotate-45 animate-pulse  opacity-5 "></div>
  
 
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
{captureImage && (
        <div className="flex flex-col items-center mt-8">
          <img
            src={captureImage}
            alt="Captured"
            className="w-80 h-80 object-cover border border-gray-300 rounded-md"
          />
          <p className="mt-4 text-gray-600">This is your captured photo.</p>
        </div>
      )}

      {/* Render WebcamCapture */}
      <WebcamCapture onCapture={handleCapture} />


      
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
        {/* Proceed Button */}
        <Link
        to="/demographics" // Replace with the actual route for the next step
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
