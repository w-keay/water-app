import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Hydration from './components/Hydration'
import RecentlyAdded from './components/RecentlyAdded'
import WaterLogs from './components/WaterLogs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Hydration/>
  <RecentlyAdded/>
  <WaterLogs/>
  <Footer />
    </>
  )
}

export default App
