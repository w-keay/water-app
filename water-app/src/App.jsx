import { useState, useEffect } from 'react'
import Header from './components/Header'
import './App.css'
import Hydration from './components/Hydration'
import RecentlyAdded from './components/RecentlyAdded'
import WaterLogs from './components/WaterLogs'
import Footer from './components/Footer'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Controls from './components/Controls'
import { generateToken, messaging } from './notifications/firebase'
import { onMessage } from 'firebase/messaging'


function App() {
  // Initialise intakes state
  const [intakes, setIntakes] = useState([]);

useEffect(() =>{
  generateToken();
  onMessage(messaging, (payload) => {
    console.log(payload)
  })
}, [])

  // Function to add a new intake
  const addIntake = (intake) => {
    setIntakes(prevIntakes => [...prevIntakes, intake]);
  }

  return (
  <>
    <Header/>
    <Hydration/>
    <Controls addIntake={addIntake}/> 
    <RecentlyAdded intakes={intakes}/>
    <WaterLogs intakes={intakes}/>
    <Footer />
  </>
  )
}

export default App
