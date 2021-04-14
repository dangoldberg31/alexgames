import {useState} from 'react';
import './playerselect.css';
import alexPhoto from './alexsunglasses.jpg';
import davidPhoto from './david.jpg';
import jessPhoto from './jess.jpg';
import background from './background.jpg';

export const PlayerSelect = ({
    setPickStartPlayWin,
    player1, setPlayer1, 
    player2, setPlayer2, 
    alex, jess, david, 
    setPlayerPrompt
    }) => {
    const [photo1, setPhoto1] = useState(background);
    const [photo2, setPhoto2] = useState(background);

    const handlePlayer1Change = event => {
        if (event.target.id === 'Alex1') {
            setPlayer1(alex.name);
            setPhoto1(alexPhoto);
        } else if (event.target.id === 'Jess1') {
            setPhoto1(jessPhoto);
            setPlayer1(jess.name);
        } else if (event.target.id === 'David1') {
            setPhoto1(davidPhoto);
            setPlayer1(david.name);
        }
    }

    const handlePlayer2Change = event => {
        if (event.target.id === 'Alex2') {
            setPlayer2(alex.name);
            setPhoto2(alexPhoto);
        } else if (event.target.id === 'Jess2') {
            setPhoto2(jessPhoto);
            setPlayer2(jess.name);
        } else if (event.target.id === 'David2') {
            setPhoto2(davidPhoto);
            setPlayer2(david.name);
        }
    }
    
    const handleFormSubmit = () => {
        setPickStartPlayWin(1)
    }
    
        
    return (
            <div id="playerselect">
                <div className="playerchoicecontainer">
                    <h3>{player1}</h3>
                    <img id="photo1" class="playerPhoto" src={photo1} alt="player1"/>
                    <div className="formcontainer">
                        <div className="spacer"></div>
                        <form className="playerRadio">
                            <input id="Alex1" name="player1" type="radio" value={alex} onChange={handlePlayer1Change} />
                            <label>Alex</label><br/>
                            <input id="David1" name="player1" type="radio" value={david} onChange={handlePlayer1Change} />
                            <label>David</label><br/>
                            <input id="Jess1" name="player1" type="radio" value={jess} onChange={handlePlayer1Change} />
                            <label>Jess</label><br/>
                            </form>
                        <div className="spacer"></div>
                    </div>
                </div>
                <div className="playerchoicecontainer">
                    <h3>{player2}</h3>
                    <img id="photo2" class="playerPhoto" src={photo2} alt="player2"/>
                    <div className="formcontainer">
                        <div className="spacer"></div>
                        <form className="playerRadio">
                            <input id="Alex2" name="player2" type="radio" value={alex} onChange={handlePlayer2Change} />
                            <label>Alex</label><br/>
                            <input id="David2" name="player2" type="radio" value={david} onChange={handlePlayer2Change} />
                            <label>David</label><br/>
                            <input id="Jess2" name="player2" type="radio" value={jess} onChange={handlePlayer2Change} />
                            <label>Jess</label><br/>
                        </form>
                        <div className="spacer"></div>
                    </div>
                </div>
                <br />
                <div>
                    <form className="start" onSubmit={handleFormSubmit}>
                        <input className="submit"  type="submit" />
                    </form>
                </div>
            </div>
        )
    }