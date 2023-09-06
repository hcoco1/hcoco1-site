import React from 'react'

export default function MultiCard(props) {
  return (
<div className="card h-100 w-100">
    <img src={props.src} className="card-img-top" alt="description" />
    <div className="card-body">
        <p className="card-subtitle mb-2 text-body-secondary text-end">{props.type}</p>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-subtitle mb-2 text-body-secondary text-start">{props.year}</p>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.intro}</p>
        <h6 className="card-subtitle mb-2 text-body-secondary">{props.role}</h6>
        
        <div className="d-flex justify-content-between">
            <a href={props.link_app} target="_blank" rel="noopener noreferrer">Try it!!</a>
            <a href={props.link_git} target="_blank" rel="noopener noreferrer">Github Repo</a> {/* Adjust with your second link prop */}
        </div>
    </div>
</div>

  );
}




