import GamePlayer from './components/GamePlayer.js';
import GameConfigurator from './components/GameConfigurator.js';
import MasterAlgo from './MasterAlgo.js';
import React from 'react';

function App() {
    const [mode, setMode] = React.useState("Config");
    const [config, setConfig] = React.useState({
    "colors":[
        "#1f9e30", // green
        "#e50d23", // red
        "#e8e8e8", // white
        "#101010", // black
        "#e1e82e", // yellow
        "#082eff", // pink
    ],
    "allowDuplicateColors":false
    });
    const startGameCallback = (cfg) =>{
        setConfig(cfg);
        setMode("PlayGame");
    };
    const returnToConfig = () => {
        setMode("Config");
    };

    //let score = MasterAlgo.scoreAGuess(['g','b','r','r'],['r','b','y','b']);
    //console.log("Score:");
    //console.log(MasterAlgo.scoreAGuess(['r','b','y','b'],['g','r','b','b']))
    //console.log(MasterAlgo.scoreAGuess(['r','b','y','b'],['g','b','r','r']))
    //console.log(MasterAlgo.prunePossibleCodes(['r','b','y','b'],score,[['g','b','r','r'],['g','r','b','b']]));
    return (
    <div className="App">
        <div style={{'textAlign':'center'}}>
            <h2>Mastermind Solver</h2>
            </div>
       <p>Welcome to the Mastermind solver. [TODO information about mastermind]. 

           </p>
        {mode=="Config" && <GameConfigurator config={config} startGameCallback={startGameCallback}/>}
        {mode=="PlayGame" && <GamePlayer config={config} returnToConfigCallback={returnToConfig}/>}
      </div>
  );
}

export default App;
