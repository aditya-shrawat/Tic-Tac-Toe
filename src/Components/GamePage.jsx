import React, { useState } from 'react'
import GameBoard from './GameBoard'

const GamePage = ({gameMode,goToHomePage}) => {

  const [isPlayer1Trun,setPlayer1Turn] = useState(true) ;

  const [player1WinCount,setPlayer1WinCount] = useState(0) ;
  const [player2WInCount,setPlayer2WinCount] = useState(0) ;
  const [tieCount,setTieCount] = useState(0) ;

  return (
    <div className='relative overflow-hidden'>
      
      <div className='h-12 w-20 z-20 absolute top-0 left-0' >
        <img src="/goBackBg.png" className='object-contain' onClick={goToHomePage} />
      </div>

      <GameBoard gameMode={gameMode} isPlayer1Trun={isPlayer1Trun}  setPlayer1Turn={setPlayer1Turn} setPlayer1WinCount={setPlayer1WinCount} 
      setPlayer2WinCount={setPlayer2WinCount} setTieCount={setTieCount} />

      <div className='flex justify-between items-center mt-10 bottom-4'>
        <div className='h-36 w-36 flex flex-col justify-center items-center'>
          <div className={`flex justify-center ${(isPlayer1Trun)?`bg-red-400`:`bg-transparent`} items-center`}>
            <img src="/settingBg.png" className='object-contain h-20 w-20 mb-2 ' />
            <div className=' absolute z-10 font-bold text-3xl '>{player1WinCount}</div>
          </div>
          <div className='font-bold text-3xl '>Player 1</div>
        </div>
        <div className='h-36 w-36 flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center '>
            <img src="/settingBg.png" className='object-contain h-20 w-20 mb-2 ' />
            <div className=' absolute z-10 font-bold text-3xl '>{tieCount}</div>
          </div>
          <div className='font-bold text-3xl '>Tie</div>
        </div>
        <div className='h-36 w-36 flex flex-col justify-center items-center'>
          <div className={`flex justify-center items-center ${(!isPlayer1Trun)?`bg-red-400`:`bg-transparent`} `}>
            <img src="/settingBg.png" className='object-contain h-20 w-20 mb-2 ' />
            <div className=' absolute z-10 font-bold text-3xl '>{player2WInCount}</div>
          </div>
          <div className='font-bold text-3xl '>{gameMode}</div>
        </div>
      </div>

    </div>
  )
}

export default GamePage