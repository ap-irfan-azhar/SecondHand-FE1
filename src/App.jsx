import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarFull from "./components/Navbar/NavbarFull";
import { NavbarTitle } from "./components/Navbar/NavbarTitle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Buyer from "./pages/Buyer";

function App() {
  return (
    <Router>
      <NavbarFull/>
      {/* <NavbarTitle data="data"/> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buyer" element={<Buyer />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
