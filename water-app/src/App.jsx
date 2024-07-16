import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Hydration from './components/Hydration'
import RecentlyAdded from './components/RecentlyAdded'
import WaterLogs from './components/WaterLogs'
import Footer from './components/Footer'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from './components/Controls'

function App() {
  // Initialise intakes state
  const [intakes, setIntakes] = useState([]);

  // Function to add a new intake
  const addIntake = (intake) => {
    setIntakes(prevIntakes => [...prevIntakes, intake]);
  }
  const notify = () => toast.info('💧 Wow so easy!');

  return (
    <>
  <Header/>
  <Hydration/>
  <Controls addIntake={addIntake}/> 
  <RecentlyAdded intakes={intakes}/>
  <WaterLogs intakes={intakes}/>
  <button onClick={notify}>Notify!</button>
  <Footer />
    </>
  )
}

export default App
