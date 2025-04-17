import React, { useState } from "react";
import Nav from "./nav.jsx";
import { Link } from "react-router-dom";
import polygon from "./assets/Polygon.png";

function Introduce() {
  const questions = [
    "Introduce Yourself",
    "Where are you from?",
    "Where do you live",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isComplete, setisComplete] = useState(false); // Track if all questions are answered

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setInputValue(""); // Clear the input field
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
      } else {
        setisComplete(true); // Handle completion
      }
    }
  };

  return (
    <div>
      <Nav showEnterCode={false} />
      <div className="absolute top-16 left-6 text-left">
        <p className="text-black font-semibold text-xs">TO START ANALYSIS</p>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center mb-40">
        {!isComplete ? (
          <>
            {/* Display the current question and input field */}
            <p className="text-[10px] text-gray-400 tracking-wider uppercase mb-1">
              {questions[currentQuestionIndex]}
            </p>
            <input
              className="text-3xl font-semibold text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[300px] leading-none pt-1"
              placeholder={questions[currentQuestionIndex]}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
          </>
        ) : (
          <>
            {/* Display the final message */}
            <p className="text-2xl font-semibold text-center text-black">
              Thank you for submitting!
            </p>
            <p className="text-lg text-center text-gray-600 mt-2">
              Ready for the result? Process for the next Step.
            </p>
            <Link
              to="/photo"
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
          </>
        )}
      </div>

      <Link
        to="/"
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
  );
}
export default Introduce;
