import React from 'react'
import { Helmet } from "react-helmet";
import MultiCard from '../components/MultiCard'
import { portafolio_Posts } from '../data/data'


export default function Blog() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 mb-3">
            <Helmet>
                <title>Portafolio Ivan Arias hcoco1 </title>
                <meta name="description" content="Portafolio Ivan Arias." />
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
                        link_demo={post.link_demo}
                        tags={post.tags}
                        badge={post.badge}
                    />
                </div>
            ))}

        </div>


    )
}














































