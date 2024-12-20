import React, { useEffect, useState } from 'react'
import GamePage from './GamePage'

const HomePage = () => {

    const [gameMode,setGameMode] = useState(null) ;

    const handleBtnClick=(mode)=>{
        setGameMode(mode) ;
    }

    const goToHomePage =()=>{
        setGameMode(null)
    }

  return (
    <div className=' min-h-64 w-auto flex flex-col justify-evenly items-center '>
        {gameMode?
        <GamePage gameMode={gameMode} goToHomePage={goToHomePage}  /> :
        <>
        <div className='mb-3 h-2/3 w-2/3 md:h-full md:w-full'><img src="/heading.png" className='object-contain' /></div>
        <div className='w-auto h-auto  flex justify-between items-center flex-col'>
          <button onClick={()=>handleBtnClick('AI')} className='bg-green-500 p-2 px-4 w-full rounded-full text-base md:text-lg font-semibold text-white mb-4' >Play with AI</button>
          <button onClick={()=>handleBtnClick('Player 2')} className='bg-green-500 p-2 px-4 w-full rounded-full text-base md:text-lg font-semibold text-white' >Play with a Friend</button>
        </div>
        </>
        }
    </div>
  )
}

export default HomePage