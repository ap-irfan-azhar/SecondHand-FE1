import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarFull from "./components/Navbar/NavbarFull";
import { NavbarTitle } from "./components/Navbar/NavbarTitle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <NavbarFull/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
