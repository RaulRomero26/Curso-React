import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            {/* en el react router 6 ya hace de manera automata añadir la clase active cuando el enlace
            navlink esta activo por lo que ya no hace falta la adicion de su condicional */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">useContext</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink 
                                className="nav-link"
                                // className={({isActive}) => { `nav-link ${(isActive) ? 'active':''}` }}
                                to="/">
                                Home
                            </NavLink>
                            <NavLink 
                                className="nav-link"
                                // className={({isActive}) => { `nav-link ${(isActive) ? 'active':''}` }}
                                to="/about">
                                About
                            </NavLink>
                            <NavLink 
                                className="nav-link"
                                // className={({isActive}) => { `nav-link ${(isActive) ? 'active':''}` }}
                                to="/login">
                                Login
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
