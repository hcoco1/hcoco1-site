import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';

export default function ResumeLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "none",
        backgroundColor: "var(--bs-teal)",
        borderRadius: 10,
        padding: 5
    }

    return (
        <>
            <Nav className="justify-content-center resumeNavContainer " activeKey="/home">
                <div className="resumeNavLinks">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                        className="resumeNavLinks"
                    >
                        Experience
                    </NavLink>
                </div>

                <div className="resumeNavLinks">
                    <NavLink
                        to="education"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        className="resumeNavLinks"
                    >
                        Education
                    </NavLink>
                </div>
                <div className="resumeNavLinks">
                    <NavLink
                        to="skills"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        className="resumeNavLinks"
                    >
                        Skills
                    </NavLink>
                </div>
                <div className="resumeNavLinks">
                    <NavLink
                        to="interest"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        className="resumeNavLinks"
                    >
                        Interest
                    </NavLink>
                </div>
            </Nav>
            <Outlet />
        </>
    )
}