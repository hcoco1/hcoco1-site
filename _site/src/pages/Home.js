import React from 'react';
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Ivan Arias - Home</title>
        <meta name="description" content="Welcome to Ivan Arias' personal website. Discover more about Ivan, his experiences, skills, and more." />
      </Helmet>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="fw-light">Welcome to my Site</h1>
              <p className="lead">My name is Ivan; thank you for stopping by! I'll let you know a little about me.</p>
            </div>
          </div>
        </div>
      </header>



    </>






  );
}
