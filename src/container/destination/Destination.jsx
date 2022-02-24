import React from 'react'
import "./destination.css";
import Header from '../header/Header';

const Moonx = ()=>(
  <div className='destination__content_unmutable'>
    <div className='moon__image'></div>
    <div className='description'>
      <div className='text'>
        <p className='text-header'>MOON</p>
        <p className="text-paragraph">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
      </div>
      <div className='description-est'>
        <div className='avg-distance'>
          <p className='avg-distance-subtext'>AVG. DISTANCE</p>
          <p className='avg-distance-header'>384,400 KM</p>
        </div>
        <div className='est-travel'>
          <p className='est-travel-subtext'>EST. TRAVEL TIME</p>
          <p className='est-travel-header'>3 DAYS</p>
        </div>
      </div>
    </div>
  </div>
);

const Marsx = ()=>(
  <div className='destination__content_unmutable'>
    <div className='mars__image'></div>
    <div className='description'>
      <div className='text'>
        <p className='text-header'>MARS</p>
        <p className="text-paragraph">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
      </div>
      <div className='description-est'>
        <div className='avg-distance'>
          <p className='avg-distance-subtext'>AVG. DISTANCE</p>
          <p className='avg-distance-header'>225 MIL. KM</p>
        </div>
        <div className='est-travel'>
          <p className='est-travel-subtext'>EST. TRAVEL TIME</p>
          <p className='est-travel-header'>9 MONTHS</p>
        </div>
      </div>
    </div>
  </div>
);

const Europax = ()=>(
  <div className='destination__content_unmutable'>
    <div className='europa__image'></div>
    <div className='description'>
      <div className='text'>
        <p className='text-header'>EUROPA</p>
        <p className="text-paragraph">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
      </div>
      <div className='description-est'>
        <div className='avg-distance'>
          <p className='avg-distance-subtext'>AVG. DISTANCE</p>
          <p className='avg-distance-header'>628 MIL. KM</p>
        </div>
        <div className='est-travel'>
          <p className='est-travel-subtext'>EST. TRAVEL TIME</p>
          <p className='est-travel-header'>3 YEARS</p>
        </div>
      </div>
    </div>
  </div>
);

const Titanx = ()=>(
  <div className='destination__content_unmutable'>
    <div className='titan__image'></div>
    <div className='description'>
      <div className='text'>
        <p className='text-header'>TITAN</p>
        <p className="text-paragraph">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
      </div>
      <div className='description-est'>
        <div className='avg-distance'>
          <p className='avg-distance-subtext'>AVG. DISTANCE</p>
          <p className='avg-distance-header'>1.6 BIL. KM</p>
        </div>
        <div className='est-travel'>
          <p className='est-travel-subtext'>EST. TRAVEL TIME</p>
          <p className='est-travel-header'>7 YEARS</p>
        </div>
      </div>
    </div>
  </div>
);


export default class Destination extends React.Component {
  state = {destination: "moon"}

  navMoon = ()=> this.setState({destination: "moon"});
  navMars = ()=> this.setState({destination: "mars"});
  navEuropa = ()=> this.setState({destination: "europa"});
  navTitan = ()=> this.setState({destination: "titan"});

  render (){
    return (
      <div className="destination">
        <div>
          <Header />
        </div>
        <div className='destination__content'>
          <div className='site-description'>
            <p className='zeroone'>01</p>
            <p className='pick-your-destination'>PICK YOUR DESTINATION</p>
          </div>
          <div className='destination__navbar'>
            <p className={this.state.destination == "moon" ? "destination__link activedestination" : "destination__link"} onClick={this.navMoon}>MOON</p>
            <p className={this.state.destination == "mars" ? "destination__link  activedestination" : "destination__link"} onClick={this.navMars}>MARS</p>
            <p className={this.state.destination == "europa" ? "destination__link  activedestination" : "destination__link"} onClick={this.navEuropa}>EUROPA</p>
            <p className={this.state.destination == "titan" ? "destination__link  activedestination" : "destination__link"} onClick={this.navTitan}>TITAN</p>
          </div>
          <div className='changable-content-destination'>
            {this.state.destination == "moon" ? <Moonx /> : undefined}
            {this.state.destination == "mars" ? <Marsx /> : undefined}
            {this.state.destination == "europa" ? <Europax /> : undefined}
            {this.state.destination == "titan" ? <Titanx /> : undefined}
          </div>
        </div>
    </div>
    )
  }
};