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
    <div className='h-full w-full flex flex-col justify-center items-center '>
        {gameMode?
        <GamePage gameMode={gameMode} goToHomePage={goToHomePage}  /> :
        <>
        <div className='mb-10 '><img src="/heading.png" className='object-contain' /></div>
        <div className='w-auto h-auto  flex justify-between items-center flex-col'>
          <button onClick={()=>handleBtnClick('AI')} className='bg-[#2DC19F] p-2 px-4 w-full rounded-full text-lg font-semibold text-white mb-5 shadow-lg shadow-[#1F8F76]' >Play with AI</button>
          <button onClick={()=>handleBtnClick('Player 2')} className='bg-[#2DC19F] p-2 px-4 w-full rounded-full text-lg font-semibold text-white shadow-lg shadow-[#1F8F76]' >Play with a Friend</button>
        </div>
        </>
        }
    </div>
  )
}

export default HomePage