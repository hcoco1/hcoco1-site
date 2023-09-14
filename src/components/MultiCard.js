import React from 'react';
import { InlineShareButtons } from 'sharethis-reactjs';

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
                <a href={props.link_git} target="_blank" rel="noopener noreferrer">Github Repo</a>
            </div>
            <div className="share-button-custom" style={{marginTop: '20px'}}>
            <InlineShareButtons
                config={{
                    alignment: 'center',
                    color: 'white',
                    enabled: true,
                    font_size: 10,
                    labels: 'cta',
                    language: 'en',
                    networks: ['whatsapp', 'linkedin', 'twitter'],
                    padding: 4,
                    radius: 4,
                    show_total: false,
                    size: 30,
                    url: props.link_app, // Share the link for the current portfolio post
                    title: props.title,  // Share the title of the current post
                    description: props.intro, // Share the intro as the description
                    image: props.src    // Share the image associated with the post
                }}
            />

            </div>

        </div>
    </div>
  );
}
