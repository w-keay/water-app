import React from 'react'
import "./Controls.css"
import { toast } from 'react-toastify';
import plus from "../assets/plus.png"
const Controls = ({addIntake}) => {
    const notify = () => toast.info('💧 Wow so easy!');
  return (
    <>
        <div className='controlcont'>
          
            <button onClick={() => { addIntake('Water 300ml'); notify(); }}>
                <img src={plus} alt="plus" />
            </button>       
        </div>
    </>
  )
}

export default Controls