import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from 'react-bootstrap/Nav';

const resumeNavItems = [
    { to: ".", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "skills", label: "Skills" },
    { to: "interest", label: "Interests" },
];

export default function ResumeLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "none",
        borderRadius: 10,
        padding: 5
    };

    return (
        <>
            <Helmet>
                <title>My Resume - Ivan Arias</title>
                <meta name="description" content="My Resume - Ivan Arias." />
            </Helmet>
            <Nav className="justify-content-center " activeKey="/home">
                {resumeNavItems.map((item, index) => (
                    <div className="resumeNavLinks" key={index}>
                        <NavLink
                            to={item.to}
                            end={index === resumeNavItems.length - 1}
                            style={({ isActive }) => isActive ? activeStyles : null}
                            className="resumeNavLinks"
                        >
                            {item.label}
                        </NavLink>
                    </div>
                ))}
            </Nav>
            <Outlet />
        </>
    );
}
