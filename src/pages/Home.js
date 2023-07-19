import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardHeader,
  MDBCardFooter,

} from 'mdb-react-ui-kit';


export default function Home() {
  return (

    <div>
      <MDBCard style={{ maxWidth: '100%' }} alignment='center'>
        <MDBRow className='g-0'>
          <MDBCardHeader></MDBCardHeader>
          <MDBCol md='4'>

            <MDBCardImage  src='https://hcoco1.github.io/hcoco1-site-bootstrap/assets/img/profile.jpg' alt='...' fluid className='rounded-circle' />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>
                <MDBCardText>
                  <h3 style={{ marginTop:'0.7em' }}>Ivan <span style={{ color: 'var(--orange1)', fontWeight: 'bold' }}>Arias</span></h3>
                </MDBCardText>
                <MDBCardText>
                  <h5>Software Engineer Student </h5>
                </MDBCardText>
                <MDBCardText>
                  <h5>  Full Stack Developer </h5>
                </MDBCardText>
                <MDBCardText>
                  <h6>Orlando. Florida. USA.</h6>
                  <a href="mailto:name@email.com">hcoco1@hotmail.com</a>
                </MDBCardText>
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
  
      <MDBCard alignment='center'>
        <MDBCardHeader>About</MDBCardHeader>
        <MDBCardBody>

          <MDBCardText>
            Hi! My name is Ivan Arias, and I am learning to build front-ends with ReactJS. Also, I am gaining a
            thorough understanding of Flask to create JSON APIs and then combine
            them with a scalable React front end. I have a background in geological
            modeling and mapping software (GIS). I want to apply all my experience and
            the tech skill set I am building at Flatiron School to help develop modern web applications.
          </MDBCardText>
      
        </MDBCardBody>
        <MDBCardFooter className='text-muted'><small className='text-muted'>Last updated 3 mins ago</small></MDBCardFooter>
      </MDBCard>
  
      <MDBCard alignment='center'>
      <MDBCardHeader>Social Media Links</MDBCardHeader>
      <MDBCardBody>
        <MDBRow className="justify-content-center mb-4">
          <MDBCol size="auto">
            <a className="social-icon" href="https://www.linkedin.com/in/arias-ivan-hcoco1/" aria-label='linkedin' target="blank">
              <i className="fab fa-linkedin-in fa-2xl"></i>
            </a>
          </MDBCol>
          <MDBCol size="auto">
            <a className="social-icon" href="https://github.com/hcoco1" aria-label='github' target="_blank">
              <i className="fab fa-github fa-2xl" style={{ color: 'black' }}></i>
            </a>
          </MDBCol>
          <MDBCol size="auto">
            <a className="social-icon" href="https://twitter.com/hcoco1" aria-label='twitter' target="_blank">
              <i className="fab fa-twitter fa-2xl"></i>
            </a>
          </MDBCol>
          <MDBCol size="auto">
            <a className="social-icon" href="https://codepen.io/ivan-arias-de-lima" aria-label='codepen' target="_blank">
              <i className="fa-brands fa-codepen fa-2xl" style={{ color: 'black' }}></i>
            </a>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'><small className='text-muted'> </small></MDBCardFooter>
    </MDBCard>
    </div>


  );
}
