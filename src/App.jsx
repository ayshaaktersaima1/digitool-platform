import { User } from 'lucide-react'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Highlight from './components/Highlight'
import PremiumBtns from './components/PremiumBtns'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import GetStartedSec from './components/GetStartedSec'
import SimplePricingSec from './components/SimplePricingSec'
import Footer from './components/Footer'

function App() {

  const fetchData = fetch('/data.json').then(res => res.json());
  const [navCount, setNavCount] = useState(0);

  return (
    <>
      <NavBar navCount={navCount}></NavBar>
      <Banner></Banner>
      <Highlight></Highlight>
      <Suspense>
        <PremiumBtns fetchData={fetchData} navCount={navCount} setNavCount={setNavCount}></PremiumBtns>
      </Suspense>
      <GetStartedSec></GetStartedSec>
      <SimplePricingSec></SimplePricingSec>
      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
