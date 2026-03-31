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


const fetchData = fetch('/data.json').then(res => res.json());
function App() {


  const [navCount, setNavCount] = useState(0);

  return (
    <>
      <NavBar navCount={navCount}></NavBar>
      <Banner></Banner>
      <Highlight></Highlight>
      <Suspense fallback={<div className='flex justify-center items-center'><span className="mx-2 md:mx-[10%] loading loading-spinner loading-xl text-center"></span></div>}>
        <PremiumBtns fetchData={fetchData} navCount={navCount} setNavCount={setNavCount}></PremiumBtns>
      </Suspense>
      <GetStartedSec></GetStartedSec>
      <SimplePricingSec></SimplePricingSec>
      <Footer></Footer>

      <ToastContainer position="top-left" />
    </>
  )
}

export default App
