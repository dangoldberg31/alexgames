import alexPhoto from './alexsunglasses.jpg';
import davidPhoto from './david.jpg';
import jessPhoto from './jess.jpg';
import background from './background.jpg';
import './boxComponent.css';
import {useEffect, useState} from 'react';

export const Box = ({
    styles, id, 
    turnCount, setTurnCount, 
    turnOrder,
    boardState, setBoardState, 
    player1, player2,
    currentPlayer,
    endState
}) => {
        
    const [boxAssign, setBoxAssign] = useState('free');
    const [boxPhoto, setBoxPhoto] = useState(background);

    // useEffect(() => {
    //     if ( endState === true)    
    // })

    const handleClick = (event) => {
        if (boxAssign !== 'free') {
            return;
        }
        setBoxAssign(currentPlayer.name);
        setBoxPhoto(currentPlayer.photo)
        let boardArray = boardState;
        boardArray[id] = turnOrder[turnCount];
        setBoardState(boardArray)

            // if (turnOrder[turnCount] === "Alex") {
            //     setImage(alex);
            // } else if (currentPlayer === "David") {
            //     setImage(david);
            // } else if (currentPlayer === "Jess") {
            //     setImage(jess);
            // }

            setTurnCount((prev) => prev+1)
        // }
}
  
    return (
            <div>
                <img className="box" 
                    id={id}  
                    name = {boxAssign} 
                    onClick={handleClick}  
                    src = {boxPhoto}
                     alt="box" />
            </div>
    )
}

