import React from 'react';
import "./Header.css";
import logo from "../assets/WaterDrop.png";

const Header = () => {
  return (
    <>
      <div className='cont1'>
        <img src={logo} alt="Logo" id="logo" />
        <h1 className="title">Drinkify</h1>
      </div>
    </>
  );
}

export default Header;
