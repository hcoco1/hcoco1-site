import React from 'react';

export default function Interest() {
  return (
    <div className="container">
      <div className="row row-cols-3 g-4">
        <div className="col d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center p-3">
            <i className="fas fa-chess fa-2x" style={{ color: '#81f89f' }}></i>
            <p>Chess</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center p-3">
            <i className="fas fa-laptop-code fa-2x" style={{ color: '#5638b9' }}></i>
            <p>Coding</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center p-3">
            <i className="fas fa-landmark fa-2x" style={{ color: '#a0bd38' }}></i>
            <p>Politics</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center p-3">
            <i className="fas fa-camera-retro fa-2x" style={{ color: '#343d3b' }}></i>
            <p>Photography</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center p-3">
            <i className="fas fa-microscope fa-2x" style={{ color: '#1cc427' }}></i>
            <p>Science</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center p-3">
            <i className="fas fa-music fa-2x" style={{ color: '#bd5d38' }}></i>
            <p>Music</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center p-3">
            <i className="fas fa-podcast fa-2x" style={{ color: '#1c70d0' }}></i>
            <p>Podcasts</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center p-3">
            <i className="fas fa-money-bill-alt fa-2x" style={{ color: '#ed0404' }}></i>
            <p>Economics</p>
          </div>
        </div>

        <div className="col d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center p-3">
            <i className="fab fa-raspberry-pi fa-2x" style={{ color: '#ed0404' }}></i>
            <p>Pi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
