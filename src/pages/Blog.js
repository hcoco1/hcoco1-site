import React from 'react'
import { Helmet } from "react-helmet";
import BlogPortCard from '../components/BlogPortCard'
import { blogPosts } from '../data/data'

export default function Blog() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 mb-3">
      <Helmet>
        <title>Blog Ivan Arias hcoco1</title>
        <meta name="description" content="Blog Ivan Arias hcoco1." />
      </Helmet>
      {blogPosts.map((post, index) => (
        <div key={index} className="col">
          <BlogPortCard
            src={post.src}
            type={post.type}
            title={post.title}
            year={post.year}
            intro={post.intro}
            link={post.link}
            tags={post.tags}
            badge={post.badge}
          />
        </div>
      ))}
    </div>
  )
}




