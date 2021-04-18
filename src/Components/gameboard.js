import {useEffect, useState} from 'react';
import './gameboard.css';
import {PlayerSelectContainer} from './playerSelectContainer';
import {BoardBoxesContainer} from './boardBoxesContainer';

export const GameBoard = () => {
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [turnOrder, setTurnOrder] = useState([]);
    const [turnCount, setTurnCount] = useState(0);
    const [playerMessage, setPlayerMessage] = useState('Select Players');
    const [playerSelectDisplay, setPlayerSelectDisplay] = useState(true);
    const [boardDisplay, setBoardDisplay] = useState(false);
    const [boardState, setBoardState] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState(null);
    // const [endState, setEndState] = useState(false);
    


    const checkForWinner = () => {        
        if (boardState[0] !== null && boardState[0] === boardState[1] && boardState[0] === boardState[2]) {
            return boardState[0].name 
        } else if (boardState[3] !== null && boardState[3] === boardState[4] && boardState[3] === boardState[5]) {
            return boardState[3].name 
        } else if (boardState[6] !== null && boardState[6] === boardState[7] && boardState[6] === boardState[8]) {
            return boardState[6].name 
        } else if (boardState[0] !== null && boardState[0] === boardState[3] && boardState[0] === boardState[6]) {
            return boardState[0].name 
        } else if (boardState[0] !== null && boardState[0] === boardState[4] && boardState[0] === boardState[7]) {
            return boardState[0].name 
        } else if (boardState[0] !== null && boardState[0] === boardState[5] && boardState[0] === boardState[8]) {
            return boardState[0].name 
        } else if (boardState[0] !== null && boardState[0] === boardState[4] && boardState[0] === boardState[8]) {
            return boardState[0].name 
        } else if (boardState[6] !== null && boardState[6] === boardState[4] && boardState[6] === boardState[0]) {
            return boardState[6].name 
        } else {
            return false;
        }
    }

    const determinePrompt = () => {
        if (playerSelectDisplay === false && checkForWinner() === false) {
            return `It's ${turnOrder[turnCount].name}'s turn.`
        } else {
            return `${checkForWinner()} wins!`
        }
    }

    useEffect(() => {
        setCurrentPlayer(turnOrder[turnCount])
    }, [turnCount, turnOrder])

    // useEffect(() => {
    //     if (currentPlayer !== false) {
    //         return
    //     }
    //     setPlayerMessage(`It's ${currentPlayer.name}'s turn.`)
    // },[currentPlayer])

    useEffect(() => {
        if (playerSelectDisplay === true) {
            return;
        }
        let prompt = determinePrompt()
        setPlayerMessage(prompt);
    }, [playerSelectDisplay, checkForWinner])

//     const endGame = () => {
//         setTimeout(() => setBoardState[0]image(photo),1000);
//         setTimeout(() => setBoardState[0]image(photo),1500);
//         setTimeout(() => setBoardState[0]image(photo),2000);
//         setTimeout(() => setBoardState[3]image(photo),2500);
//         setTimeout(() => setBoardState[4]image(photo),3000);
//         setTimeout(() => setBoardState[5]image(photo),3500);
//         setTimeout(() => setBoardState[6]image(photo),4000);
//         setTimeout(() => setBoardState[7]image(photo),4500);
//         setTimeout(() => setBoardState[8]image(photo),5000)
// }

    return (
        <div>
            <h2 id="playerMessage">{playerMessage}</h2>
            {/* <h4>{player1 ? player1.name : null}</h4> */}
            {/* <h4>{turnOrder ===  'tbd' ? turnOrder : turnOrder.name}</h4> */}
            <PlayerSelectContainer 
                boardDisplay={boardDisplay} setBoardDisplay={setBoardDisplay}
                player1 = {player1} setPlayer1={setPlayer1} 
                player2 = {player2} setPlayer2={setPlayer2} 
                setPlayerMessage={setPlayerMessage}
                setTurnOrder={setTurnOrder}
                turnCount={turnCount}
                playerSelectDisplay={playerSelectDisplay}
                setPlayerSelectDisplay={setPlayerSelectDisplay} />
            <BoardBoxesContainer 
                boardDisplay={boardDisplay} setBoardDisplay={setBoardDisplay}
                player1={player1}
                player2={player2}
                setPlayerMessage={setPlayerMessage}
                boardState={boardState} setBoardState={setBoardState} 
                turnOrder={turnOrder} 
                turnCount={turnCount} setTurnCount={setTurnCount}  
                currentPlayer={currentPlayer}     
                // endState={endState}            
                />
        </div>
    )
}