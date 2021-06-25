import React, {useEffect, useState, useMemo} from "react";
import 'bulma/css/bulma.css';



const Menu = (props) =>{
    const [active, setActive] = useState(0);
    const item = (id, item) =>{
        return(
            <li><a className={active==id? "is-active" : ""}
                onClick={(e)=>setActive(id)}>{item}</a>
            </li>
        )
    }
    return(
        <div className="has-background-info-light">
            <aside className="menu is-align-self-auto">
                <p className="menu-label">Customers</p>
                <ul className="menu-list">
                    {item(0, 'Add')}
                    {item(1, 'View')}
                    {item(2, 'Edit')}
                </ul>
                <p className="menu-label">Employees</p>
                <ul className="menu-list">
                    {item(3, 'Payroll')}
                    {item(4, 'TimeCards')}
                    {item(5, 'Schedule')}
                    {item(6, 'Records')}
                </ul>
                <p className="menu-label">Service</p>
                <ul className="menu-list">
                    {item(7, 'Appointments')}
                    {item(13, 'Invoices')}
                    {item(8, 'Logs')}
                    {item(9, 'Inventory')}
                </ul>
            </aside>
        </div>
    )
};
export default Menu;
