// Importing useState and useEffect from React
import { useState, useEffect } from 'react';
// Importing the Header component
import Header from './components/Header';
// Importing the App.css file
import './App.css';
// Importing the Hydration component
import Hydration from './components/Hydration';
// Importing the RecentlyAdded component
import RecentlyAdded from './components/RecentlyAdded';
// Importing the WaterLogs component
import WaterLogs from './components/WaterLogs';
// Importing the Footer component
import Footer from './components/Footer';
// Importing toast and ToastContainer from react-toastify
import { toast, ToastContainer } from 'react-toastify';
// Importing the styles for react-toastify
import 'react-toastify/dist/ReactToastify.css';
// Importing the Controls component
import Controls from './components/Controls';
// Importing generateToken and messaging from notifications/firebase
import { generateToken, messaging } from './notifications/firebase';
// Importing onMessage from firebase/messaging
import { onMessage } from 'firebase/messaging';

function App() {
  // State for intakes, with initialisation from localStorage or empty array
  const [intakes, setIntakes] = useState(() => {
    const savedIntakes = localStorage.getItem('intakes');
    return savedIntakes ? JSON.parse(savedIntakes) : [];
  });
  // State for totalIntake, with initialisation from localStorage or 0
  const [totalIntake, setTotalIntake] = useState(() => {
    const savedTotalIntake = localStorage.getItem('totalIntake');
    return savedTotalIntake ? JSON.parse(savedTotalIntake) : 0;
  });
  // State for waterLevel, with initialisation from localStorage or -100
  const [waterLevel, setWaterLevel] = useState(() => {
    const savedWaterLevel = localStorage.getItem('waterLevel');
    return savedWaterLevel ? JSON.parse(savedWaterLevel) : -100;
  });
  // State for waterAmount, with initialisation from localStorage or 2000
  const [waterAmount, setWaterAmount] = useState(() => {
    const savedWaterAmount = localStorage.getItem('waterAmount');
    return savedWaterAmount ? JSON.parse(savedWaterAmount) : 2000;
  });

  // useEffect for generating token and handling messages
useEffect(() => {
  // Generating token
  generateToken();
  // Handling messages with onMessage
  onMessage(messaging, (payload) => {
    console.log(payload);
  });

  // Getting current time
  const now = new Date();
  const currentUtcTime = now.getTime();
  // Calculating offset in milliseconds
  const offset = now.getTimezoneOffset() * 60000;
  // Setting UK midnight time
  const ukMidnight = new Date(currentUtcTime + offset).setUTCHours(24, 0, 0, 0);

  // Calculating time to midnight
  const timeToMidnight = ukMidnight - currentUtcTime;

  // Setting a timer to reset daily intakes at midnight
  const midnightTimer = setTimeout(() => {
    resetDailyIntakes();
    // Setting interval to reset every 24 hours
    setInterval(resetDailyIntakes, 24 * 60 * 60 * 1000);
  }, timeToMidnight);

  // Clearing the timer on cleanup
  return () => clearTimeout(midnightTimer);
}, []);

  // useEffect to update localStorage for intakes when intakes change
useEffect(() => {
  localStorage.setItem('intakes', JSON.stringify(intakes));
}, [intakes]);

// useEffect to update localStorage for totalIntake when totalIntake changes
useEffect(() => {
  localStorage.setItem('totalIntake', JSON.stringify(totalIntake));
}, [totalIntake]);

// useEffect to update localStorage for waterLevel when waterLevel changes
useEffect(() => {
  localStorage.setItem('waterLevel', JSON.stringify(waterLevel));
}, [waterLevel]);

// useEffect to update localStorage for waterAmount when waterAmount changes
useEffect(() => {
  localStorage.setItem('waterAmount', JSON.stringify(waterAmount));
}, [waterAmount]);

  // Function to add intake and update total intake
const addIntake = (intake) => {
  // Extract the numerical value from the string
  const intakeAmount = parseInt(intake.match(/\d+/)[0], 10);
  // Update intakes with the new intake
  setIntakes(prevIntakes => [...prevIntakes, intake]);
  // Update total intake with the new intake amount
  setTotalIntake(prevTotal => prevTotal + intakeAmount);
  // Display a toast message for the added water intake
  toast.info(`💧 Added ${intakeAmount}ml of water!`);
  // Update the water level based on the intake amount
  updateWaterLevel(intakeAmount);
};

// Function to update the water level based on the intake amount
const updateWaterLevel = (intakeAmount) => {
  setWaterAmount(prevAmount => {
    // Calculate the new water amount
    const newAmount = prevAmount - intakeAmount;
    // Calculate the new water level based on the intake amount
    const newLevel = waterLevel + (intakeAmount / 2000) * 100;
    // Cap the water level at 0%
    setWaterLevel(newLevel <= 0 ? newLevel : 0);
    // Cap the water amount at 0ml
    return newAmount >= 0 ? newAmount : 0;
  });
};

  // Function to reset daily intakes and clear localStorage
const resetDailyIntakes = () => {
  // Reset intakes to an empty array
  setIntakes([]);
  // Reset total intake to 0
  setTotalIntake(0);
  // Reset water level to -100
  setWaterLevel(-100);
  // Reset water amount to 2000
  setWaterAmount(2000);
  // Remove intakes from localStorage
  localStorage.removeItem('intakes');
  // Remove totalIntake from localStorage
  localStorage.removeItem('totalIntake');
  // Remove waterLevel from localStorage
  localStorage.removeItem('waterLevel');
  // Remove waterAmount from localStorage
  localStorage.removeItem('waterAmount');
};


  // Return the JSX elements for the App component
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




