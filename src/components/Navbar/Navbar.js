import React from "react";
import "./Navbar.scss";
import Logo from "../../images/logo-platzimaster_white.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <header className="Navbar">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Platzi Master Logo" />
        </Link>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
