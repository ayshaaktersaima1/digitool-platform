import { User } from 'lucide-react'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Highlight from './components/Highlight'
import PremiumBtns from './components/PremiumBtns'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import GetStartedSec from './components/GetStartedSec'
import SimplePricingSec from './components/SimplePricingSec'

function App() {

  const fetchData = fetch('/data.json').then(res => res.json());

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Highlight></Highlight>
      <Suspense>
        <PremiumBtns fetchData={fetchData}></PremiumBtns>
      </Suspense>
      <GetStartedSec></GetStartedSec>
      <SimplePricingSec></SimplePricingSec>

      <ToastContainer />
    </>
  )
}

export default App
