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
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        </Routes>
    </div>
   </BrowserRouter>
    </div>
  )
}

export default App