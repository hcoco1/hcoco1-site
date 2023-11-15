import React from 'react';
import ResumeCard from '../components/ResumeCard';
import { Helmet } from 'react-helmet';
import { experienceData } from '../data/data'

export default function Experience() {


  return (
    <div className="row row-cols-1 row-cols-md-2 g-4" style={{ marginBottom: '40px' }}>
      <Helmet>
        <title>Experience - Ivan Arias hcoco1</title>
        <meta name="description" content="Experience - Ivan Arias hcoco1" />
      </Helmet>
      {experienceData.map((experience, index) => (
        <div className="col" key={index}>
          <ResumeCard
            title={experience.title}
            year={experience.year}
            role={experience.role}
            description={experience.description}
            link={experience.link}
          />
        </div>
      ))}
    </div>
  );
}
