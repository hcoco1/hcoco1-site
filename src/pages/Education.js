import React from 'react';

import MultiCard from '../components/MultiCard';

export default function Education() {
  return (


    <div class="row row-cols-1 row-cols-md-2 g-4">

      <div class="col">
        <MultiCard
          title="Flatiron School"
          year="October 2023 - Feb 2023"
          role="Software Engineer Student"
          description="Program Objectives: Build a full-stack web application with a React frontend, a Flask backend, and a PostgreSQL database."
          link="https://flatironschool.com/"
        />
      </div>

      <div class="col">
        <MultiCard
          title="Valencia College"
          year="December 2022 - Apr 2022"
          role="Intensive English Program (IEP) Student"
          description="The Intensive English Program (IEP) is accredited by the Commission on English Language Program Accreditation."
          link="https://valenciacollege.edu/academics/continuing-education/intensive-english-program/program-description.php"
        />
      </div>



      <div class="col">
        <MultiCard
          title="Florida Department of Education"
          year="May 2022 - Jan 2022"
          role="High School equivalency Diploma - GED"
          description="The General Education Development (GED) diploma is a valuable credential that can open doors to various education and career opportunities."
          link="https://ged.com/"
        />
      </div>

      <div class="col">
        <MultiCard
          title="Central University of Venezuela"
          year="Nov 2013 - Nov 2010"
          role="M.Sc. in Geology (unfinished)"
          description="The objective of this master's degree is to generate a graduate with greater versatility in the field of industry and the applied sciences of Geology."
          link="https://www.timeshighereducation.com/world-university-rankings/universidad-central-de-venezuela-ucv"
        />
      </div>


      <div class="col">
        <MultiCard
          title="Central University of Venezuela"
          year="Dec 2004 - Feb 1999"
          role="Geological Engineering degree"
          description="The objective of this degree is to generate a graduate with greater versatility in the field of industry and the applied sciences of Geology."
          link="https://www.timeshighereducation.com/world-university-rankings/universidad-central-de-venezuela-ucv"
        />
      </div>
    </div >



  );
}
