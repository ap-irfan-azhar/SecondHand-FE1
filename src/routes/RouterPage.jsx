import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarFull from "../components/Navbar/NavbarFull";
import { NavbarTitle } from "../components/Navbar/NavbarTitle";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Buyer from "../pages/Buyer";
import HalamanProduk from "../pages/Seller/HalamanProduk";
import InfoPenawar from '../pages/Seller/InfoPenawar';
import DaftarJual from '../pages/Seller/DaftarJual';

const RouterPage = () => {
  return (
    <div>
        <Router>
      {/* <NavbarTitle data="data"/> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buyer" element={<Buyer />} />

          {/* Seller */}
          <Route path="/seller/daftar-jual" element={<DaftarJual />} />
          <Route path="/seller/produk/detail" element={<HalamanProduk />} />
          <Route path="/seller/penawaran" element={<InfoPenawar />} />
        </Routes>
      </main>
    </Router>
    </div>
  )
}

export default RouterPage