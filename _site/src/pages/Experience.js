import React from 'react';
import ResumeCard from '../components/ResumeCard';
import { Helmet } from "react-helmet";

export default function Experience() {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4" style={{ marginBottom: '40px' }}>
      <Helmet>
        <title>Experience - Ivan Arias hcoco1</title>
        <meta name="description" content="A detailed look at my experience over the years." />
      </Helmet>
      <div class="col">
        <ResumeCard
          title="Amazon. C.A."
          year="November 2020 - Present"
          role="Sortation Associate"
          description="Scanning, inspecting, and sorting merchandise and packages to reach their intended locations.
                  Implemented safety protocols to minimize workplace accidents and maintained a clean and
                  organized work environment."
          link="https://www.amazon.jobs/en"
        />
      </div>
      <div class="col">
        <ResumeCard
          title="Staffing Solutions"
          year="December 2019 - November 2020"
          role="General Labour"
          description="Perform general landscaping duties, maintaining the cleanliness and appearance of the
                  workplace and providing quality service in a timely and friendly manner."
          link="https://www.livecareer.com/resume/objectives/construction/general-labor"
        />
      </div>
      <div class="col">
        <ResumeCard
          title="Petroleum of Venezuela (PDVSA)"
          year="January 2005 - December 2019"
          role="Sedimentologist & Stratigrapher"
          description="Oil and Gas Project Management with strict adherence to deadlines, Geostatistical Modeling,
                  and GIS-based Thematic Mapping."
          link="http://www.pdvsa.com/index.php?lang=en"
        />
      </div>
    </div>
  );
}


