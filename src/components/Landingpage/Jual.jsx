import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Jual() {
  const isMobile = useMediaQuery({ minWidth: 600 });
  return (
    <div
      className={
        isMobile
          ? "p-2 mb-3 mx-auto text-center fixed-bottom custom-space-4 custom-button-auth custom-border-search"
          : "p-2 mb-3 mx-auto text-center fixed-bottom custom-space-4 custom-button-auth custom-border-search w-25 shadow-lg"
      }
    >
      <Link to={"/seller/daftar-jual"}>
        <FontAwesomeIcon
          icon={faPlus}
          className="text-white custom-font-1 mr-2"
        />
        <span className="text-white custom-font-1">Jual</span>
      </Link>
    </div>
  );
}