import React from 'react'
import HomePage from './Components/HomePage'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center relative ' >
      <div className='h-20 w-20 fixed top-2 right-2'>
        <img src="/soundOn1.png" className='object-contain' />
      </div>
      <HomePage />
    </div>
  )
}

export default App