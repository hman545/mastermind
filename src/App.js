import GamePlayer from './components/GamePlayer.js';
import GameConfigurator from './components/GameConfigurator.js';
import MasterAlgo from './MasterAlgo.js';
function App() {
    console.log(MasterAlgo.getAllStartingCodes(4,true));
    MasterAlgo.scoreAGuess([1,1,2,2],[2,1,3,1]);
    // green red white black yellow blue
    return (
    <div className="App">
       <p>App</p>
        
        <GameConfigurator/>
      </div>
  );
}

export default App;
