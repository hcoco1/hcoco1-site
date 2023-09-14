import React from 'react';


export default function App() {
  return (



    <div class="d-flex justify-content-around bg-secondary-subtle ">
      <div class="p-3">
        <a className="social-icon" href="https://www.linkedin.com/in/arias-ivan-hcoco1/" aria-label='linkedin' target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in fa-2xl"></i>
        </a>
      </div>
      <div class=" p-3">
        <a className="social-icon" href="https://github.com/hcoco1" aria-label='github' target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2xl" style={{ color: 'black' }}></i>
        </a>
      </div>
      <div class=" p-3">
        <a className="social-icon" href="https://twitter.com/hcoco1" aria-label='twitter' target="_blank" rel="noopener noreferrer">
          <i className="fab fa-x-twitter fa-2xl"></i>
        </a>
      </div>
      <div class="p-3">
        <a className="social-icon" href="https://codesandbox.io/u/hcoco1" aria-label='codesandbox' target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-codepen fa-2xl" style={{ color: 'black' }}></i>
        </a>
      </div>
    </div>




  );
}
