import React from 'react'
import "./mark.css";
import "../crew.css";


const Mark = () => {
  return (
    <div className='mark'>
      <div className='mark__text'>
        <div className='mark__text-meet'>
          <p className='zerotwo'>02</p>
          <p className='meet_your_crew'>MEET YOUR CREW</p>
        </div>
        <p className='mark__text-subheading'>MISSION SPECIALIST</p>
        <p className='mark__text-heading'>MARK SHUTTLEWORTH</p>
        <p className='mark__text-paragraph'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
      </div>
      <div className='mark__picture'>

      </div>
    </div>
  )
}

export default Mark