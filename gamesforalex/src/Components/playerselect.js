// import {useEffect} from 'react';
import './playerselect.css';
import alexPhoto from './alexsunglasses.jpg';
import davidPhoto from './david.jpg';
import jessPhoto from './jess.jpg';
import background from './background.jpg';

export const PlayerSelect = ({
    player1, setPlayer1, 
    player2, setPlayer2, 
    setPlayerMessage,
    setPlayerSelectDisplay,
    boardDisplay, setBoardDisplay,
    turnOrder, setTurnOrder,
    turnCount
    }) => {
    
    const alex = 
            {name: 'Alex',
            photo: alexPhoto,
            wins: 0,
            losses: 0
        };
        const david = 
            {name: 'David',
            photo: davidPhoto,
            wins: 0,
            losses: 0
        };
        const jess = 
            {name: 'Jess',
            photo: jessPhoto,
            wins: 0,
            losses: 0
        };


    const handlePlayer1Change = event => {
        if (event.target.id === 'Alex1') {
            setPlayer1(alex);
        } else if (event.target.id === 'Jess1') {
            setPlayer1(jess);
        } else if (event.target.id === 'David1') {
            setPlayer1(david);
        }
    }

    const handlePlayer2Change = event => {
        if (event.target.id === 'Alex2') {
            setPlayer2(alex);
        } else if (event.target.id === 'Jess2') {
            setPlayer2(jess);
        } else if (event.target.id === 'David2') {
            setPlayer2(david);
        }
    }

    const setOrder = () => {
        let playerOrder = [];
        let randoCalcission = Math.floor(Math.random()*2);
        for (let i = 9 + randoCalcission; i>0; i--) {
            if (i % 2 === 0) {
                playerOrder.push(player1);
            } else {
                playerOrder.push(player2);
            }
            }
        return playerOrder;
    }  

    const checkError = () => {
        if (player1 === 'Select Player 1' || player2 === 'Select Player 2') {
            return 'Select Both Players'
        } else if (player1 === player2) {
            return 'Select Two Different Players';
        } else {
            return false;
        }
    }
    
    const advance = () => {
        let order = setOrder()            
        setTurnOrder(order)
        setBoardDisplay(true);
        setPlayerSelectDisplay(false);
        setPlayerMessage(`${order[turnCount].name} wins the coin toss!`)
    }

    const handleClick = () => {
        if (checkError() === false) {
            advance()
            return;
        }
        setPlayerMessage(checkError());
    }

        
    return (
            <div id="playerselect">
                {/* <h4>{turnOrder}</h4> */}
                <div className="flexspacer"></div>
                <div className="playerchoicecontainer">
                    <h3>{player1 ? player1.name : 'Select Player 1'}</h3>
                    <img id="photo1" class="playerPhoto" src={player1 ? player1.photo: background} alt="player1"/>
                    <div className="formcontainer">
                        <div className="spacer"></div>
                        <form className="playerRadio">
                            <input id="Alex1" name="player1" type="radio"  onChange={handlePlayer1Change}  />
                            <label>Alex</label><br/>
                            <input id="David1" name="player1" type="radio"  onClick={handlePlayer1Change} />
                            <label>David</label><br/>
                            <input id="Jess1" name="player1" type="radio"  onClick={handlePlayer1Change} />
                            <label>Jess</label><br/>
                        </form>
                        <div className="spacer"></div>
                    </div>
                </div>
                <button className="submit"  type="submit" onClick={handleClick} >Play</button>
                <div className="playerchoicecontainer">
                    <h3>{player2 ? player2.name : 'Select Player 2'}</h3>
                    <img id="photo2" class="playerPhoto" src={player2 ? player2.photo: background} alt="player2"/>
                    <div className="formcontainer">
                        <div className="spacer"></div>
                        <form className="playerRadio">
                            <input id="Alex2" name="player2" type="radio" value={alex} onClick={handlePlayer2Change} />
                            <label>Alex</label><br/>
                            <input id="David2" name="player2" type="radio" value={david} onClick={handlePlayer2Change} />
                            <label>David</label><br/>
                            <input id="Jess2" name="player2" type="radio" value={jess} onClick={handlePlayer2Change} />
                            <label>Jess</label><br/>
                        </form>
                        <div className="spacer"></div>
                    </div>
                </div>
                <div className="flexspacer"></div>              
            </div>
        )
    }