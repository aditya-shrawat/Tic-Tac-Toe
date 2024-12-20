import React, { useEffect, useState } from 'react'

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
    <div className={`h-full w-full relative flex justify-center items-center transition-transform duration-500 ${(animationOn && !hideAnimation)?`scale-100` : `scale-0`}`}>
        <div>
            <img src="/winnerPopUpBg.png" className='object-contain' />
        </div>
        <div className='absolute '>
            <h1 className='text-5xl font-bold'>{winnerIs} win</h1>
            <div className='flex justify-center items-center'>
                <div>
                    <img src="/reset1.png" className='object-contain' onClick={()=>{handleBtnClicks('Reset')}} />
                </div>
                <div>
                    <img src="/play1.png" className='object-contain' onClick={()=>{handleBtnClicks('Play')}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WinnerPopUp