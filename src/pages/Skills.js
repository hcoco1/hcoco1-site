import React from 'react';
import { Helmet } from "react-helmet";

export default function Skills() {
  return (
    <div className="container">
      <Helmet>
        <title>Skills - Ivan Arias</title>
        <meta name="description" content="An overview at my skills." />
      </Helmet>

      <div className="row">
        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fab fa-react fa-2x" style={{ color: '#3366c4' }}></i>
            <p className="icon-text">React</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fab fa-react fa-2x" style={{ color: '#3366c4' }}></i>
            <p className="icon-text">React Nat</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fab fa-bootstrap fa-2x" style={{ color: '#563d7c' }}></i>
            <p className="icon-text">Bootstrap</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fab fa-sass fa-2x" style={{ color: '#c92f2f' }}></i>
            <p className="icon-text">Sass</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fab fa-figma fa-2x" style={{ color: '#563d7c' }}></i>
            <p className="icon-text">Figma</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fab fa-github fa-2x" style={{ color: 'black' }}></i>
            <p className="icon-text">GitHub</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fab fa-js fa-2x" style={{ color: '#b6d14d' }}></i>
            <p className="icon-text">JavaScript</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fab fa-html5 fa-2x" style={{ color: '#11cee3' }}></i>
            <p className="icon-text">HTML</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fab fa-css3-alt fa-2x" style={{ color: '#c52727' }}></i>
            <p className="icon-text">CSS</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fab fa-python fa-2x" style={{ color: '#1e1e1f' }}></i>
            <p className="icon-text">Python</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fas fa-database fa-2x" style={{ color: '#d0bc35' }}></i>
            <p className="icon-text">SQL</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center m-3">
          <div className="d-flex flex-column align-items-center">
            <i className="fab fa-node-js fa-2x" style={{ color: '#1aa842' }}></i>
            <p className="icon-text">Node.js</p>
          </div>
        </div>
      </div>
    </div>
  );
}


