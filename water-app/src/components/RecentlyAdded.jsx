import React, { useState } from 'react'
import "./RecentlyAdded.css"
import glass from "../assets/glassicon.png"
const RecentlyAdded = ({intakes}) => {
 

  return (
    <>   
      <div className='recentcont'>
        <h3>Recently Added</h3>
 
        {intakes.map((intake, index) => (
        <div className='intakecont' key={index}>
            <img src={glass} alt="glass" />
            <p>{intake}</p>
        </div>
))}
      </div>
    </>  
  )
}

export default RecentlyAdded