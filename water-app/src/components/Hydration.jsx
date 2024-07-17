import React from 'react';
import './Hydration.css';

class Hydration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waterLevel: -100, // This -100 is graphic relevant as opposed to number, if you need help ask me :) - Will
      waterAmount: 2000,
      incrementAmount: 50 // New state to keep track of the increment amount
    };
  }

  handleInputChange = (event) => {
    this.setState({ incrementAmount: Number(event.target.value) });
  }

  addWater = () => {
    this.setState(prevState => {
      const newLevel = prevState.waterLevel + (prevState.incrementAmount / 2000) * 100; // Adjust the increment based on input
      const newAmount = prevState.waterAmount - prevState.incrementAmount;
      return {
        waterLevel: newLevel <= 0 ? newLevel : 0, // Cap the water level at 0%
        waterAmount: newAmount >= 0 ? newAmount : 0 // Cap the water amount at 0ml
      };
    });
  };

  render() {
    const { waterLevel, waterAmount, incrementAmount } = this.state;
    const waterStyle = { '--water-top': `${waterLevel}%` };

    return (
      <>
        <div className="container">
          <div className="water" style={waterStyle}>
            <div className="water-text">{waterAmount}ml</div>
          </div>
          <div className="input-container">
            <input
              type="number"
              value={incrementAmount}
              onChange={this.handleInputChange}
              min="50"
              step="50"
              className="input-field"
            /><span style={{ color: 'black' }}> ml</span>
            <button onClick={this.addWater} style={{ marginLeft: '10px' }}>Drink Water</button>
          </div>
        </div>
      </>
    );
  }
}

export default Hydration;