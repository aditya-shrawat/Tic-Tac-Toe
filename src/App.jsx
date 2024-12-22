import React from 'react'
import HomePage from './Components/HomePage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className='h-screen w-screen' >
      <div className='h-screen min-w-[330px] max-w-md m-auto  flex justify-center items-center relative'>
        <div className='absolute top-3 right-3 bg-[#2DC19F] h-10 w-10 flex justify-center items-center text-lg font-bold text-white rounded-full border-2 cursor-pointer shadow-inner shadow-[#1F8F76]'>
          <FontAwesomeIcon icon={faVolumeHigh} />
        </div>
        <HomePage />
      </div>
    </div>
  )
}

export default App