import React from 'react'
import "./headerNavbar.css";
import { Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const HeaderNavbar = () => {
  let activeClassName = "active"
  return (
    <div>
      <div className='headernavbar'></div>
      <div className='foreground'>
        {/* <div className='line_foreground'></div> */}
        <NavLink to="/" className={({ isActive}) => isActive ? activeClassName : "link_home"}>
          <strong>00</strong> HOME
        </NavLink>
        <NavLink to="/destination-moon" className={({ isActive}) => isActive ? activeClassName : "link_home"}>
          <strong>01</strong> DESTINATION
        </NavLink>
        <NavLink to="/crew-douglas" className={({ isActive}) => isActive ? activeClassName : "link_home"}>
          <strong>02</strong> CREW
        </NavLink>
        <NavLink to="/technology-launch" className={({ isActive}) => isActive ? activeClassName : "link_home"}>
          <strong>03</strong> TECHNOLOGY
        </NavLink>
      </div>
    </div>
  )
}

export default HeaderNavbar