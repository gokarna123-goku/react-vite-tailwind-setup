import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-gray-950">
        <Router>
          <Navbar />
        </Router>
      </div>
    </>
  );
}

export default App;
