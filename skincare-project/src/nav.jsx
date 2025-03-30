import React from "react";

function nav() {
  return (
    <nav className="flex items-center justify-between p-6">
      <header className="text =[#1A1B1C] font-roobert-trial font-semibold text-[14px] leading-[16px] tracking-[-0.02em] uppercase">
        skinstric 
        <span className="opacity-60 text-[14px] leading-[16px] tracking-[-0.02em] uppercase">   [ intro ]</span>
      </header>
      <button className=" text-white font-roobert-trial font-semibold text-[10px] leading-[16px] tracking-[-0.02em] uppercase bg-black rounded w-[80px] h-[32px] .py-2 .px-4 cursor-pointer ">
        Enter Code
      </button>
    </nav>
  );
}

export default nav;
