import React from 'react'
import { Helmet } from "react-helmet";


export default function About() {
    return (
        <div className="card text-bg-light border-secondary  mb-3">
            <Helmet>
                <title>About Me - Ivan Arias hcoco1 </title>
                <meta name="description" content="Learn more about my personal and professional journey." />
            </Helmet>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="https://avatars.githubusercontent.com/u/52940441?v=4" className="img-fluid rounded-circle" alt="Profile" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-center">Ivan Arias</h5>
                        <h6 className="card-title text-center">| Full Stack Development with Flask and React | Geologist |</h6>
                        <p className="card-text">Proficient with Python, Flask, and JavaScript-based programming. Geological modeling and Geographic Information System (GIS) background. Strong interpersonal and team-building skills. Seek to join an innovative and collaborative team focused on creating and executing cutting-edge software solutions that enhance business productivity. </p>
                        <a href="/assets/IvanAResume.pdf" download className="btn btn-primary">Download CV</a>
                        <p className="card-text mt-3"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}










