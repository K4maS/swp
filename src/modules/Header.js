import React from "react";
import logo from '../img/svg/logo__star-wars.svg'
import { Link } from "react-router-dom";
import { defaultPath } from "../components/paths";

function Header() {
  return (
    <header className="header">
      {/* <div className="containder" > */}
      <Link to={defaultPath}>
        <img src={logo} className="header__logo" alt="logo" />
        <p className='header__logo-text'>encyclopedia</p>
      </Link>
      {/* </div> */}
    </header>

  );
}

export default Header;
