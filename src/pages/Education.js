import React from 'react';
import { Helmet } from 'react-helmet';
import ResumeCard from '../components/ResumeCard';
import { educationData } from '../data/data'


export default function Education() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4" style={{ marginBottom: '40px' }}>
      <Helmet>
        <title>Education - Ivan Arias hcoco1</title>
        <meta name="description" content="Education - Ivan Arias hcoco1" />
      </Helmet>

      {educationData.map((education, index) => (
        <div className="col" key={index}>
          <ResumeCard
            title={education.title}
            year={education.year}
            role={education.role}
            description={education.description}
            link={education.link}
          />
        </div>
      ))}
    </div>
  );
}
