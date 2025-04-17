import React from 'react'
import Nav from "./nav.jsx";
import { Link } from "react-router-dom";
import polygon from "./assets/Polygon.png";

function demographics() {
  return (
    <div>
       <Nav showEnterCode={false} />

       <Link
        to="/photo"
        className="flex items-center fixed bottom-8 left-8 gap-2 text-black hover:text-gray-700 transition-colors"
      >
        {/* Triangle Image */}
        <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 flex items-center justify-center">
          <img
            src={polygon}
            alt="Triangle"
            className="w-[9.43px] h-[10.89px] rotate-[135deg]"
          />
        </div>
        {/* Back Text */}
        <span className="text-sm font-medium">Back</span>
      </Link>
    </div>
  )
}

export default demographics
