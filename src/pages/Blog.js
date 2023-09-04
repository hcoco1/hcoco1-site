import React from 'react'
import BlogPortCard from '../components/BlogPortCard'

export default function Blog() {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <BlogPortCard
          image= "https://source.unsplash.com/1600x900/?charts"
          type='Coding'
          title="Creating a Dynamic Table in React Using react-table (v7.8.0)."
          year="July 2"
          intro="In web development, tables are commonly used to display structured
          data in a tabular format. React provides various tools and libraries..."
          link="https://hcoco1-blog.onrender.com/coding/2023/07/01/creating-a-dynamic-table-in-react.html"
        />
      </div>
      <div class="col">
        <BlogPortCard
          image="https://source.unsplash.com/1600x900/?list"
          type='Coding'
          title="JavaScript Dynamic Lists"
          year="May 14"
          intro="Since I had difficulty showing a list of items in the
          Document Object Model (DOM) in my final phase-1 Project. I decided to blog about DOM
          manipulation using Javascript."
          link="https://hcoco1-blog.onrender.com/coding/2023/05/01/javascript-dynamic-list.html"
        />
      </div>
      <div class="col">
        <BlogPortCard
          image= "https://source.unsplash.com/1600x900/?change"
          type='World'
          title="Changing careers"
          year="May 2"
          intro="Changing careers is exciting and intimidating, and some
          people think
          that starting a new job is challenging and impossible for adults and seniors."
          link="https://hcoco1-blog.onrender.com/world/2023/02/01/changing-careers.html"
        />
      </div>
    </div>
  )
}



