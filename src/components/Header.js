/* import React from "react";
import Nav from 'react-bootstrap/Nav';


const navItems = [
    { to: "/", label: "Home" },
    { to: "resume", label: "Resume" },
    { to: "https://blog.hcoco1.com/", label: "Blog" },
    { to: "portafolio", label: "Portfolio" },
    { to: "contact", label: "Contact" },
];

export default function Header() {
    const activeStyles = {
        fontWeight: "normal",
        textDecoration: "none",
        borderRadius: 10,
        padding: 5
    };

    return (
        <Nav className="justify-content-center navContainer" activeKey="/home">
            {navItems.map((item, index) => (
                <div className="navLinks" key={index}>

            <a
                    href={item.to}
                    style={activeStyles}
                    target={index === 2 ? "_blank" : "_self"}  // Open blog link in a new tab
                    rel={index === 2 ? "noopener noreferrer" : ""}
                    className="navLinks"
                    key={index}
                >
                    {item.label}
                </a>

                </div>
    
            ))}
        </Nav>
    );
}
 */

import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";



export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "none",

        borderRadius: 10,
        padding: 5
    }
    const handleClick = () => {
        setIsActive(true);
        // Add additional logic if needed
    };
    return (

        <Nav className="justify-content-center navContainer" activeKey="/home">
            <div className="navLinks">
                <NavLink
                    to="/"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    end
                    className="navLinks"
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
                <a
                    href="https://blog.hcoco1.com"
                    className={`navLinks ${isActive ? 'active' : ''}`}
                    style={isActive ? activeStyles : {}}
                    onClick={handleClick}
                >
                    Blog
                </a>
            </div>
            <div className="navLinks">

                <NavLink
                    to="portafolio"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="navLinks"
                >
                    Portfolio
                </NavLink>
            </div>
            <div className="navLinks">

                <NavLink
                    to="contact"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="navLinks"
                >
                    Contact
                </NavLink>
            </div>
        </Nav>

    )
}





