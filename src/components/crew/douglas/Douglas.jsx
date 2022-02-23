import React from 'react'
import "./douglas.css";
import "../crew.css";
import douglasimage from "../../../source/assets/crew/image-douglas-hurley.png";


const Douglas = () => {
  return (
    <div className='douglas'>
      <div className='douglas__text'>
        <div className='douglas__text-meet'>
          <p className='zerotwo'>02</p>
          <p className='meet_your_crew'>MEET YOUR CREW</p>
        </div>
        <p className='douglas__text-subheading'>COMMANDER</p>
        <p className='douglas__text-heading'>DOUGLAS HURLEY</p>
        <p className='douglas__text-paragraph'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
      </div>
      <div className='douglas__picture'>
      </div>
    </div>
  )
}

export default Douglas