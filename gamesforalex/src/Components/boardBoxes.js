// import { useEffect } from 'react';
import './boardBoxes.css';
import {Box} from './box';
// import alex from '../alexsunglasses.jpg';
// import david from '../david.jpg';
// import jess from '../jess.jpg';
// import background from '../background.jpg';

export const BoardBoxes = ({
    boardBoxesComponentState, 
    turnCount, setTurnCount, 
    turnOrder, 
    boardState, setBoardState, 
    winner, setWinner, 
    setGameState, 
    currentPlayer, 
    setFirstTurn, 
    player1, player2, 
    alex, jess, david, 
    }) => {
    
        // (`${turnOrder[turnCount]} won the coin toss!`);

    const boxNums = [0, 1, 2, 3, 4, 5, 6, 7, 8]; 

    const styles = {
        textAlign: 'center',
        backgroundColor: 'hsl(206, 50%, 80%)',
        width: 162,
        height: 162
    }

    // useEffect(() => {
    //     let check = checkForWinner();
    //     if (check === false) {
    //         return 
    //     } else if (check === true) {
    //         endGame()
    //     }
    // }, [turnCount, setTurnCount])

    // useEffect(() => {
    //     if (checkForWinner() === true) {
    //         endGame()
    //     }
    // })

    // const checkForWinner = () => {        
    //     if ((boardValues[0] !== null && boardValues[0] === boardValues[1] && boardValues[0] === boardValues[2]) || 
    //     (boardValues[3] !== null && boardValues[3] === boardValues[4] && boardValues[3] === boardValues[5]) ||
    //     (boardValues[6] !== null && boardValues[6] === boardValues[7] && boardValues[6] === boardValues[8]) ||
    //     (boardValues[0] !== null && boardValues[0] === boardValues[3] && boardValues[0] === boardValues[6]) ||
    //     (boardValues[0] !== null && boardValues[0] === boardValues[4] && boardValues[0] === boardValues[7]) ||
    //     (boardValues[0] !== null && boardValues[0] === boardValues[5] && boardValues[0] === boardValues[8]) ||
    //     (boardValues[0] !== null && boardValues[0] === boardValues[4] && boardValues[0] === boardValues[8]) ||
    //     (boardValues[6] !== null && boardValues[6] === boardValues[4] && boardValues[6] === boardValues[0])) {
    //         setWinner(currentPlayer);
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // const endGame = () => {
    //     setGameState(winner +" wins!")
    //         // setTimeout(() => setboardValues[0]image(photo),1000);
    //         // setTimeout(() => setboardValues[0]image(photo),1500);
    //         // setTimeout(() => setboardValues[0]image(photo),2000);
    //         // setTimeout(() => setboardValues[3]image(photo),2500);
    //         // setTimeout(() => setboardValues[4]image(photo),3000);
    //         // setTimeout(() => setboardValues[5]image(photo),3500);
    //         // setTimeout(() => setboardValues[6]image(photo),4000);
    //         // setTimeout(() => setboardValues[7]image(photo),4500);
    //         // setTimeout(() => setboardValues[8]image(photo),5000)
    // }

        return (
            <div id="boardcontainer" className="section" style={{boardBoxesComponentState}}>
                    <div className="gameboardplayercontainer">
                        <img id="photo1" className="playerphoto" src={alex} alt="player 1" />
                        <span className="name">{player1}</span>
                    </div>
                    <div id="exterior">
                        <div id="board" >
                            {boxNums.map(i => {
                                return( 
                                    <Box className="box" id={i} style={styles} 
                                        setTurnCount={setTurnCount} 
                                        boardState={boardState} setBoardState={setBoardState} 
                                        currentPlayer={currentPlayer} 
                                        setFirstTurn={setFirstTurn}/>  
                                )
                            })}
                        </div>
                    </div>
                    <div className="gameboardplayercontainer">
                        <img id="photo2" className="playerphoto" src={david} alt="player 2"/>
                        <span className="name">{player2}</span>
                    </div>
                </div>
            

        )
}