import React from 'react'
import "./destination.css";
import { Mars, Europa, Titan, Moon, DestinationNavbar } from '../../components';
import Header from '../header/Header';


const Destination = (props) => {
  return (
    <div className="destination">
      <div>
        <Header />
      </div>
      <p>destination</p>
    </div>
  )
}

export default Destination