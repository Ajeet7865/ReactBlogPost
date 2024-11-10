import React from 'react'
import { NavLink } from 'react-router-dom'

const PasteNavbar = () => {
    return (
        <div className="text-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/addpastes">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pastes">Pastes</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default PasteNavbar