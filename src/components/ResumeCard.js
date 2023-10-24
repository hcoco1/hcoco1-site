import React from 'react';

export default function ResumeCard(props) {
    return (
        <div className="card text-bg-light border-secondary  h-100 w-100">
            <div className="card-body">
                <p className="card-subtitle mb-2 text-body-secondary text-end">{props.type}</p>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-subtitle mb-2 text-body-secondary text-start">{props.year}</p>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.intro}</p>
                <h6 className="card-subtitle mb-2 text-body-secondary text-end">{props.role}</h6>

            </div>
        </div>
    );
}
