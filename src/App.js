import GamePlayer from './components/GamePlayer.js';
import GameConfigurator from './components/GameConfigurator.js';
import MasterAlgo from './MasterAlgo.js';
import React from 'react';
function App() {
    console.log(MasterAlgo.getAllStartingCodes(4,true));
    MasterAlgo.scoreAGuess([2,2,5,3],[2,2,2,2]);
    const [mode, setMode] = React.useState("Config");
    const [config, setConfig] = React.useState({});
    const startGameCallback = (cfg) =>{
        setConfig(cfg);
        setMode("PlayGame");
    };
    return (
    <div className="App">
       <p>App</p>
        {mode=="Config" && <GameConfigurator startGameCallback={startGameCallback}/>}
        {mode=="PlayGame" && <GamePlayer config={config}/>}
      </div>
  );
}

export default App;
