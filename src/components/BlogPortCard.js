import React from 'react';

export default function BlogPortCard(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card h-100 w-100">
                <img src={props.src} className="card-img-top" alt="description"></img>
                <div className="card-body">
                    <p className="card-subtitle fw-bolder text-body-secondary text-start mb-2">{props.type}</p>

                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{props.title}</h5>
                        {props.badge ? (
                            <p className="card-subtitle  badge bg-primary text-start mb-5">{props.badge}</p>
                        ) : null}
                    </div>


                    <p className="card-subtitle mb-2 text-body-secondary text-start">{props.year}</p>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.intro}</p>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.role}</h6>
                    {/* Tags */}
                    <div className="tags">
                        {props.tags && props.tags.length > 0 && (
                            <div className="tags">
                                {props.tags.map((tag, index) => (
                                    <span key={index} className="badge badge-dark me-1 text-lowercase">{tag}</span>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </a>
    );
}


