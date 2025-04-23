import React, { useState } from "react";
import Nav from "./nav.jsx";
import { Link } from "react-router-dom";
import polygon from "./assets/Polygon.png";

function Introduce() {
  const questions = ["Introduce Yourself", "Where are you from?" ,"Where do you live?"];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({ name: "", location: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError(""); // Clear error on input change
  };

  const validateInput = (value) => {
    // Ensure input is a string and does not contain numbers
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      if (!validateInput(inputValue)) {
        setError("Please enter a valid value (letters only).");
        return;
      }

      // Update formData based on the current question
      if (currentQuestionIndex === 0) {
        setFormData({ ...formData, name: inputValue.trim() });
      } else if (currentQuestionIndex === 1) {
        setFormData({ ...formData, location: inputValue.trim() });
      }

      setInputValue(""); // Clear the input field

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
      } else {
        setIsComplete(true); // Mark as complete
        localStorage.setItem("userData", JSON.stringify(formData)); // Save to local storage
        sendDataToAPI(formData); // Send data to the API
      }
    }
  };

  const sendDataToAPI = async (data) => {
    try {
      const response = await fetch(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result); // Log the API response
    } catch (error) {
      console.error("Error sending data to API:", error);
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
            {error && (
              <p className="text-red-500 text-xs mt-2">{error}</p>
            )}
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
