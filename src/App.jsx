import { User } from 'lucide-react'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Highlight from './components/Highlight'
import PremiumBtns from './components/PremiumBtns'
import { Suspense } from 'react'

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
    </>
  )
}

export default App
