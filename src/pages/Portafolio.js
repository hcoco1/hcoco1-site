import React from 'react'
import { Helmet } from "react-helmet";
import MultiCard from '../components/MultiCard'


const portafolio_Posts = [
    {
        src: "https://srinathh.github.io/assets/images/generic/jekyll-logo-dark-solid.png",
        type: 'Web Site',
        title: "Ivan Arias Blog Site",
        year: "September 2023",
        intro: "My blog site is a Jekyll static site whose purpose is to share my knowledge and experience in the software development world.",
        link_app: "https://hcoco1-blog.onrender.com/",
        link_git: "https://github.com/hcoco1/blog-hcoco1"
    },
    {
        src: "https://www.web-alliance.co.uk/blog/admin/blg_img/1663842396_1654089990_AdobeStock_42677898%20(1).jpeg",
        type: 'Web App',
        title: "Database Tool (DT)",
        year: "August 2023",
        intro: "Database Tool (DT) is a SQLALCHEMY/SQLITE3/CLICK command line interface (CLI) designed to manage US entities",
        link_app: "https://github.com/hcoco1/phase3_cli_click",
        link_git: "https://github.com/hcoco1/phase3_cli_click"
    },
    {
        src: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/03/931/506/FLORIDA-REAL-ESTATE-HOME-SALE-GETTY.jpg?ve=1&tl=1",
        type: 'Web App',
        title: "Real Estate Site (RES)",
        year: "July 2023",
        intro: "Real Estate Site (RES) is a REACT/REACT-BOOTSTRAP/REACT-ROUTER app that accesses data from a web database.",
        link_app: "https://phase2app.vercel.app/",
        link_git: "https://github.com/hcoco1/phase2app"
    },
    {
        src: "https://images.unsplash.com/photo-1457092716468-97352752b749?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1095&q=80",
        type: 'Web Site',
        title: "My Web Site (latest version)",
        year: "July 2023",
        intro: "My last site looked good, but I wasn't happy with it. I wanted to build  web page using something other than pre-build templates",
        link_app: "https://arias-ivan-hcoco1.vercel.app/",
        link_git: "https://github.com/hcoco1/hcoco1-site"
    },
    {
        src: "https://i.ebayimg.com/images/g/RBwAAOSwsv5cg8lp/s-l1600.jpg",
        type: 'Web App',
        title: "World Population Dashboard (WPD)",
        year: "May 2023",
        intro: "World Population Dashboard is an HTML/CSS/JS app that accesses data from an API I created",
        link_app: "https://hcoco1.github.io/Phase1_app/",
        link_git: "https://github.com/hcoco1/Phase1_app"
    },
    {
        src: "https://www.bootstrapdash.com/blog/wp-content/uploads/2017/08/bootstrap-4-beta-whats-new.jpg",
        type: 'Web Site',
        title: "My Web Site (Bootstrap version)",
        year: "Feb 2023",
        intro: "This website was created using a BOOTSTRAP template. I used React app to modify it with Bootstrap classNames.",
        link_app: "https://hcoco1.github.io/hcoco1-site-bootstrap/",
        link_git: "https://github.com/hcoco1/hcoco1-site-bootstrap"
    },
    {
        src: 'https://tatuking.com/wp-content/uploads/2020/06/html-css3.jpg',
        type: 'Web Site',
        title: "My Web Site (oldest version)",
        year: "Sep 2022",
        intro: "This website was created using plain HTML and CSS, serving as my introduction to the world of web development.",
        link_app: "https://hcoco1.github.io/hcoco1-website/",
        link_git: "https://github.com/hcoco1/hcoco1-website"
    }
];


export default function Blog() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 mb-3">
            <Helmet>
                <title>Portafolio Ivan Arias hcoco1 </title>
                <meta name="description" content="Check my latest projects." />
            </Helmet>
            {portafolio_Posts.map((post, index) => (
                <div key={index} className="col">
                    <MultiCard
                        src={post.src}
                        type={post.type}
                        title={post.title}
                        year={post.year}
                        intro={post.intro}
                        link_app={post.link_app}
                        link_git={post.link_git}
                    />
                </div>
            ))}

        </div>


    )
}














































