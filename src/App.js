import GamePlayer from './components/GamePlayer.js';
import GameConfigurator from './components/GameConfigurator.js';
import MasterAlgo from './MasterAlgo.js';
function App() {
    console.log(MasterAlgo.getAllStartingCodes(4,true));
    MasterAlgo.scoreAGuess([2,2,5,3],[2,2,2,2]);
    return (
    <div className="App">
       <p>App</p>
        
        <GameConfigurator/>
      </div>
  );
}

export default App;
