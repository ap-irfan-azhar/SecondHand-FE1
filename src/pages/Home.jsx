import React from "react";
import NavbarFull from '../components/Navbar/NavbarFull';
import Jual from "../components/Landingpage/Jual";
import Category from "../components/Landingpage/Category"
import Carouselhome from "../components/Carousel/Carouselhome"
import { useMediaQuery } from "react-responsive";
import NavbarUserFull from "../components/Navbar/User/NavbarUserFull";

export default function Home() {
  return (
    <>
    <NavbarUserFull/>
      <div>
        <Carouselhome/>
        <Category/>
        <Jual/>
      </div>
    </>
  );
}
