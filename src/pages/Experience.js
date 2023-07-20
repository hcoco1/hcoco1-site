import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MultiCard from '../components/MultiCard';

export default function Experience() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4">
                <MultiCard
                  title="Amazon. C.A."
                  year="November 2020 - Present"
                  role="Sortation Associate"
                  description="Scanning, inspecting, and sorting merchandise and packages to reach their intended locations.
                  Implemented safety protocols to minimize workplace accidents and maintained a clean and
                  organized work environment."
                  link="https://www.amazon.jobs/en"
                />
              </div>
              <div className="col-md-6 mb-4">
                <MultiCard
                  title="Staffing Solutions"
                  year="December 2019 - November 2020"
                  role="General Labour"
                  description="Perform general landscaping duties, maintaining the cleanliness and appearance of the
                  workplace and providing quality service in a timely and friendly manner."
                  link="https://www.livecareer.com/resume/objectives/construction/general-labor"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <MultiCard
                  title="Petroleum of Venezuela (PDVSA)"
                  year="January 2005 - December 2019"
                  role="Sedimentologist & Stratigrapher"
                  description="Oil and Gas Project Management with strict adherence to deadlines, Geostatistical Modeling,
                  and GIS-based Thematic Mapping."
                  link="http://www.pdvsa.com/index.php?lang=en"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
