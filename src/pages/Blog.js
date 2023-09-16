import React from 'react'
import { Helmet } from "react-helmet";
import BlogPortCard from '../components/BlogPortCard'

const blogPosts = [
  {
    src: "https://hcoco1-blog.onrender.com/assets/images/rss.png",
    type: 'Coding',
    title: "What is RSS?",
    year: "2023-09-05",
    intro: "Have you noticed the little RSS...",
    link: "https://hcoco1-blog.onrender.com/whats-rss/"
  },
  {
    src: "https://hcoco1-blog.onrender.com/assets/images/sqlalchemy.jpeg",
    type: 'Coding',
    title: "Aggregate functions",
    year: "2023-08-27",
    intro: "In this tutorial, I will use SQLAlchemy...",
    link: "https://hcoco1-blog.onrender.com/aggregate-functions-In-SQLAlchemy/"
  },
  {
    src: "https://hcoco1-blog.onrender.com/assets/images/reac-table.jpg",
    type: 'Coding',
    title: "Dynamic Tables in React",
    year: "2023-07-01",
    intro: "In web development, tables are commonly...",
    link: "https://hcoco1-blog.onrender.com/creating-a-dynamic-table-in-react/"
  },
  {
    src: "https://hcoco1-blog.onrender.com/assets/images/js.png",
    type: 'Coding',
    title: "JS Dynamic List",
    year: "2023-05-01",
    intro: "Since I had difficulty showing a list of items...",
    link: "https://hcoco1-blog.onrender.com/javascript-dynamic-list/"
  },
  {
    src: 'https://hcoco1-blog.onrender.com/assets/images/change.jpeg',
    type: 'World',
    title: "Changing careers",
    year: "2023-02-01",
    intro: "Changing careers is exciting and ...",
    link: "https://hcoco1-blog.onrender.com/changing-careers/"
  }
];


export default function Blog() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 mb-3">
      <Helmet>
        <title>Blog Ivan Arias hcoco1</title>
        <meta name="description" content="Read the latest articles and updates." />
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
          />
        </div>
      ))}
    </div>
  )
}




