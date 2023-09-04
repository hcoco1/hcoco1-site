import React from 'react'

export default function MultiCard(props) {
    return (
        <div class="card h-100">
           
            <div class="card-body">
                <p class="card-subtitle mb-2 text-body-secondary text-end">{props.type}</p>
                <h5 class="card-title">{props.title}</h5>
                <p class="card-subtitle mb-2 text-body-secondary text-start">{props.year}</p>
                <p class="card-text">{props.description}</p>
                <p class="card-text">{props.intro}</p>
                <h6 class="card-subtitle mb-2 text-body-secondary">{props.role}</h6>
                <a href={props.link} target="_blank" rel="noopener noreferrer">Try it!!</a>
            </div>
        </div>
    );
}