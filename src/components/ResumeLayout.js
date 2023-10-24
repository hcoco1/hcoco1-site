import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import { Helmet } from "react-helmet";
import Nav from 'react-bootstrap/Nav';


export default function ResumeLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "none",
       
        borderRadius: 10,
        padding: 5
    }

    return (
        <>
            <Helmet>
                <title>My Resume - Ivan Arias</title>
                <meta name="description" content="Overview of my professional background." />
            </Helmet>
            <Nav className="justify-content-center " activeKey="/home">
                <div className="resumeNavLinks">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                        className="resumeNavLinks"
                    >
                        About
                    </NavLink>
                </div>
                <div className="resumeNavLinks">
                    <NavLink
                        to="experience"
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
                        Interests
                    </NavLink>
                </div>
            </Nav>
            <Outlet />

        </>
    )
}