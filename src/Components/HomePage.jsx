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
        <img src="/heading.png" className='mb-3' />
        <button onClick={()=>handleBtnClick('AI')} className='bg-green-500 p-2 w-1/2 rounded-full text-lg font-semibold text-white' >Play with AI</button>
        <button onClick={()=>handleBtnClick('Friend')} className='bg-green-500 p-2 w-1/2 rounded-full text-lg font-semibold text-white' >Play with a Friend</button>
        </>
        }
    </div>
  )
}

export default HomePage