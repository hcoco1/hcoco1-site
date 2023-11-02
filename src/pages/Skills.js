import React from 'react';
import { Helmet } from "react-helmet";
import SkillCard from '../components/SkillCard'
import { skills } from '../data/data'

export default function Skills() {

  return (
    <div className="container">
      <Helmet>
        <title>Skills - Ivan Arias hcoco1</title>
        <meta name="description" content="An overview of my skills." />
      </Helmet>

      <div className="row">
        {skills.map((skill, index) => (
          <>
            <SkillCard key={index} {...skill} />
            {(index + 1) % 3 === 0 && <div className="w-100"></div>}
          </>

        ))}
      </div>
    </div>
  );
}
