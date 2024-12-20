import React, { useState } from 'react'
import GameBoard from './GameBoard'

const GamePage = ({gameMode,goToHomePage}) => {

  const [isPlayer1Trun,setPlayer1Turn] = useState(true) ;

  const [player1WinCount,setPlayer1WinCount] = useState(0) ;
  const [player2WInCount,setPlayer2WinCount] = useState(0) ;
  const [tieCount,setTieCount] = useState(0) ;

  return (
    <div className='relative overflow-hidden'>
      
      <div className='h-6 w-12 md:h-8 md:w-16 z-20 absolute top-0 left-0' >
        <img src="/goBackBg.png" className='object-contain' onClick={goToHomePage} />
      </div>

      <div className='h-[290px] w-[330px] md:h-[440px] md:w-[490px]'>
        <GameBoard gameMode={gameMode} isPlayer1Trun={isPlayer1Trun}  setPlayer1Turn={setPlayer1Turn} setPlayer1WinCount={setPlayer1WinCount} 
        setPlayer2WinCount={setPlayer2WinCount} setTieCount={setTieCount} />
      </div>

      <div className='flex justify-between items-center mt-10'>
        <div className='h-auto w-auto flex flex-col justify-center items-center'>
          <div className={`flex justify-center ${(isPlayer1Trun)?`bg-red-400`:`bg-transparent`} items-center`}>
            <div className='h-10 w-10 md:h-14 md:w-14 mb-2 '><img src="/settingBg.png" className='object-contain ' /></div>
            <div className=' absolute z-10 font-bold text-2xl md:text-4xl '>{player1WinCount}</div>
          </div>
          <div className='font-bold text-xl md:text-2xl '>Player 1</div>
        </div>
        <div className='h-auto w-auto flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center '>
            <div className='h-10 w-10 md:h-14 md:w-14 mb-2 '><img src="/settingBg.png" className='object-contain ' /></div>
            <div className=' absolute z-10 font-bold text-2xl md:text-4xl '>{tieCount}</div>
          </div>
          <div className='font-bold text-xl md:text-2xl '>Tie</div>
        </div>
        <div className='h-auto w-auto flex flex-col justify-center items-center'>
          <div className={`flex justify-center items-center ${(!isPlayer1Trun)?`bg-red-400`:`bg-transparent`} `}>
            <div className='h-10 w-10 md:h-14 md:w-14 mb-2 '><img src="/settingBg.png" className='object-contain' /></div>
            <div className=' absolute z-10 font-bold text-2xl md:text-4xl '>{player2WInCount}</div>
          </div>
          <div className='font-bold text-xl md:text-2xl '>{gameMode}</div>
        </div>
      </div>

    </div>
  )
}

export default GamePage