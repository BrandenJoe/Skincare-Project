import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import { useNavigate, Link } from "react-router-dom";

const WebcamCapture = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [cameraAccess, setCameraAccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAllowCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log("Camera stream:", stream); // Debugging log
      setCameraAccess(true);
      setError("");
    } catch (err) {
      setError("Camera access denied or unavailable.");
      console.error(err);
    }
  };

  const handleDenyCamera = () => {
    setCameraAccess(false);
    setError("Camera access has been stopped.");
  };

  const capture = useCallback(() => {
    if (cameraAccess) {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log("Captured Image:", imageSrc); // Debugging log
        navigate("/photo", { state: { imageSrc } }); // Navigate to the photo page with the captured image
        if (typeof onCapture === "function") {
          onCapture(imageSrc);
        }
      } else {
        console.error("webcamRef is null or undefined.");
      }
    } else {
      console.error("Camera access is not allowed.");
    }
  }, [cameraAccess, onCapture]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="text-center">
        <h1 className="text-2x1 font-semibold">Allow Camera Access</h1>
        <p className="mt-4 text-sm">Please allow camera to scan your face</p>
        <div className="flex gap-4 mt-6 justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
            onClick={handleAllowCamera}
          >
            Allow
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer"
            onClick={handleDenyCamera}
          >
            Deny
          </button>
        </div>
        {cameraAccess && (
          <p className="mt-4 text-green-500">Camera access granted!</p>
        )}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>

      {/* Webcam Display */}
      {cameraAccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full h-full object-cover"
          />
          <button
            onClick={capture}
            className="absolute bottom-40 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
          >
            Capture photo
          </button>
          <p className="absolute bottom-20 px-4 py-2 text-white">
            To get better results make sure to have
          </p>
          <div className="absolute bottom-10 flex justify-center w-full px-8 text-white uppercase space-x-10">
            <p>Neutral Expression</p>
            <p>Frontal Pose</p>
            <p>Adequate Lighting</p>
          </div>
        </div>
      )}
    </div>
   
  );
};

export default WebcamCapture;
