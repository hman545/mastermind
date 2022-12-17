import GamePlayer from './components/GamePlayer.js';
import GameConfigurator from './components/GameConfigurator.js';
import React from 'react';
import './App.css';

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
    <div className="App_wrapper">
    <div className="App">
        <div style={{'textAlign':'center'}}>
            <h2>Mastermind Solver</h2>
            </div>
           <p>
               Mastermind is a simple code-cracking game where one person creates a four color code from a set of n colors. Your task is then to make a series of guesses whereafter your opponent will tell your know many of the colors are in the right order and right color and how many are just the right color. Victory is achieved when all of them are in the right order and they are the right color.
               <br/>
               <br/>
               This website is a cool tool to cheat at that game using the Knuth algorithm. First, set up the rules (like the number of colors) and whether or not to allow duplicate colors. Then feed back their responses to each of your moves into this solver. 
           <hr/>

           </p>
        {mode=="Config" && <GameConfigurator config={config} startGameCallback={startGameCallback}/>}
        {mode=="PlayGame" && <GamePlayer config={config} returnToConfigCallback={returnToConfig}/>}
      </div>
      </div>
  );
}

export default App;
