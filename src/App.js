import './App.css';
import {Header} from './Components/header'
import {Footer} from './Components/footer'
import {GameBoard} from './Components/gameboard';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <h2 id="tictactoe">Tic Tac Toe</h2>
        <GameBoard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
