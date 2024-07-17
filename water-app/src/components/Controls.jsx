import React, { useState } from 'react';
import "./Controls.css";
import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';
import plus from "../assets/plus.png";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

const Controls = ({ addIntake }) => {
    const [show, setShow] = useState(false);
    const [incrementAmount, setIncrementAmount] = useState(50);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const notify = (amount) => toast.info(`💧 Added ${amount}ml of water!`);

    const handleInputChange = (event) => {
        setIncrementAmount(event.target.value);
    };

    const handleAddWater = () => {
        addIntake(`Water ${incrementAmount}ml`);
        notify(incrementAmount);
        handleClose();
    };

    return (
        <>
            <div className='controlcont'>
                <button onClick={handleShow}>
                    <img src={plus} alt="plus" />
                </button>
            </div>

            <Modal show={show} onHide={handleClose} className="custom-modal">
                <Modal.Body>
                    <div className="input-container">
                        <input
                            type="number"
                            value={incrementAmount}
                            onChange={handleInputChange}
                            min="50"
                            step="50"
                            className="input-field"
                        />
                        <span> ml</span>
                        <Button onClick={handleAddWater} style={{ marginLeft: '10px' }}>
                            Drink Water
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Controls;
