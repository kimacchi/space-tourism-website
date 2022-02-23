import React from 'react'
import "./home.css";
import Header from '../header/Header';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div className='home__content'>
        <div className='home__content-text'>
          <p className='home__content-text_subheading'>SO, YOU WANT TO TRAVEL TO</p>
          <p className='home__content-text_heading'>SPACE</p>
          <p className='home__content-text_paragraph'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="home__content-button">
          <button className='home__content-button_landingbutton' onClick={()=>{
            navigate("/destination-moon");
          }} >
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home