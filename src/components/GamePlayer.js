import MasterAlgo from '../MasterAlgo.js';
import React from 'react';
import GuessDisp from './GuessDisp.js';

const GamePlayer = ({config, returnToConfigCallback}) => {
    const [stateGraph, setStateGraph] = React.useState([{
            'masterCodes':MasterAlgo.getAllStartingCodes(config.colors.length, config.allowDuplicateColors),
            'selectedIndex':-1,
            'currentColors':"",
            'currentPositions':"",
        }]);
    const recalc = () => {
        let score = {
           "numPositions":parseInt(stateGraph.at(0).currentPositions),
            "numJustColors":parseInt(stateGraph.at(0).currentColors)
        };
        let masterCodes = stateGraph.at(0).masterCodes;
        let newMasterCodes = MasterAlgo.prunePossibleCodes(masterCodes[stateGraph.at(0).selectedIndex],score,masterCodes);
        let next = {
            'masterCodes':newMasterCodes,
            'selectedIndex':-1,
            'currentColors':"",
            'currentPositions':"",
        }
        setStateGraph(stateGraph => [next].concat(stateGraph));
    };
    const goBack = () => {
        console.log("yfkm");
        let graphCopy = [...stateGraph];
        if (graphCopy.length > 1) {
            graphCopy.shift();
        }
        setStateGraph(graphCopy);
    };
    const setParam = (key, value) => {
        let sgCopy = [...stateGraph];
        let currentNode = sgCopy.shift();
        currentNode[key]=value;
        setStateGraph([currentNode].concat(sgCopy));

    };
    const restartGame = () =>{
        setStateGraph([{
            'masterCodes':MasterAlgo.getAllStartingCodes(config.colors.length, config.allowDuplicateColors),
            'selectedIndex':-1,
            'currentColors':"",
            'currentPositions':"",
        }]);
    };
    return (<div>
        <p>GamePlayer</p>
        <div style={{display:"flex-justify"}}> 
            {stateGraph.length>1 && <button onClick={goBack}>Undo last move</button>}
        <button onClick={restartGame}>Restart Game</button>
        <button onClick={returnToConfigCallback}>Return to configurator</button>
        </div>
        <p>Current Guess:</p>
        {stateGraph.at(0).selectedIndex>=0 && <div><GuessDisp 
            guess={stateGraph.at(0).masterCodes[stateGraph.at(0).selectedIndex]}
            colors={config.colors}
            selected={false}
            clickedCallback={()=>{}}
        />
            <p>Number of positions and colors correct:</p>
            <textarea value={stateGraph.at(0).currentPositions} onChange={(event) => {setParam('currentPositions',event.target.value)}}/>   
            <p>Number of just colors correct: </p>
            <textarea value={stateGraph.at(0).currentColors} onChange={(event)=> {setParam('currentColors',event.target.value)}}/>
            <br/>
            <br/>
            <button onClick={recalc}>Make move</button>

        </div>}
        
        <p>Current Available Master Codes / Valid Guesses ({stateGraph.at(0).masterCodes.length}):</p>
        {
            stateGraph.at(0).masterCodes.map((code,index) => (<GuessDisp 
            key={"Item"+code}
            guess={code} 
            colors={config.colors}
            selected={index==stateGraph.at(0).selectedIndex}
            clickedCallback={()=>{setParam('selectedIndex',index)}}/>))
        }
        </div>);
};

export default GamePlayer;
