import React, { useEffect, useState } from 'react'
import WinnerPopUp from './WinnerPopUp';

const GameBoard = ({gameMode,isPlayer1Trun,setPlayer1Turn,setPlayer1WinCount,setPlayer2WinCount,setTieCount}) => {

    const [startingTurn,setStartingTurn] = useState(isPlayer1Trun) ; 

    const [board,setBoard] = useState(Array(9).fill(''));  // game board
    const [xTurn,setxTurn] = useState(true) ;  // to change turn type (x/o)
    const [winnerIs,setWinner] = useState(null)  // to store winner

    const [boardAnimationOn, setBoardAnimationOn] = useState(false); // animation for game board

    // to manage player1(human) move type (x/o)
    const [humanMoveType,setHumanMoveType] = useState('x') ;   // initialy it is 'x'
    const [aiShouldStart,setAiShouldStart] = useState(false)

    useEffect(() => {
        setBoardAnimationOn(true);
    }, []);  // animation on initial load

    useEffect(() => {
        // short delay so react can manage states clearly
        const timer = setTimeout(() => {
            setBoardAnimationOn(true);
        }, 10);
  
        return () => clearTimeout(timer);
    }, [startingTurn]);  // load whenever the GameBoard rerender (whenever the starting turn get change it means a new game get start)

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

    // checking if there is any winner or not
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

    // when the first move is of Ai
    useEffect(()=>{
        if(gameMode==='AI'&& aiShouldStart && !isPlayer1Trun && xTurn){
            setTimeout(()=>{
                handleAimove(board,xTurn,isPlayer1Trun);
                setAiShouldStart(false);
            },1000)
            setAiShouldStart(false);
        }
    },[aiShouldStart,isPlayer1Trun,gameMode])

    // to handle click on the gird/game board
    const handleBoardClick =(index)=>{
        if(board[index]!=='' || winnerIs) 
            return ;

        const newBoard = [...board] ;
        newBoard[index] = xTurn?'x':'o' ;
        setBoard(newBoard) ;

        // checking for winner after every move
        const winner = checkWinnigPatterns(newBoard);

        // checking is the game get tie ?
        if(!newBoard.includes('') && !winner){
            setTieCount(prevCount=>prevCount+1) ;
            setTimeout(() => {
                setBoardAnimationOn(false) ;
                setWinner('Tie');
            }, 500);
            return ;
        }

        // if winner get found
        if(winner){
            setTimeout(()=>{
                setBoardAnimationOn(false) ;
                (isPlayer1Trun)?handlePlayer1Win():handlePlayer2Win();  
            }
            ,500)
        }
        else{  // no winner found then change turn type (x/o) and turn 
            if(gameMode==='AI' ){
                setxTurn(!xTurn) ;
                setPlayer1Turn(!isPlayer1Trun) ;
                setTimeout(()=>{
                    handleAimove(newBoard,!xTurn,!isPlayer1Trun);
                },1000)
            }
            else{
                setxTurn(!xTurn) ;
                setPlayer1Turn(!isPlayer1Trun) ;
            }
        }
    };

    // if player 1 get win 
    const handlePlayer1Win =()=>{
        setWinner('Player 1')
        setPlayer1WinCount((prevScore)=>prevScore+1)
    }

    // if player 2 get win
    const handlePlayer2Win =()=>{
        setWinner(gameMode) 
        setPlayer2WinCount((prevScore)=>prevScore+1)
    }

    // handling ai move 
    const handleAimove=(currentBoard,varXTurn,varIsPlayer1Turn)=>{
        const aiMovePlace = findAiMovePlace(currentBoard);

        if(aiMovePlace>=0){
            const newBoard = [...currentBoard];
            newBoard[aiMovePlace]= (varXTurn)?'x':'o';
            setBoard(newBoard); // update the board after the ai move 

            // checking for winner after every move
            const winner = checkWinnigPatterns(newBoard);

            // checking is the game get tie ?
            if(!newBoard.includes('') && !winner){
                setTieCount(prevCount=>prevCount+1) ;
                setTimeout(() => {
                    setBoardAnimationOn(false) ;
                    setWinner('Tie');
                }, 500);
                return ;
            }

            // if winner get found
            if(winner){
                setTimeout(()=>{
                    setBoardAnimationOn(false) ;
                    (varIsPlayer1Turn)?handlePlayer1Win():handlePlayer2Win();  
                }
                ,500)
            }
            else{ // no winner found then change turn type (x/o) and turn 
                setxTurn(!varXTurn) ;
                setPlayer1Turn(!varIsPlayer1Turn) ;
            }
            
        }
    }

    function findAiMovePlace(currentBoard){
        const humanSymbol = humanMoveType ;
        const aiSymbol = (humanMoveType==='x')?'o':'x';
        for(let pattern of winnigPattern){
            const movesArr = [currentBoard[pattern[0]], currentBoard[pattern[1]], currentBoard[pattern[2]]];

            // checking if there ai is winning and a empty place is available
            if( (movesArr.filter((move)=>move===aiSymbol).length === 2) && (movesArr.includes('')) ){
                const idx = movesArr.indexOf('') // finding index of empty space index in moveArr 
                return pattern[idx] ; // return the empty position on board
            }

            // checking if there player1 / human is winning and a empty place is available then block the win
            if( (movesArr.filter((move)=>move===humanSymbol).length === 2) && (movesArr.includes('')) ){
                const idx = movesArr.indexOf('') // finding index of empty space index in moveArr 
                return pattern[idx] ; // return the empty position on board
            }
        }

        // if there is both of these posibilities are not avaliable
        return currentBoard.findIndex(move => move === '');
    }


    // to come back to the game board screen 
    const gamePageAgain = ()=>{
        setWinner(null) ;
    }

    // if user Want to contuniue the game or reset the game
    const handlePlayResetBtn=(btnClicked)=>{
        const nextStartingTurn = !startingTurn;
        setPlayer1Turn(!startingTurn)  ;
        if(gameMode==='AI'){
            const changedHumanMoveType = (humanMoveType==='x')?'o':'x'
            setHumanMoveType(changedHumanMoveType);
            if (!nextStartingTurn) {
                setAiShouldStart(true);
            }
        }
        setStartingTurn(!startingTurn) ;
        setWinner(null)
        cleanBoard() ;
        if(btnClicked==='Reset'){
            setPlayer1WinCount(0); setPlayer2WinCount(0);setTieCount(0);
        }
        gamePageAgain()
    }

    // to clean the game board 
    const cleanBoard =()=>{
        setBoard(Array(9).fill('')) ;
    }

  return (
    (winnerIs)?
    <WinnerPopUp winnerIs={winnerIs} handlePlayResetBtn={handlePlayResetBtn} /> :
    <>
    
    <div className={`relative flex justify-center items-center  h-full w-full transition-transform duration-500 ${(boardAnimationOn)?`scale-100` : `scale-0`} `}>
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