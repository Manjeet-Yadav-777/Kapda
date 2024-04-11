import React from 'react'
import Home from './Components/Home/Home'
import Fashion from './Top/Fashion'

import {Route,Routes} from 'react-router-dom'
import Signup from './Components/Signup'
import Help from './Components/Help'

function App() {
  return (
    <>
        {/* <Home/>
        <Fashion/> */}

        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/Fashion" element = {<Fashion/>}/>
            <Route path = "/signup" element = {<Signup/>}/>
            <Route path = "/help" element = {<Help/>}/>
        </Routes>
    </>
  )
}

export default App