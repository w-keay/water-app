import React from 'react'
import "./Controls.css"
const Controls = ({addIntake}) => {
  return (
    <>
        <div className='controlcont'>
            <h3>Controls</h3>
            <button onClick={() => addIntake('Water 300ml')}>Add Intake</button>
        </div>
    </>
  )
}

export default Controls