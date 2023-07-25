import React from 'react'
import BlogPortCard from '../components/BlogPortCard'

export default function Blog() {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <BlogPortCard
          type='Coding'
          title="Creating a Dynamic Table in React Using react-table (v7.8.0)."
          year="July 2"
          intro="In web development, tables are commonly used to display structured
          data in a tabular format. React provides various tools and libraries..."
          link="https://dev.to/hcoco1/creating-a-dynamic-table-in-react-using-react-table-v780-3823"
        />
      </div>
      <div class="col">
        <BlogPortCard
          type='Coding'
          title="JavaScript Dynamic Lists"
          year="May 14"
          intro="Since I had difficulty showing a list of items in the
          Document Object Model (DOM) in my final phase-1 Project. I decided to blog about DOM
          manipulation using Javascript."
          link="https://dev.to/hcoco1/javascript-dynamic-list-the-dom-manipulation-10c5"
        />
      </div>
      <div class="col">
        <BlogPortCard
          type='World'
          title="Changing careers"
          year="May 2"
          intro="Changing careers is exciting and intimidating, and some
          people think
          that starting a new job is challenging and impossible for adults and seniors."
          link="https://dev.to/hcoco1/changing-careers-4o4k"
        />
      </div>
    </div>
  )
}



