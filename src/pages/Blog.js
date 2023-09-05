import React from 'react'
import BlogPortCard from '../components/BlogPortCard'

export default function Blog() {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
        <BlogPortCard
          type='Coding'
          title="What is RSS?"
          year="2023-09-05"
          intro="Have you noticed the little RSS..."
          link="https://hcoco1-blog.onrender.com/whats-rss/"
        />
      </div>
      <div class="col">
        <BlogPortCard
          type='Coding'
          title="Aggregate functions"
          year="2023-08-27"
          intro="In this tutorial, I will use SQLAlchemy..."
          link="https://hcoco1-blog.onrender.com/aggregate-functions-In-SQLAlchemy/"
        />
      </div>
      <div class="col">
        <BlogPortCard
          type='Coding'
          title="Dynamic Tables in React"
          year="2023-07-01"
          intro="In web development, tables are commonly..."
          link="https://hcoco1-blog.onrender.com/creating-a-dynamic-table-in-react/"
        />
      </div>
      <div class="col">
        <BlogPortCard
          type='Coding'
          title="JS Dynamic List"
          year="2023-05-01"
          intro="Since I had difficulty showing a list of items..."
          link="https://hcoco1-blog.onrender.com/javascript-dynamic-list/"
        />
      </div>
      <div class="col">
        <BlogPortCard
          type='World'
          title="Changing careers"
          year="2023-02-01"
          intro="Changing careers is exciting and ..."
          link="https://hcoco1-blog.onrender.com/changing-careers/"
        />
      </div>
    </div>
  )
}



