import React from 'react'
import HomePage from './Components/HomePage'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center relative ' >
      <div className=' h-10 w-10 md:h-14 md:w-14 fixed top-2 right-2'>
        <img src="/soundOn1.png" className='object-contain' />
      </div>
      <HomePage />
    </div>
  )
}

export default App