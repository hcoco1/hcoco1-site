import React from 'react'

export default function About() {
    return (
        <div className="card mb-3">
            <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="https://avatars.githubusercontent.com/u/52940441?v=4" className="img-fluid rounded-circle" alt="Profile"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-center">Ivan Arias</h5>
                        <h6 className="card-title text-center">| Full Stack Development with Flask and React | Geologist |</h6>
                        <p className="card-text">I am learning to build front-ends with ReactJS. Also, I am gaining a thorough understanding of Flask to create JSON APIs and then combine them with a scalable React front end, resulting in slick, functional, and interactive full-stack applications. I have a background in geological modeling and mapping software (GIS). I want to apply all my experience and the tech skill set I am building at Flatiron School to help develop modern web applications.</p>
                        <a href="/assets/IvanResume.pdf" download className="btn btn-primary">Download CV</a>
                        <p className="card-text mt-3"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}










