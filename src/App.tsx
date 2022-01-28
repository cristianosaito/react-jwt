import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'

import './App.css';
import RoutesList from './RoutesList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
              <nav>
                <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/">Home</NavLink>
                <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/login">Login</NavLink><small>(Access without token only)</small>
                <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
              </nav>
          </div>
          <div className="content">
            <RoutesList/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
