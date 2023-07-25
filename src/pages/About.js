import React from 'react'

export default function About() {
    return (



        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card h-90">
                    <img src="https://hcoco1.github.io/hcoco1-site-bootstrap/assets/img/profile.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h6 class="card-title">Ivan Arias
                        | Full Stack Development with Flask and React | Geologist |</h6>
                        <p class="card-text">My name is Ivan Arias, and I am Software Engineer Student.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-90">

                    <div class="card-body">
                        <h5 class="card-title text-center">Activities</h5>
                        <p class="card-text lh-lg">I am learning to build front-ends with ReactJS. Also, I am gaining a thorough understanding of Flask to create JSON APIs and then combine them with a scalable React front end, resulting in slick, functional, and interactive full-stack applications. I have a background in geological modeling and mapping software (GIS). I want to apply all my experience and the tech skill set I am building at Flatiron School to help develop modern web applications..</p>
                    </div>
                </div>
            </div>



            <div class="col">
    <div class="card">
        
        <div class="card-body p-4"> 
        <h5 class="card-title text-center">Links</h5>
            <div class="social">
                
                <div class="d-flex justify-content-center"> 
                
                    <div class="auto p-3"> 
                        <a className="social-icon" href="https://www.linkedin.com/in/arias-ivan-hcoco1/" aria-label='linkedin' target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in fa-2xl"></i>
                        </a>
                    </div>
                    <div class="auto p-3"> 
                        <a className="social-icon" href="https://github.com/hcoco1" aria-label='github' target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github fa-2xl" style={{ color: 'black' }}></i>
                        </a>
                    </div>
                    <div class="auto p-3"> 
                        <a className="social-icon" href="https://twitter.com/hcoco1" aria-label='twitter' target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter fa-2xl"></i>
                        </a>
                    </div>
                    <div class="auto p-3"> 
                        <a className="social-icon" href="https://codesandbox.io/u/hcoco1" aria-label='codesandbox' target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-codepen fa-2xl" style={{ color: 'black' }}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




        </div>



    )
}










