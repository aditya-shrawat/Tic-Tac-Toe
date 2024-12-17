import React, { useEffect, useState } from 'react'

const WinnerPopUp = ({winnerIs,gamePageAgain,forContuniuePlaying}) => {

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

    const handlePlayBtnClick = ()=>{
        setHideAnimation(true) ;
        setTimeout(()=>{
            // setHideAnimation(false) ;
            setAnimationOn(false);
            forContuniuePlaying()
        },500)
    }

  return (
    <div className={`relative flex justify-center items-center transition-transform duration-500 ${(animationOn && !hideAnimation)?`scale-100` : `scale-0`}`}>
        <div>
            <img src="/winnerPopUpBg.png" className='object-contain' />
        </div>
        <div className='absolute '>
            <h1 className='text-5xl font-bold'>{winnerIs} win</h1>
            <div className='flex justify-center items-center'>
                <div>
                    <img src="/reset1.png" className='object-contain' onClick={gamePageAgain} />
                </div>
                <div>
                    <img src="/play1.png" className='object-contain' onClick={handlePlayBtnClick} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WinnerPopUp