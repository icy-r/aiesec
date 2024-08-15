// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import LandingPage from './components/Landing'
import Home from './components/Home'
import Header from './components/Header'
import Alljob from './components/Alljob.jsx'
import Job1 from './components/Job1'
// import '../src/assets/bg1.webp'
import New1 from './components/New1.jsx'
import Job2 from './components/Job2.jsx'
import Job3 from './components/Job3.jsx'
import Job4 from './components/Job4.jsx'
import Job5 from './components/Job5.jsx'
import Job6 from './components/Job6.jsx'
import Job8 from './components/Job8.jsx'
import Job7 from './components/Job7.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className='bg-gradient-to-r from-purple-400 to-pink-950 flex items-center justify-center flex-col' >
      
      <New1 />
      <Alljob />
      <Job1 />
      <Job2 />
      <Job3 />
      <Job4 />
      <Job5 />
      <Job6 />
      <Job7 />
      <Job8 />
      {/* <Home />
      
      <Job1 /> */}
      {/* <LandingPage /> */}
    </div>
    </>
  )
}

export default App
