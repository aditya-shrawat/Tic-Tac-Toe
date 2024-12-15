import React from 'react'

const WinnerPopUp = ({winnerIs,gamePageAgain,forContuniuePlaying}) => {
  return (
    <div className='relative flex justify-center items-center'>
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
                    <img src="/play1.png" className='object-contain' onClick={forContuniuePlaying} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WinnerPopUp