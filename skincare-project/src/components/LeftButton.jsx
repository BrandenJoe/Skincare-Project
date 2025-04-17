import React from "react";
import leftrectangle from "../assets/rightrectangle.png";
import triangle from "../assets/Polygon.png"; // Assuming you have a triangle image, if not you can create a simple triangle using CSS.

const LeftButton = () => {
  return (
    <div className="relative flex-shrink-0">
      <img
        src={leftrectangle}
        alt="Left Rectangle"
        className="w-[260px] h-[450px] tramsform scale-x-[-1]"
      />
      <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none active:ring-0 cursor-pointer">
        {/* Text First */}
        Discover A.I.
        {/* Rotated Square */}
        <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 flex items-center justify-center">
          {/* Triangle Image */}
          <img
            src={triangle}
            alt="Triangle"
            className="w-[9.43px] h-[10.89px] rotate-[135deg]"
           
          />
        </div>
      </button>
    </div>
  );
};

export default LeftButton;
