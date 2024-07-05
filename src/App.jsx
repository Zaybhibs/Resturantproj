import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Nopage from "./pages/Nopage";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
