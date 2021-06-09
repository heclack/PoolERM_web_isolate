import React, { useState, useEffect, useCallback } from "react";
import 'bulma/css/bulma.css';
import Navigation from './components/Navigation';
import Hud from './components/Hud';
import Customer from './components/Customer';


const InfoBar = () => {
  const [user, setUser] = useState("Admin");
  return (
    <div>
      <nav class="navbar has-background-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand p-2">
            <p className="navbar-item has-text-weight-bold has-text-white">Welcome {user}</p>
        </div>
        <div className="navbar-end p2">
          <p className="navbar-item">
          <button className="button is-white">Sign Out</button>
          </p>
        </div>

      </nav>
    </div>
  )
}

const App = () => {
  return (
    <div>

      <div>
      <InfoBar></InfoBar>

        <div className="columns p-2">
          <div className="column is-2">
            <Navigation></Navigation>
            <Customer></Customer>
          </div>
          <div className="column">
            <Hud></Hud>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;