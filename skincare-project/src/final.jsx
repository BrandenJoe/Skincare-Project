import React, { useState } from "react";
import Nav from "./nav.jsx";
import { Link } from "react-router-dom";

function Final() {
  const [selectedSection, setSelectedSection] = useState(null); // Tracks the currently selected section

  const handleSelection = (section) => {
    setSelectedSection(section); // Update the selected section
  };

  return (
    <>
      <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3">
        <Nav showEnterCode={false} />
      </div>
      <div className="h-screen flex flex-col md:mt-28">
        <main className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
          <div className="h-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col">
            <div className="text-start ml-4 mb-4 md:mb-6 md:ml-0">
              <h2 className="text-lg md:text-xl font-bold mb-1">
                A.I ANALYSIS
              </h2>
              <h3 className="text-4xl md:text-6xl font-normal leading-tight">
                DEMOGRAPHICS
              </h3>
              <h4 className="text-sm md:text-base mt-1">
                PREDICTED RACE & AGE
              </h4>
            </div>
            <div className="grid md:grid-cols-[3fr_7fr_5fr] gap-4 mt-10 mb-40 md:gap-6 pb-0 md:pb-0 md:mb-0">
              <div className="bg-gray-100 p-4 rounded-lg space-y-4">
                {/* Race Section */}
                <button
                  className={`p-3 rounded-lg cursor-pointer transition-colors w-full ${
                    selectedSection === "race"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handleSelection("race")}
                >
                  <h4 className="text-sm font-medium mb-1">RACE</h4>
                  <p className="text-xs">MIDDLE EASTERN</p>
                </button>

                {/* Age Section */}
                <button
                  className={`p-3 rounded-lg cursor-pointer transition-colors w-full ${
                    selectedSection === "age"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handleSelection("age")}
                >
                  <h4 className="text-sm font-medium mb-1">AGE</h4>
                  <p className="text-xs">25-34</p>
                </button>

                {/* Gender Section */}
                <button
                  className={`p-3 rounded-lg cursor-pointer transition-colors w-full ${
                    selectedSection === "gender"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handleSelection("gender")}
                >
                  <h4 className="text-sm font-medium mb-1">GENDER</h4>
                  <p className="text-xs">FEMALE</p>
                </button>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center">
                <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                  <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-gray-200"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                    ></circle>
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-black"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="251.3274"
                      strokeDashoffset="22.01"
                      transform="rotate(-90 50 50)"
                      fill="transparent"
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-3xl md:text-5xl font-bold">91%</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center mb-2">
                  MIDDLE EASTERN
                </p>
                <p className="text-xs text-gray-600 text-center">
                  If A.I. estimate is wrong select the correct one
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium mb-2">A.I CONFIDENCE</h4>

                  {selectedSection === "age" ? (
                    <>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">18-24</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">40%</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">25-34</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "35%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">35%</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">35-44</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "15%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">15%</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">45+</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "10%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">10%</span>
                      </div>
                    </>
                  ) : selectedSection === "gender" ? (
                    <>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">Male</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">60%</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">Female</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">40%</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">Middle Eastern</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "91.24%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">91.2%</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">Latino Hispanic</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "7.15%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">7.2%</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">Southeast asian</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "1.15%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">1.1%</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">East asian</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "0.28%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">0.3%</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">White</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "0.11%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">0.1%</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">South asian</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "0.07%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">0.1%</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-20 truncate">Black</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "0.02%" }}
                          ></div>
                        </div>
                        <span className="w-8 text-right">0.0%</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="border-t pt-4 pb-6 bg-white sticky bottom-40 md:static md:bottom mb-8 md:mb-16">
              <div className="flex justify-between between max-w-6xl mx-auto px-4 md:px-8">
                <Link
                  to="/demographics"
                  className="rotate-45 hover:bg-gray-100 transition-colors w-10 h-10 flex items-center justify-center border border-black"
                >
                  <span className="rotate-[-45deg] text-black font-semibold text-xs">
                    Back
                  </span>
                </Link>
                <Link
                  to="/"
                  className="rotate-45 hover:bg-gray-100 transition-colors w-10 h-10 flex items-center justify-center border border-black"
                >
                  <span className="rotate-[-45deg] text-black font-semibold text-xs">
                    Home
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Final;
