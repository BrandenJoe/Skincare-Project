import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Ensure you have this import for routing
import "./index.css";
import App from "./App.jsx";
import Introduce from "./introduce.jsx";
import Photo from "./photo.jsx"; // Import the Photo component
import Camera from "./camera.jsx"; // Import the Camera component
import Demographics from "./demographics.jsx"; // Import the Demographics component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="camera" element={<Camera />} />
        <Route path="photo" element={<Photo />} />
        <Route path="/" element={<App />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/demographics" element={<Demographics />} />
      </Routes>
    </Router>
  </StrictMode>
);
