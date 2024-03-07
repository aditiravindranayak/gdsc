import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Core from "./Components/Core/Core.js";
import Events from "./Components/Events/Events.js";
import Footer from "./Components/Footer/Footer.js";
import Challenges from "./Components/Challenges/Challenges.js";
import ContactUs from "./Components/ContactUs/ContactUs.js";
import About from "./Components/About/About.js";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/core" element={<Core />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/challenges" element={<Challenges />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


