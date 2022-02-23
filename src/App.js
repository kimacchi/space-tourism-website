import React from 'react';
import "./app.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { Home, Technology, Destination, Header, Crew } from './container';

const App = () => {
  return (
    <div>
        {/* <Header /> */}
   <BrowserRouter>
    <div>
        <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/destination-moon" element={<Destination destination="moon" />} />
        <Route path="/destination-mars" element={<Destination destination="mars" />} />
        <Route path="/destination-titan" element={<Destination destination="titan" />} />
        <Route path="/destination-europa" element={<Destination destination="europa" />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology-launch" element={<Technology stage="launch" />} />
        <Route path="/technology-spaceport" element={<Technology stage="spaceport" />} />
        <Route path="/technology-spacecapsule" element={<Technology stage="spacecapsule" />} />
        </Routes>
    </div>
   </BrowserRouter>
    </div>
  )
}

export default App