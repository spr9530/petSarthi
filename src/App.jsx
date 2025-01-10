import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchCard from './components/SearchCard'
import OvalWindow from './layout/OvalWindow'
import Infobar from './components/Infobar'
import Imagebox1 from './components/Imagebox1'
import Imagebox2 from './components/Imagebox2'
import SepratorCenter from './components/SepratorCenter'
import Infobar2 from './components/Infobar2'
import Imagebox3 from './components/Imagebox3'
import Factscard from './components/Factscard'

import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    {/* <SearchCard></SearchCard>
    <OvalWindow></OvalWindow>
    <Infobar></Infobar>
    <Imagebox1></Imagebox1>
    <Imagebox2></Imagebox2>
    <SepratorCenter></SepratorCenter>
    <Infobar2></Infobar2>
    <Imagebox3></Imagebox3>
    <Factscard></Factscard> */}

    <Homepage />
    </>
  )
}

export default App
