import React from 'react';
import ColorDot from './ColorDot.js';
const GameConfigurator = ({config,startGameCallback}) =>{
    const [colors, setColors] = React.useState(config.colors);
    const [newColor, setNewColor] = React.useState("#000000");
    const [validColor, setValidColor] = React.useState(true);
    const [allowDuplicateColors, setAllowDuplicateColors] = React.useState(config.allowDuplicateColors);
    const updateColorBox = (event) => {
        setNewColor(event.target.value);
        let pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        setValidColor(pattern.exec(event.target.value));
    };
    const genCurrentConfig = () => {
        return {
            "colors":colors,
            "allowDuplicateColors":allowDuplicateColors,
        };
    };
    const addNewColorCallback = () => {
        if(validColor){
            let colorsCopy = [...colors];
            colorsCopy.push(newColor);
            setColors(colorsCopy);
        }
    };
    const delColor = (index) => {
        let colorsCopy = [];
        for (let i=0; i<colors.length; i++){
            if (i!=index){
                colorsCopy.push(colors[i]);
            }
        }
        setColors(colorsCopy);
    };
    return (
    <div>
        <h3>Game Configurator</h3>
        <p>Please configure this screen to match the physical board and set of rules that you are playing with. If your game allows for blank spaces, just represent that as if it is a new color.</p>
        <hr/>
        <p>{`Number of colors: ${colors.length}`}</p>
        {colors.map((col,index) => (
            <div key={"colorConfig"+index} className="configurator-li">
                
                <ColorDot color={col}/>
                <p>{`(${col})`}</p>
                <button onClick={()=>{delColor(index)}}>Remove Color (-)</button>
            </div>
        ))}
        <textarea value={newColor} onChange={updateColorBox}/>
        <button style={{margin:'20px','backgroundColor':validColor?null:"#e00000"}} onClick={addNewColorCallback}>Add new color</button>
        <br/>
        <p>Allow Duplicate Colors:
            <input type={"checkbox"} checked={allowDuplicateColors} onChange={(()=>{setAllowDuplicateColors(allowDuplicateColors=>!allowDuplicateColors)})} />
        </p>
        
        <br/>
        <br/>
        <button className="playbutton" onClick={() =>startGameCallback(genCurrentConfig())} >Play Game</button>
    </div>
    );
};
export default GameConfigurator;
