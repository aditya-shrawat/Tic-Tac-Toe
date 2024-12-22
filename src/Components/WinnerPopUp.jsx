import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft,faPlay } from '@fortawesome/free-solid-svg-icons';

const WinnerPopUp = ({winnerIs,handlePlayResetBtn}) => {

    const [animationOn,setAnimationOn] = useState(false) ;
    const [hideAnimation,setHideAnimation] = useState(false) ;

    useEffect(()=>{
        setAnimationOn(false) ;
        setHideAnimation(false)
        
        const timer = setTimeout(() => {
            setAnimationOn(true);
        }, 10);
  
        return () => clearTimeout(timer);
    },[winnerIs])

    const handleBtnClicks = (btnClicked)=>{
        setHideAnimation(true) ;
        setTimeout(()=>{
            setAnimationOn(false);
            console.log("btn clicked ",btnClicked)
            handlePlayResetBtn(btnClicked)
        },500)
    }

  return (
    <div className={`h-full w-full flex justify-center items-center transition-transform duration-500 ${(animationOn && !hideAnimation)?`scale-100` : `scale-0`}`}>
        <div className='absolute h-full w-full flex justify-center items-center bg-[#2DC19F] p-6 rounded-2xl'>
            <div className=' z-20'>
                <h1 className=' text-4xl text-white font-bold text-center'>{winnerIs} win</h1>
                <div className='flex justify-center items-center mt-8'>
                    <div onClick={()=>{handleBtnClicks('Reset')}} className='h-12 w-12 flex justify-center items-center text-2xl font-bold text-white rounded-full border-2 mr-5 cursor-pointer shadow-inner shadow-[#1F8F76]'>
                        <FontAwesomeIcon icon={faRotateLeft} />
                    </div>
                    <div onClick={()=>{handleBtnClicks('Play')}} className='h-12 w-12 flex justify-center items-center text-2xl font-bold text-white rounded-full border-2 cursor-pointer shadow-inner shadow-[#1F8F76]'>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WinnerPopUp