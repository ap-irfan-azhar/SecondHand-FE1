import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarFull from "./components/Navbar/NavbarFull";
import { NavbarTitle } from "./components/Navbar/NavbarTitle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Buyer from "./pages/Buyer";
import HalamanProduk from "./pages/Buyer/HalamanProduk";
import RouterPage from "./routes/RouterPage";

function App() {
  return (
    <RouterPage/>
  );
}

export default App;
