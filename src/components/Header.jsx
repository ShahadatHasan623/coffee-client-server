import React from "react";
import "./Header.css";
import logoImg from '../assets/more/logo1.png'
const Header = () => {
  return (
    <div>
      <div className="header-img flex items-center justify-center gap-2">
        <img className="h-15" src={logoImg} alt="" />
        <h1 className="text-4xl text-white">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Header;
