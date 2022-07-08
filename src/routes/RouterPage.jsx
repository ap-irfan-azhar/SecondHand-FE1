import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarFull from "../components/Navbar/NavbarFull";
import { NavbarTitle } from "../components/Navbar/NavbarTitle";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Buyer from "../pages/Buyer";
import HalamanProduk from "../pages/Seller/HalamanProduk";
import ProdukDetail from "../pages/Buyer/ProdukDetail";
import InfoPenawar from '../pages/Seller/InfoPenawar';
import DaftarJual from '../pages/Seller/DaftarJual';
import Notifikasi from '../pages/Seller/Notifikasi';
import InfoProduk from '../pages/Seller/InfoProduk';
import DaftarProduk from '../pages/Buyer/DaftarProduk';
import EditProduk from '../pages/Seller/EditProduk';

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


          {/* Buyer */}
          <Route path="/produk" element={<DaftarProduk />} />
          <Route path="/produk/detail/:id" element={<ProdukDetail />} />

          {/* Seller */}
          <Route path="/seller/daftar-jual" element={<DaftarJual />} />
          <Route path="/seller/produk/info-produk" element={<InfoProduk />} />
          <Route path="/seller/produk/edit/:id" element={<EditProduk />} />
          <Route path="/seller/produk/detail/:id" element={<HalamanProduk />} />
          <Route path="/seller/penawaran" element={<InfoPenawar />} />
          <Route path="/seller/notifikasi" element={<Notifikasi />} />
        </Routes>
      </main>
    </Router>
    </div>
  )
}

export default RouterPage