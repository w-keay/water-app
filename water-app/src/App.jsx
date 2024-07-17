import { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import Hydration from './components/Hydration';
import RecentlyAdded from './components/RecentlyAdded';
import WaterLogs from './components/WaterLogs';
import Footer from './components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from './components/Controls';
import { generateToken, messaging } from './notifications/firebase';
import { onMessage } from 'firebase/messaging';

function App() {
  const [intakes, setIntakes] = useState([]);
  const [totalIntake, setTotalIntake] = useState(0);
  const [waterLevel, setWaterLevel] = useState(-100); // Initial water level for animation
  const [waterAmount, setWaterAmount] = useState(2000); // Total water amount (in ml)

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);

  const addIntake = (intake) => {
    const intakeAmount = parseInt(intake.match(/\d+/)[0], 10); // Extract the numerical value from the string
    setIntakes(prevIntakes => [...prevIntakes, intake]);
    setTotalIntake(prevTotal => prevTotal + intakeAmount);
    toast.info(`💧 Added ${intakeAmount}ml of water!`);
    updateWaterLevel(intakeAmount);
  };

  const updateWaterLevel = (intakeAmount) => {
    setWaterAmount(prevAmount => {
      const newAmount = prevAmount - intakeAmount;
      const newLevel = waterLevel + (intakeAmount / 2000) * 100; // Adjust the increment based on input
      setWaterLevel(newLevel <= 0 ? newLevel : 0); // Cap the water level at 0%
      return newAmount >= 0 ? newAmount : 0; // Cap the water amount at 0ml
    });
  };

  return (
    <>
      <Header />
      <Hydration waterLevel={waterLevel} waterAmount={waterAmount} />
      <Controls addIntake={addIntake} />
      <RecentlyAdded intakes={intakes} />
      <WaterLogs intakes={intakes} />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
