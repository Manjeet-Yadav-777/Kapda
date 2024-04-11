import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Fash from '../Components/Fash'

function Fashion() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
          <Fash/>
        </div>
        <Footer/>    
    </>
  )
}

export default Fashion