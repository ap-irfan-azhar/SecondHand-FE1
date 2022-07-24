import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
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
import PreviewProduk from '../pages/Seller/PreviewProduk';
import InfoProfile from '../pages/InfoProfile';


const ProtectedRoute = ({role}) => {
  const roles = localStorage.getItem('role');

  if (role !== roles) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet/>;
};

const RouterPage = () => {
  return (
    
    <div>
        <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/profile" element={<InfoProfile />} />


          {/* Buyer */}
          <Route element={<ProtectedRoute role="user" />}>
            <Route path="/produk" element={<DaftarProduk />} />
            <Route path="/produk/detail/:id" element={<ProdukDetail />} />
          </Route>

          {/* Seller */}
          <Route element={<ProtectedRoute role="admin" />}>
            <Route path="/seller/daftar-jual" element={<DaftarJual />} />
            <Route path="/seller/produk/add" element={<InfoProduk />} />
            <Route path="/seller/produk/preview" element={<PreviewProduk />} />
            <Route path="/seller/produk/edit/:id" element={<EditProduk />} />
            <Route path="/seller/produk/detail/:id" element={<HalamanProduk />} />
            <Route path="/seller/penawaran" element={<InfoPenawar />} />
            <Route path="/seller/notifikasi" element={<Notifikasi />} />
          </Route>

        </Routes>
      </main>
    </Router>
    </div>
  )
}

export default RouterPage