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
              <h2 className="subtitle"><a href='/resume'>My name is Ivan</a>; </h2>
              <h>thank you for stopping by!</h>
            </div>
          </div>
        </div>
      </header>



    </>






  );
}
