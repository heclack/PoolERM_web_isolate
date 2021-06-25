import React, {useState, useEffect} from 'react';
import 'bulma/css/bulma.css';


const NavTop = (props) =>{
    const [user, setUser] = useState(props.user);
    const [select, setSelect] = useState(false);
    const [submenu, setSubmenu] = useState([]);
    const Customers = ['Customers', 'View', 'Add', 'Edit'];
    const Employees = ['Employees', 'Schedule', 'ClockTime', 'Manage'];
    const Service = ['Service', 'Appointments', 'Billing', 'Inventory', 'Logs'];
    let categories = [Customers, Employees, Service];
    const clickHandler = (event) =>{
        event.preventDefault();
        let [cat, ...items] = event.target.value;
        setSelect(cat);
        setSubmenu(items);
    };
    return (
      <div>
        <nav class="navbar is-large has-background-info-light has-text-black" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
                  <figure className="is-2by3 has-background-info has-text-white">
                   <p className="p-3">0o0o0o0o</p>
                  </figure>
                  {categories.map((navItem, index)=>{
                    let [category, ...items] = navItem;
                    return (
                        <a className="navbar-item">
                        <button className = {select === category? "button is-ghost has-background-info" : "button is-ghost"}
                        value = {navItem}
                        onClick={(e)=>clickHandler(e)}
                        >{category}</button>
                        </a>
                    )}
                  )}

              
          </div>
          <div className="navbar-end p2">
            <p className="navbar-item">
            <button className="button is-inverted">Sign Out</button>
            </p>
          </div>
        </nav>
        <nav class={select? "navbar is-small has-background-info-dark has-text-white" : "is-invisible"} role="navigation">
            <div className="navbar-brand">
                {submenu.map((item)=> <p className="navbar-item">{item}</p> )}
            </div>
        </nav>
      </div>
    )
};
export default NavTop;