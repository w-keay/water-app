import React, { useState } from 'react';
import glass from "../assets/glassicon.png";
import "./WaterLogs.css"
const WaterLogs = ({intakes}) => {
  const [activeTab, setActiveTab] = useState('Today');

  return (
    <>   
      <div className='watercont'>
        <div id='tabs'>
          <button style={activeTab === 'Today' ? { borderBottom: '2px solid #0CC0DF' } : {}} onClick={() => setActiveTab('Today')}>Today</button>
          <button style={activeTab === 'Week' ? { borderBottom: '2px solid #0CC0DF' } : {}} onClick={() => setActiveTab('Week')}>Week</button>
          <button style={activeTab === 'Month' ? { borderBottom: '2px solid #0CC0DF' } : {}} onClick={() => setActiveTab('Month')}>Month</button>
        </div>
          
        {intakes.map((intake, index) => (
          <div className='waterintakecont' key={index}>
              <img src={glass} alt="glass" />
              <p>{intake}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default WaterLogs;