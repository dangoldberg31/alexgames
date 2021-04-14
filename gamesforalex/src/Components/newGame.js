import './newGame.css';

export const NewGame = ({victory}) => {
    if (victory) {
        return(
        <div id="newgame">
            <button className="playagain">Play Again?</button>
            <br />
            <button className="playagain">Pick New Players?</button>
        </div>
    )
    } else {
        return (
            <div></div>
        )
    }
}