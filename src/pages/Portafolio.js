import React from 'react'


export default function Portafolio() {
  return (
    <section class="resume-section" id="portafolio">
    <div class="resume-section-content">
     

        <div class="row mb-4">
            <div class="col-md-6">
                <div
                    class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success">Coding</strong>
                        <h3 class="mb-0">Real Estate Site (RES)</h3>
                        <div class="mb-1 text-muted">July 2023</div>
                        <p class="card-text mb-auto">Real Estate Site (RES) is a
                            REACT/REACT-BOOTSTRAP/REACT-ROUTER app that accesses data from a web database.
                            Because RES is using a free web service, <strong>there will be a delay in the
                                response to the first request</strong> after a period of inactivity while the
                            instance spins up (https://render.com/docs/free).
                        </p>
                        <a href="https://phase2app.vercel.app/" class="stretched-link" target="_blank" rel="noopener noreferrer">Try
                            it!</a>
                    </div>

                </div>
            </div>
            <div class="col-md-6">
                <div
                    class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success">Coding</strong>
                        <h3 class="mb-0">Personal Web Site</h3>
                        <div class="mb-1 text-muted">May 2023</div>
                        <p class="card-text mb-auto">This website was created using plain HTML
                            and CSS, serving as my introduction to the world of web development. I embarked on
                            coding it by leveraging various literature resources available online. </p>
                        <a href="https://hcoco1.github.io/hcoco1-website/" class="stretched-link"
                            target="_blank" rel="noopener noreferrer">Check it out!</a>
                    </div>

                </div>
            </div>
            <div class="col-md-6">
                <div
                    class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success">Coding</strong>
                        <h3 class="mb-0">World Population Dashboard (WPD)</h3>
                        <div class="mb-1 text-muted">May 2023</div>
                        <p class="card-text mb-auto">World Population Dashboard is an HTML/CSS/JS app that
                            accesses data from an API I created. WPD returns a collection of countries and is my
                            first App since I am studying Web Development.
                            Because WPD is using a free web service, <strong>there will be a delay in the
                                response to the first request</strong> after a period of inactivity while the
                            instance spins up (https://render.com/docs/free).
                        </p>
                        <a href="https://hcoco1.github.io/Phase1_app/" class="stretched-link"
                            target="_blank" rel="noopener noreferrer">Try it!</a>
                    </div>

                </div>
            </div>





        </div>
    </div>
</section>
  )
}