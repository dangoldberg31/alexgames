// import {useState} from 'react';
import './playerselect.css';
import {PlayerSelect} from './playerselect'

export const PlayerSelectContainer = ({
    player1, setPlayer1, 
    player2, setPlayer2, 
    alex, jess, david,
    pickStartPlayWin, setPickStartPlayWin,
    setPlayerMessage
    }) => {

    if (pickStartPlayWin === 0) {
        return (
            <PlayerSelect 
                setPickStartPlayWin={setPickStartPlayWin}
                player1={player1} setPlayer1={setPlayer1} 
                player2={player2} setPlayer2={setPlayer2} 
                alex={alex} 
                jess={jess} 
                david={david} 
                setPlayerMessage={setPlayerMessage} />
        )   
    } else {
        return null;
    }
}