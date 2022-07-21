import React from "react";
import NavbarFull from '../components/Navbar/NavbarFull';
import Jual from "../components/Landingpage/Jual";
import Category from "../components/Landingpage/Category"
import Carouselhome from "../components/Carousel/Carouselhome"
import { useMediaQuery } from "react-responsive";

export default function Home() {
  return (
    <>
    <NavbarFull/>
      <div>
        <Carouselhome/>
        <Category/>
        <Jual/>
      </div>
    </>
  );
}
