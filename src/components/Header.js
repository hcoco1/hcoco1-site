/* import React from "react";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

const navItems = [
    { to: "/", label: "Home" },
    { to: "resume", label: "Resume" },
    { to: "blog", label: "Blog" },
    { to: "portafolio", label: "Portfolio" },
];

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "none",
        borderRadius: 10,
        padding: 5
    };

    return (
        <Nav className="justify-content-center navContainer" activeKey="/home">
            {navItems.map((item, index) => (
                <div className="navLinks" key={index}>
                    <NavLink
                        to={item.to}
                        style={({ isActive }) => isActive ? activeStyles : null}
                        end={index === navItems.length - 1}
                        className="navLinks"
                    >
                        {item.label}
                    </NavLink>
                </div>
            ))}
        </Nav>
    );
} */

import React from "react";
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



