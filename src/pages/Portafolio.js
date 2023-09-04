import React from 'react';
import BlogPortCard from '../components/BlogPortCard';

export default function Portafolio() {
    return (
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <BlogPortCard
                    
                    type='Web App'
                    title="Real Estate Site (RES)"
                    year="July 2023"
                    intro="Real Estate Site (RES) is a
                    REACT/REACT-BOOTSTRAP/REACT-ROUTER app that accesses data from a web database.
                    Because RES is using a free web service, there will be a delay in the
                        response to the first request  after a period of inactivity while the
                    instance spins up (https://render.com/docs/free)."
                    link="https://phase2app.vercel.app/"
                />
            </div>
            <div class="col">
                <BlogPortCard
                    
                    type='Web Site'
                    title="My Web Site (latest version)"
                    year="July 2023"
                    intro="My last site looked good, but I wasn't happy with it. I always wanted
                    to build a fancy web page using something other than pre-build templates. After I learned about BOOTSTRAP,
                    REACT ROUTER, and SASS, I started to create this new web page. I designed it for use on mobile devices (large phones).
                    I'm actively working on this site, but it is ready to be posted!!"
                    link="https://hcoco1-site.vercel.app"
                />
            </div>
            <div class="col">
                <BlogPortCard
                    
                    type='Web App'
                    title="World Population Dashboard (WPD)"
                    year="May 2023"
                    intro="World Population Dashboard is an HTML/CSS/JS app that
                    accesses data from an API I created. WPD returns a collection of countries and is my
                    first App since I am studying Web Development.
                    Because WPD is using a free web service, there will be a delay in the
                    response to the first request  after a period of inactivity while the
                    instance spins up (https://render.com/docs/free)."
                    link="https://hcoco1.github.io/Phase1_app/"
                />
            </div>
            <div class="col">
                <BlogPortCard
                    
                    type='Web Site'
                    title="My Web Site (Bootstrap version)"
                    year="Feb 2023"
                    intro="This website was created using a BOOTSTRAP template. I used React app to modify it with Bootstrap classNames.
                    ('https://startbootstrap.com/theme/resume')"
                    link="https://hcoco1.github.io/hcoco1-site-bootstrap/"
                />
            </div>
            <div class="col">
                <BlogPortCard
                   
                    type='Web Site'
                    title="My Web Site (oldest version)"
                    year="Sep 2022"
                    intro="This website was created using plain HTML
                    and CSS, serving as my introduction to the world of web development. I embarked on
                    coding it by leveraging various literature resources available online. "
                    link="https://hcoco1.github.io/hcoco1-website/"
                />
            </div>
        </div>
    )
}





