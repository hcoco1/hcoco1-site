import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillCard = ({ IconComponent, iconName, color, skillName, percentage }) => (
    <div className="col d-flex align-items-center justify-content-center m-3">
        <div className="d-flex flex-column align-items-center">
            <div style={{ width: 70, height: 70, position: 'relative' }}>
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: color,
                    })}
                />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    {IconComponent ? <IconComponent size={40} color={color} /> : <i className={iconName} style={{ color }}></i>}
                </div>
            </div>
            <p className="icon-text">{skillName}</p>
        </div>
    </div>
);

export default SkillCard;


