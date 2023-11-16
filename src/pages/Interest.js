import React from 'react';
import { Helmet } from "react-helmet";
import InterestCard from '../components/InterestCard';
import { interests } from '../data/data'; 

export default function Interest() {
  return (
    <div className="container">
      <Helmet>
        <title>Interests</title>
        <meta name="description" content="Interests - Ivan Arias hcoco1" />
      </Helmet>

      <div className="row row-cols-3 g-4">
        {interests.map((interest, index) => (
          <InterestCard key={index} {...interest} />
        ))}
      </div>
    </div>
  );
}
