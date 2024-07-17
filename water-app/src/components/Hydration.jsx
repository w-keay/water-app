import React from 'react'; 
import './Hydration.css'; 

class Hydration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waterLevel: -100, // This -100 is graphic relevant as opposed to number, if you need help ask me :) - Will
      waterAmount: 2000
    };
  }

  addWater = () => { 
    this.setState(prevState => {
      const newLevel = prevState.waterLevel + 5; // Increase by 5 each time (5/100 * 20 = 100/100)
      const newAmount = prevState.waterAmount - 100; // Base 2000ml - 100ml * 20
      return {
        waterLevel: newLevel <= 0 ? newLevel : 0, // Cap the water level at 0%
        waterAmount: newAmount >= 0 ? newAmount : 0 // Cap the water amount at 0ml
      };
    });
  };

  render() {
    const { waterLevel, waterAmount } = this.state;
    const waterStyle = { '--water-top': `${waterLevel}%` }; 

    return (
      <>
        <div className="container"> {}
          <div className="water" style={waterStyle}> {}
            <div className="water-text">{waterAmount}ml</div> {}
          </div>
        </div>
        <button onClick={this.addWater}>Add 100ml</button> {}
      </>
    );
  }
}

export default Hydration;