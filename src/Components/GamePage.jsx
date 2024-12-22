import React, { useEffect, useState } from 'react'
import GameBoard from './GameBoard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

const GamePage = ({gameMode,goToHomePage}) => {

  const [isPlayer1Trun,setPlayer1Turn] = useState(true) ;

  const [player1WinCount,setPlayer1WinCount] = useState(0) ;
  const [player2WInCount,setPlayer2WinCount] = useState(0) ;
  const [tieCount,setTieCount] = useState(0) ;

  const [gamePageAnimation,setGamePageAnimation] = useState(false)

  useEffect(()=>{
    setGamePageAnimation(true)
  },[])

  return (
    <div className='h-full w-full relative overflow-hidden '>
      <div onClick={goToHomePage} className={`bg-[#2DC19F] h-10 w-10 flex justify-center items-center text-xl font-bold text-white rounded-full border-2 cursor-pointer
           shadow-inner shadow-[#1F8F76] absolute top-3 left-3 transition-transform duration-500 ${(gamePageAnimation)?`scale-100` : `scale-0`} `} >
        <FontAwesomeIcon icon={faLeftLong} />
      </div>

      <div className='h-full w-[330px] m-auto flex justify-center items-center flex-col'>
        <div className='w-auto'>
          <div className={` h-[280px] w-[280px] flex justify-center items-center bg-[#2DC19F] rounded-2xl 
              shadow-lg shadow-[#1F8F76] transition-transform duration-500 ${(gamePageAnimation)?`scale-100` : `scale-0`}`}>
            <GameBoard gameMode={gameMode} isPlayer1Trun={isPlayer1Trun}  setPlayer1Turn={setPlayer1Turn} setPlayer1WinCount={setPlayer1WinCount} 
            setPlayer2WinCount={setPlayer2WinCount} setTieCount={setTieCount} />
          </div>

          <div className={`flex justify-between items-center mt-10 bg-[#2DC19F] w-full text-lg font-bold text-white rounded-2xl p-3 
              shadow-lg shadow-[#1F8F76]  transition-transform duration-500 ${(gamePageAnimation)?`scale-100` : `scale-0`}` }>
            <div className={`h-auto w-auto flex flex-col justify-center items-center border-red-400 border-b-${(isPlayer1Trun)?`4`:`0`}`}>
              <div className={`flex justify-center items-center text-xl `}>
                {player1WinCount}
              </div>
              <div>Player 1</div>
            </div>
            <div className='h-auto w-auto flex flex-col justify-center items-center'>
              <div className='flex justify-center items-center text-xl '>
                {tieCount}
              </div>
              <div>Tie</div>
            </div>
            <div className={`h-auto w-auto flex flex-col justify-center items-center border-red-400 border-b-${(!isPlayer1Trun)?`4`:`0`}`}>
              <div className={`flex justify-center items-center text-xl `}>
                {player2WInCount}
              </div>
              <div>{gameMode}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default GamePage