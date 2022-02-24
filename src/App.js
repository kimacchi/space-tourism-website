import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { Home, Technology, Destination, Crew } from './container';

const App = () => {
  return (
    <div>
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