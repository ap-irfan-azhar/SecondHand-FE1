import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarFull from "./components/Navbar/NavbarFull";
import { NavbarTitle } from "./components/Navbar/NavbarTitle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Buyer from "./pages/Buyer";
import HalamanProduk from "./pages/Buyer/HalamanProduk";

function App() {
  return (
    <Router>
      {/* <NavbarTitle data="data"/> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/seller/produk/detail" element={<HalamanProduk />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
