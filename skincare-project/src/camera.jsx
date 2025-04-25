import React, { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Webcam from "react-webcam";
import takephoto from "./assets/takephoto.png"; // Import the takephoto image

const CustomWebcam = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate(); // Initialize navigate

  // Capture function
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        console.log("Captured Image:", imageSrc); // Debugging log
        setImgSrc(imageSrc);
        navigate("/photo", { state: { imgSrc: imageSrc } }); // Navigate to photo.jsx with image
      } else {
        console.error("Failed to capture image");
        alert("Failed to capture image. Please try again.");
      }
    } else {
      console.error("Webcam reference is null");
      alert("Webcam is not initialized. Please refresh the page.");
    }
  }, [webcamRef, navigate]);

  // Simulate loading for the webcam
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <h1 className="text-2xl font-bold mb-4">Skincare</h1>

      {/* Loading Indicator */}
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-black text-lg">Loading camera...</p>
        </div>
      ) : (
        <>
          {/* Webcam or Image Preview */}
          {!imgSrc ? (
            <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black">
              <Webcam
                audio={false}
                ref={webcamRef} // Attach the ref here
                mirrored={false}
                screenshotFormat="image/jpeg"
                screenshotQuality={0.8}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <img
              src={imgSrc}
              alt="Captured"
              className="w-full h-full object-cover fixed top-0 left-0"
            />
          )}

          {/* Capture Photo Button */}
          {!imgSrc && (
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex items-center gap-2 z-20">
              <img
                src={takephoto}
                alt="Take Photo"
                onClick={capture}
                className="w-16 h-16 cursor-pointer pointer-events-auto"
              />
              <span className="text-white text-sm font-medium">Take Picture </span>
            </div>
          )}

          {/* Instructions */}
          <p className="absolute bottom-16 text-white mb-6 text-center z-10">
            To get better results, make sure to have:
            <br />
            Neutral Expression • Frontal Pose • Adequate Lighting
          </p>
        </>
      )}
    </div>
  );
};

export default CustomWebcam;
