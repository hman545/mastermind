import GamePlayer from './components/GamePlayer.js';
import GameConfigurator from './components/GameConfigurator.js';
import MasterAlgo from './MasterAlgo.js';
import React from 'react';
function App() {
    const [mode, setMode] = React.useState("Config");
    const [config, setConfig] = React.useState({});
    const startGameCallback = (cfg) =>{
        setConfig(cfg);
        setMode("PlayGame");
    };
    let score = MasterAlgo.scoreAGuess(['g','b','r','r'],['r','b','y','b']);
    console.log("Score:");
    console.log(MasterAlgo.scoreAGuess(['r','b','y','b'],['g','r','b','b']))
    console.log(MasterAlgo.scoreAGuess(['r','b','y','b'],['g','b','r','r']))
    console.log(MasterAlgo.prunePossibleCodes(['r','b','y','b'],score,[['g','b','r','r'],['g','r','b','b']]));
    return (
    <div className="App">
       <p>App</p>
        {mode=="Config" && <GameConfigurator startGameCallback={startGameCallback}/>}
        {mode=="PlayGame" && <GamePlayer config={config}/>}
      </div>
  );
}

export default App;
