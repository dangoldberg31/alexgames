import {useState} from 'react';
import './gameboard.css';
import {PlayerSelectContainer} from './playerSelectContainer';
import alexPhoto from './alexsunglasses.jpg';
import davidPhoto from './david.jpg';
import jessPhoto from './jess.jpg';
import {BoardBoxesContainer} from './boardBoxesContainer';

export const GameBoard = () => {
    const [player1, setPlayer1] = useState('Select Player 1');
    const [player2, setPlayer2] = useState('Select Player 2')
    const [turnOrder] = useState([player1, player2, player1, player2, player1, player2, player1, player1, player2, player1]);
    const [turnCount, setTurnCount] = useState(Math.floor(Math.random()*2));
    const [playerMessage, setPlayerMessage] = useState('Select Players');
    const [pickStartPlayWin, setPickStartPlayWin] = useState(0);
    const [boardState, setBoardState] = useState(Array(9).fill(null));
    const [alex, setAlex] = useState({
        name: 'Alex',
        photo: alexPhoto,
        wins: 0,
        losses: 0
    });
    const [david, setDavid] = useState({
        name: 'David',
        photo: davidPhoto,
        wins: 0,
        losses: 0
    });
    const [jess, setJess] = useState({
        name: 'Jess',
        photo: jessPhoto,
        wins: 0,
        losses: 0
    });

    return (
        <div>
            <h2 id="playerMessage">{playerMessage}</h2>
            <PlayerSelectContainer 
                player1 = {player1} setPlayer1={setPlayer1} 
                player2 = {player2} setPlayer2={setPlayer2} 
                setPlayerMessage={setPlayerMessage}
                alex={alex} jess={jess} david={david} 
                pickStartPlayWin={pickStartPlayWin} setPickStartPlayWin={setPickStartPlayWin}   />
            <BoardBoxesContainer 
                player1={player1}
                player2={player2}
                setPlayerMessage={setPlayerMessage}
                boardState={boardState} setBoardState={setBoardState} 
                alex={alex} setAlex={setAlex} 
                jess={jess} setjess={setJess} 
                david={david} setDavid={setDavid} 
                turnOrder={turnOrder} 
                turnCount={turnCount} setTurnCount={setTurnCount} 
                pickStartPlayWin={pickStartPlayWin} setPickStartPlayWin={setPickStartPlayWin}                                
                />
        </div>
    )
}