import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function App() {
  return (



    <div class="d-flex justify-content-around bg-secondary-subtle ">

      <div class=" p-3">
        <a className="social-icon" href="https://github.com/hcoco1" aria-label='github' target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2xl" style={{ color: 'black' }}></i>
        </a>
      </div>
      <div class="p-3">
        <a className="social-icon" href="https://www.linkedin.com/in/hcoco1/" aria-label='linkedin' target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in fa-2xl"></i>
        </a>
      </div>
      <div class=" p-3">
        <a className="social-icon" href="https://twitter.com/hcoco1" aria-label='twitter' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} size="2xl" style={{color: "#000000",}} />
        </a>
      </div>
    </div>




  );
}
