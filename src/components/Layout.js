import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Header";
import FooterMdb from "./FooterMdb";

export default function Layout() {
  const canonicalUrl = "https://arias-ivan-hcoco1.vercel.app/";

  return (
    <div className="container">
      <Helmet>
        <title>Ivan Arias hcoco1 | Web Developer</title>
        <meta name="description" content="Explore Ivan Arias' professional journey, portfolio, and blog. Dive deep into his experiences, skills, and passions in the tech industry." />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content="Ivan Arias hcoco1 | Web Developer" />
        <meta property="og:description" content="Ivan Arias personal website. Showcasing skills and projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/52940441?v=4" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@hcoco1" />
        <meta name="twitter:title" content="Ivan Arias hcoco1 | Web Developer" />
        <meta name="twitter:description" content="Full Stack Development with Flask and React | Geologist |" />
        <meta name="twitter:image" content="Yhttps://twitter.com/hcoco1/photo" /> {/* Update this with your actual image URL */}

      </Helmet>

      <Header />
      <Outlet />
      <FooterMdb />
    </div>
  );
}
