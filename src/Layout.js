import React from "react";
import {Link, Outlet} from "react-router-dom";

export default function Layout(props) {
    return (
        <div className="container">
            <header>
                <h1>Mijn PRG06 Bibliotheek</h1>
            </header>
            <nav className="actions">
                <ul>
                    <li>
                        <Link to="/">Bibliotheek</Link>
                    </li>
                    <li>
                        <Link to="/create">Boek toevoegen</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}