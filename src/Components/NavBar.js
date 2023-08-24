import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/NavStyle.css";

function Navbar() {
  return (
    <>
      <nav className="header">
        <ul>
          <li>
            <Link to="/">Home Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/pokedex">pokedex</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
export default Navbar;
