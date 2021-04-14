import {BoardBoxes} from './boardBoxes';

export const BoardBoxesContainer = ({
    pickStartPlayWin, setPickStartPlayWin,
    turnCount, setTurnCount, 
    turnOrder, 
    boardState, setBoardState, 
    setPlayerMessage, 
    setAlex, alex, jess, setJess, david, setDavid
    }) => {
    
    if (pickStartPlayWin === 1) {
        return (
            <BoardBoxes 
                alex={alex} setAlex={setAlex} jess={jess} setjess={setJess} david={david} setDavid={setDavid} 
                turnOrder={turnOrder} turnCount={turnCount} setTurnCount={setTurnCount} 
                boardState={boardState} setBoardState={setBoardState} 
                setPlayerMessage={setPlayerMessage} 
                />
        )
    } else {
            return null;
        }
}