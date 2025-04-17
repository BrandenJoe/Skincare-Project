import React from "react";

function nav({showEnterCode = true}) {
  return (
    <nav className="flex flex-row h-[64px] w-full items-center justify-between py-3 p-6 mb-3">
      <header className="text =[#1A1B1C] font-roobert-trial font-semibold text-[14px] leading-[16px] tracking-[-0.02em] uppercase">
        skinstric 
        <span className="opacity-60 text-[14px] leading-[16px] tracking-[-0.02em] uppercase">   [ intro ]</span>
      </header>
      {showEnterCode &&(

        <button className=" text-white font-roobert-trial font-semibold text-[10px] leading-[16px] tracking-[-0.02em] uppercase bg-black rounded w-[80px] h-[32px] .py-2 .px-4 cursor-pointer ">
        Enter Code
      </button>
      )}
    </nav>
  );
}

export default nav;
