import {BoardBoxes} from './boardBoxes';

export const BoardBoxesContainer = ({
    pickStartPlayWin, setPickStartPlayWin,
    boardDisplay,
    turnCount, setTurnCount, 
    turnOrder, 
    boardState, setBoardState, 
    setPlayerMessage, 
    player1, player2,
    currentPlayer,
    endState
    }) => {

    if (boardDisplay === true) {
        return (
            <div> 
                <BoardBoxes 
                turnOrder={turnOrder} turnCount={turnCount} setTurnCount={setTurnCount} 
                boardState={boardState} setBoardState={setBoardState} 
                setPlayerMessage={setPlayerMessage} 
                player1={player1} player2={player2}
                currentPlayer={currentPlayer}
                endState={endState}   
                />
            </div>
        )
    } else {
        return null;
    }
}