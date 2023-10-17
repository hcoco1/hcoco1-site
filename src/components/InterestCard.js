import React from 'react';

const InterestCard = ({ href, iconName, color, interestName }) => (
    <a href={href} className="text-decoration-none col">
        <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center p-3">
                <i className={iconName} style={{ color }}></i>
                <p>{interestName}</p>
            </div>
        </div>
    </a>
);

export default InterestCard;
