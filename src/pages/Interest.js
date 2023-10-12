import React from 'react';
import { Helmet } from "react-helmet";

export default function Interest() {
  return (
    <div className="container">
      <Helmet>
        <title>Interests - Ivan Arias hcoco1</title>
        <meta name="description" content="An overview at my interests." />
      </Helmet>
      <div className="row row-cols-3 g-4">

        <a href="https://chess.com" className="text-decoration-none col">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center p-3">
              <i className="fas fa-chess fa-2x" style={{ color: '#81f89f' }}></i>
              <p>Chess</p>
            </div>
          </div>
        </a>
        <a href="https://scrimba.com/" className="text-decoration-none col">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center p-3">
              <i className="fas fa-laptop-code fa-2x" style={{ color: '#5638b9' }}></i>
              <p>Coding</p>
            </div>
          </div>
        </a>

        <a href="https://theweek.com/" className="text-decoration-none col">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center p-3">
              <i className="fas fa-landmark fa-2x" style={{ color: '#a0bd38' }}></i>
              <p>Politics</p>
            </div>
          </div>
        </a>

        <a href="https://photographylife.com/" className="text-decoration-none col">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center p-3">
              <i className="fas fa-camera-retro fa-2x" style={{ color: '#343d3b' }}></i>
              <p>Photography</p>
            </div>
          </div>
        </a>

        <a href="https://www.nationalgeographic.com/magazine/" className="text-decoration-none col">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center p-3">
              <i className="fas fa-microscope fa-2x" style={{ color: '#1cc427' }}></i>
              <p>Science</p>
            </div>
          </div>
        </a>

        <a href="https://open.spotify.com/user/ivan.arias23?si=e96f5e710e3b4b1a" className="text-decoration-none col">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center p-3">
              <i className="fas fa-music fa-2x" style={{ color: '#bd5d38' }}></i>
              <p>Music</p>
            </div>
          </div>
        </a>

        <a href="https://www.wsj.com/podcasts/the-journal" className="text-decoration-none col">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center p-3">
              <i className="fas fa-podcast fa-2x" style={{ color: '#1c70d0' }}></i>
              <p>Podcasts</p>
            </div>
          </div>
        </a>

        <a href="https://www.economist.com/" className="text-decoration-none col">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center p-3">
              <i className="fas fa-money-bill-alt fa-2x" style={{ color: '#ed0404' }}></i>
              <p>Economics</p>
            </div>
          </div>
        </a>

        <a href="https://www.raspberrypi.org/learn/" className="text-decoration-none col">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center p-3">
              <i className="fab fa-raspberry-pi fa-2x" style={{ color: '#ed0404' }}></i>
              <p>Pi</p>
            </div>
          </div>
        </a>
      </div>


    </div>
  );
}
