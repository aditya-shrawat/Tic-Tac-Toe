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
        <div className='absolute h-full w-full'>
            <img src="/winnerPopUpBg.png" className='object-contain h-full w-full' />
        </div>
        <div className=' z-20'>
            <h1 className=' text-xl md:text-3xl font-bold text-center'>{winnerIs} {<br/>} win</h1>
            <div className='flex justify-center items-center mt-2'>
                <div className='h-10 w-10 md:h-14 md:w-14 mr-2'>
                    <img src="/reset1.png" className='object-contain' onClick={()=>{handleBtnClicks('Reset')}} />
                </div>
                <div className='h-10 w-10 md:h-14 md:w-14'>
                    <img src="/play1.png" className='object-contain' onClick={()=>{handleBtnClicks('Play')}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WinnerPopUp