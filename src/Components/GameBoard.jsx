import React, { useEffect, useState } from 'react'
import WinnerPopUp from './WinnerPopUp';

const GameBoard = ({isPlayer1Trun,setPlayer1Turn,setPlayer1WinCount,setPlayer2WinCount,setTieCount}) => {

    const [startingTurn,setStartingTurn] = useState(isPlayer1Trun) ; 

    const [board,setBoard] = useState(Array(9).fill(''));
    const [xTurn,setxTurn] = useState(true) ;
    const [winnerIs,setWinner] = useState(null)

    const [moveCount,setMoveCount] = useState(1) ;
    const [boardAnimationOn, setBoardAnimationOn] = useState(false); // animation for game board

    useEffect(() => {
        setBoardAnimationOn(true);
    }, []);

    useEffect(() => {
        // short delay so react can manage states clearly
        const timer = setTimeout(() => {
            setBoardAnimationOn(true);
        }, 10);
  
        return () => clearTimeout(timer);
    }, [startingTurn]);  // load whenever the GameBoard rerender

    let winnigPattern = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ];

    const checkWinnigPatterns = (newBoard)=>{
        for (let pattern of winnigPattern){
            const move1 = newBoard[pattern[0]] ;
            const move2 = newBoard[pattern[1]] ;
            const move3 = newBoard[pattern[2]] ;

            if(move1!=='' && move2!=='' && move3!==''){
                if(move1===move2 && move2===move3){
                    return move1;
                }
            }
        }
        return null ;
    }

    const handleBoardClick =(index)=>{
        if(board[index]!=='' || winnerIs) 
            return ;

        setMoveCount(prevCount=>prevCount+1) ; // counting moves 

        const newBoard = [...board] ;
        newBoard[index] = xTurn?'x':'o' ;
        setBoard(newBoard) ;

        const winner = checkWinnigPatterns(newBoard);

        if(moveCount===9 && !winner){
            setTieCount(prevCount=>prevCount+1) ;
            setTimeout(() => {
                setBoardAnimationOn(false) ;
                setWinner('Tie');
            }, 500);
            return ;
        }
        
        if(!winner){
            setPlayer1Turn(!isPlayer1Trun) ;
        }

        if(winner){

            setTimeout(()=>{
                setBoardAnimationOn(false) ;
                (isPlayer1Trun)?handlePlayer1Win():handlePlayer2Win();  
            }
            ,500)
        }
        else{
            setxTurn(!xTurn) ;
        }
    };

    // if player 1 get win 
    const handlePlayer1Win =()=>{
        setWinner('Player 1')
        setPlayer1WinCount((prevScore)=>prevScore+1)
    }

    // if player 2 get win
    const handlePlayer2Win =()=>{
        setWinner('Player 2') 
        setPlayer2WinCount((prevScore)=>prevScore+1)
    }

    // to come back to the game board screen 
    const gamePageAgain = ()=>{
        setWinner(null) ;
    }

    // if user Want to contuniue the game
    const forContuniuePlaying=()=>{
        setPlayer1Turn(!startingTurn)  ;
        setStartingTurn(!startingTurn) ;
        setWinner(null)
        cleanBoard() ;
        setMoveCount(1) ;
        gamePageAgain()
    }

    // to clean the game board 
    const cleanBoard =()=>{
        setBoard(Array(9).fill('')) ;
    }

  return (
    (winnerIs)?
    <WinnerPopUp winnerIs={winnerIs} gamePageAgain={gamePageAgain} forContuniuePlaying={forContuniuePlaying}  /> :
    <>
    
    <div className={`relative flex justify-center items-center  h-[500px] w-[570px] transition-transform duration-500 ${(boardAnimationOn)?`scale-100` : `scale-0`} `}>
        <img src="/board2.png" className='scale-110 absolute object-cover' />
        <div className='grid grid-cols-3 gap-2 z-10' >
            {
                board.map((value,index)=>(
                    <button key={index} className=" bg-red-400 w-[85px] h-[85px] flex items-center justify-center text-6xl font-bold cursor-pointer" 
                      onClick={()=>handleBoardClick(index)} >
                        {value}
                    </button>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default GameBoard