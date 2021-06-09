import React, {useState, useEffect, useCallback} from "react";
import 'bulma/css/bulma.css';


export default function Hud(){
    return(
        <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">2</p>
                                <p className="subtitle">New Leads</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">1</p>
                                <p className="subtitle">Employees in Field</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">$700</p>
                                <p className="subtitle">Billings today</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">2</p>
                                <p className="subtitle">Notifications</p>
                            </article>
                        </div>
                    </div>
    )
}