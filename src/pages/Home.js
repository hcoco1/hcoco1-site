import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPortCard from '../components/BlogPortCard';
import { blogPosts } from '../data/data';
import MultiCard from '../components/MultiCard';
import { portafolio_Posts } from '../data/data';

export default function Home() {
  // Sort in descending order by year
  const sortedBlogPosts = blogPosts.slice().sort((a, b) => b.year - a.year);
  const sortedPortafolioBlogPosts = portafolio_Posts.slice().sort((a, b) => b.year - a.year);

  // Get the latest three blog posts
  const lastThreePosts = sortedBlogPosts.slice(0, 2);
  const lastThreePortafolioPosts = sortedPortafolioBlogPosts.slice(0, 2);

  return (
    <>

      <div className="container mt-3 mb-3">
        <Helmet>
          <title>Ivan Arias - Home</title>
          <meta name="description" content="Ivan Arias Website. " />
        </Helmet>

        <div>
          <h2 className="mb-2 text-center">Hey there 👋</h2>
          <h3 className="mb-2 text-center">I'm Ivan</h3>
          <h4 className="mb-4 text-center ">Software Engineer 🤖 and Geologist 🌍</h4>
        </div>


        <h3 className="mb-4">Latest Blog Posts 👇</h3>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {lastThreePosts.map((post, index) => (
            <div key={index} className="col mb-4">
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

        <h3 className="mt-5 mb-4">Latest Projects 👇</h3>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {lastThreePortafolioPosts.map((post, index) => (
            <div key={index} className="col mb-4">
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
        <h6 className="text-center mt-4" style={{ backgroundColor: '#f0f2f5', padding: '10px', borderRadius: '8px' }}>
          Explore more on my <a href="https://blog.hcoco1.com/" className="btn btn-outline-success btn-sm">Blog</a> or check out my <a href="/portafolio" className="btn btn-outline-primary btn-sm">Portfolio</a>!
        </h6>
      </div>
    </>
  );
}
