import React from 'react'
import "./technology.css";
// import { Launch, Spacecapsule, Spaceport, TechnologyNavbar } from '../../components';
import Header from '../header/Header';


const Launch = ()=>(
  <div className='technology-text'>
    <p className='technology__subheader'>THE TERMINOLOGY..</p>
    <p className='technology__header'>LAUNCH VEHICLE</p>
    <p className="technology__paragraph">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
  </div>
);

const Spaceport = ()=>(
  <div className='technology-text'>
    <p className='technology__subheader'>THE TERMINOLOGY..</p>
    <p className='technology__header'>SPACEPORT</p>
    <p className="technology__paragraph">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
  </div>
);

const Spacecapsule = ()=>(
  <div className='technology-text'>
    <p className='technology__subheader'>THE TERMINOLOGY..</p>
    <p className='technology__header'>SPACE CAPSULE</p>
    <p className="technology__paragraph">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
  </div>
)



export default class Technology extends React.Component {
  state={stage: "launch"};
  
  navLaunch = ()=>this.setState({stage: "launch"});
  navSpaceport = ()=>this.setState({stage: "spaceport"});
  navSpacecapsule = ()=>this.setState({stage: "spacecapsule"});


  render(){
    return(
      <div className="technology">
        <div>
          <Header />
        </div>
        <div className='technology__content'>
          <div className='technology__content-site-explanation'>
            <p className='zerothree'><strong>03</strong></p>
            <p className='space-launch'>SPACE LAUNCH 101</p>
          </div>
          <div className='technology__content-text'>
            {this.state.stage === "launch" ? <Launch /> : undefined}
            {this.state.stage === "spaceport" ? <Spaceport /> : undefined}
            {this.state.stage === "spacecapsule" ? <Spacecapsule /> : undefined}
          </div>
          <div className='technology__content-navbar'>
            <button className={this.state.stage === "launch" ? "technology__navbar currently" : "technology__navbar"} onClick={this.navLaunch}>1</button>
            <button className={this.state.stage === "spaceport" ? "technology__navbar currently" : "technology__navbar"} onClick={this.navSpaceport}>2</button>
            <button className={this.state.stage === "spacecapsule" ? "technology__navbar currently" : "technology__navbar"} onClick={this.navSpacecapsule}>3</button>
          </div>
          <div className={`technology__content-image image-of-${this.state.stage}`}>

          </div>
        </div>
      </div>
    )
  }
}
