import React, { useState, useEffect, useCallback } from "react";
import 'bulma/css/bulma.css';
import Menu from './components/Menu';
import NavTop from './components/NavTop'



const menuList = [
  {
      label: "Customers",
      list: ["Appointments", "Billing", "View", "Edit"]
  },
  {
      label: "Employees",
      list: ["Schedule", "Tracking", "Payroll"]
  },
  {
      label: "Admin",
      list: ["Accounting", "Notifications", "Personel"]
  }
];

const App = () => {
  return (
    <div>

      <div>
      <NavTop user="Admin"></NavTop>
        <div className="columns">
          <div className="column is-1">
          </div>
          <div className="column">
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
