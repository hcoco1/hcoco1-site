import React from 'react'
import Card from 'react-bootstrap/Card';


export default function MultiCard(props) {
  return (
   
      <Card style={{ width: '21rem' }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="text-muted text-end" ><p className="fs-6">{props.year}</p></Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{props.role}</Card.Subtitle>
          <Card.Text>
            <p className="fs-6">{props.description}</p>
          </Card.Text>
          <Card.Link href={props.link}>{props.title}</Card.Link>
        </Card.Body>
      </Card>
  

  );
}