import React from 'react';

export default function BlogPortCard(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card h-100 w-100">
                <img src={props.src} className="card-img-top" alt="description"></img>
                <div className="card-body">
                    <p className="card-subtitle mb-2 text-body-secondary text-end">{props.type}</p>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-subtitle mb-2 text-body-secondary text-start">{props.year}</p>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.intro}</p>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.role}</h6>
                    {/* Remove the inner <a> tag */}
                    {/* <a href={props.link} target="_blank" rel="noopener noreferrer">Try it!!</a> */}
                </div>
            </div>
        </a>
    );
}
