import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Navbar added */}
      <Outlet /> {/* This will load the current page */}
      <Footer /> {/* Footer added */}
    </div>
  );
};

export default App;
