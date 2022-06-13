import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <h1>navbar</h1>
      </nav>
      <Link to="/login">
        <button className="btn btn-primary" type="submit">
          Button
        </button>
      </Link>
    </>
  );
}
