import React from "react";
import rightrectangle from "../assets/rightrectangle.png";
import triangle from "../assets/Polygon.png"; 
import { useNavigate } from "react-router-dom";
const RightButton = () => {
  const navigate = useNavigate(); 
  return (
    <div className="relative flex-shrink-0">
    <img src={rightrectangle} alt="Right Rectangle" className="w-[260px] h-[450px]" />
    <button
     onClick={() => navigate("/introduce")} 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors cursor-pointer">
      {/* Rotated Square */}
      <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 flex items-center justify-center">
        <img src={triangle} className=" w-[9.43px] h-[10.89px] transfrom rotate-[-45deg]"></img>
        {/* Triangle */}
      </div>
      Take the Test
    </button>
  </div>
  );
};

export default RightButton;