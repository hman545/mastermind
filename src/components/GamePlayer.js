import MasterAlgo from '../MasterAlgo.js';
import React from 'react';
import GuessDisp from './GuessDisp.js';

const GamePlayer = ({config}) => {
    const [currentPositions, setCurrentPositions] = React.useState("0");
    const [currentColors, setCurrentColors] = React.useState("0");
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    const [masterCodes, setMasterCodes] = React.useState(MasterAlgo.getAllStartingCodes(config.colors.length, config.allowDuplicateColors));
    
    const recalc = () => {
        let score = {
           "numPositions":parseInt(currentPositions),
            "numJustColors":parseInt(currentColors)
        };
        let newMasterCodes = MasterAlgo.prunePossibleCodes(masterCodes[selectedIndex],score,masterCodes);
        //console.log("new master codes");
        //console.log(newMasterCodes);
        setMasterCodes(newMasterCodes);
        setSelectedIndex(-1);
        setCurrentPositions("0");
        setCurrentColors("0");

    };
    return (<div>
        <p>GamePlayer</p>
        <p>Current Guess:</p>
        {selectedIndex>=0 && <div><GuessDisp 
            guess={masterCodes[selectedIndex]}
            colors={config.colors}
            selected={false}
            clickedCallback={()=>{}}
        />
            <p>Number of positions and colors correct:</p>
            <textarea value={currentPositions} onChange={(event) => {setCurrentPositions(event.target.value)}}/>   
            <p>Number of just colors correct: </p>
            <textarea value={currentColors} onChange={(event)=> {setCurrentColors(event.target.value)}}/>
            <br/>
            <button onClick={recalc}>Recalc</button>

        </div>}
        
        <p>Current Available Master Codes / Valid Guesses:</p>
        {
            masterCodes.map((code,index) => (<GuessDisp 
            guess={code} 
            colors={config.colors}
            selected={index==selectedIndex}
            clickedCallback={()=>{setSelectedIndex(index)}}/>))
        }
        </div>);
};

export default GamePlayer;
