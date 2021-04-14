import alex from './alexsunglasses.jpg';
import david from './david.jpg';
import jess from './jess.jpg';
import background from './background.jpg';
import './boxComponent.css';
import {useState} from 'react';

export const Box = ({
    styles, id, 
    currentPlayer, 
    setTurnCount, 
    setFirstTurn, 
    boardState, setBoardValues, 
    state, 
}) => {
    // const [state, setState] = useState(null);
    const [image, setImage] = useState(background);  
        
    const handleClick = (event) => {
        // if (boardValues[id] !== null) {
        //     return;
        // }
        // let boardArray = boardValues;
        // boardArray[id] = currentPlayer;
        // setBoardValues(boardArray)
        // setFirstTurn(false);
        // if (currentPlayer === "Alex") {
        //     setImage(alex);
        // } else if (currentPlayer === "David") {
        //     setImage(david);
        // } else if (currentPlayer === "Jess") {
        //     setImage(jess);
        // }
        // setTurnCount((prev) => prev+1)
}
  
    return (
            <div>
                <img className="box" style={styles}
                    id={id}  
                    state = {boardState[id]} 
                    onClick={handleClick}  
                    src={image}
                     alt="box" />
            </div>
    )
}

