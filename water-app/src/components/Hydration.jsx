import React, { useEffect } from 'react';
import './Hydration.css';

const Hydration = ({ waterLevel, waterAmount }) => {
  useEffect(() => {
    // Code to trigger animation on intake change
    const animationElement = document.getElementById('hydration-animation');
    if (animationElement) {
      animationElement.classList.add('animate');
      setTimeout(() => {
        animationElement.classList.remove('animate');
      }, 1000); // Duration of the animation in milliseconds
    }
  }, [waterLevel]);

  const waterStyle = { '--water-top': `${waterLevel}%` };

  return (
    <div className="container">
      <div className="water" style={waterStyle}>
        <div className="water-text">{waterAmount}ml</div>
      </div>
    </div>
  );
};

export default Hydration;
