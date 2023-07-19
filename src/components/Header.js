import React from "react"
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom"


export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "none",
        backgroundColor: "var(--gray-2)",
        borderRadius: 10,
        padding: 5
    }
    return (
        <>
            <Nav className="justify-content-center navContainer" activeKey="/home">
                <div className="navLinks">
                    <NavLink
                        to="/"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        end
                    >
                        Home
                    </NavLink>
                </div>
                <div className="navLinks">
                    <NavLink
                        to="resume"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        className="navLinks"
                    >
                        Resume
                    </NavLink>

                </div>
                <div className="navLinks">
                    <NavLink
                        to="blog"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        className="navLinks"
                    >
                        Blog
                    </NavLink>

                </div>
                <div className="navLinks">

                    <NavLink
                        to="portafolio"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        className="navLinks"
                    >
                        Portafolio
                    </NavLink>
                </div>


            </Nav>
        </>







    )
}




