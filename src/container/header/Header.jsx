import React from 'react'
import "./header.css";
import { HeaderNavbar } from '../../components';
import Logo from "../../source/assets/shared/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className='logo'>
        <img src={Logo} />
        <div className='line'></div>
      </div>
      <div className='header__navbar'>
        <HeaderNavbar />
      </div>
    </div>
  )
}

export default Header