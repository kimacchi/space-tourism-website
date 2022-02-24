import React from 'react';
import "./crew.css";
import { Anousheh, Mark, Douglas, Victor } from '../../components';
import Header from '../header/Header';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/system';

const StyledRadio = styled(Radio)({
  "crew__footer:checked": {
    backgroundColor: "red",
  }
})



export default class Crew extends React.Component {
  state = {crewMate: "douglas"}
  
  navMark = ()=> this.setState({crewMate: "mark"});
  navVictor = ()=> this.setState({crewMate: "victor"});
  navAnousheh = ()=> this.setState({crewMate: "anousheh"});
  navDouglas = ()=> this.setState({crewMate: "douglas"});
  nav = (event)=> this.setState({crewMate: event.target.value})

  // checked={this.state.crewMate == "anousheh"}
  // className={this.state.crewMate == "anousheh" ? "crew__footer-input checked" : "crew__footer-input"}

  render() {
    return (
      <div className="crew">
        <div>
          <Header />
        </div>
        <div className='crewmates'>
          {this.state.crewMate == "douglas" ? <Douglas /> : undefined }
          {this.state.crewMate == "mark" ? <Mark /> : undefined }
          {this.state.crewMate == "victor" ? <Victor /> : undefined}
          {this.state.crewMate == "anousheh" ? <Anousheh /> : undefined }
        </div>
        <div className='crew__footer'>
            <button
              className={this.state.crewMate == "douglas" ? "crew__footer-input checked" : "crew__footer-input"}
              onClick={this.navDouglas}
            ></button>
            <button 
              className={this.state.crewMate == "mark" ? "crew__footer-input checked" : "crew__footer-input"}
              onClick={this.navMark}
            ></button>
            <button 
              className={this.state.crewMate == "victor" ? "crew__footer-input checked" : "crew__footer-input"}
              onClick={this.navVictor}
            ></button>
            <button 
              className={this.state.crewMate == "anousheh" ? "crew__footer-input checked" : "crew__footer-input"}
              onClick={this.navAnousheh}
            ></button>
        </div>
      </div>
    )
  }
}
