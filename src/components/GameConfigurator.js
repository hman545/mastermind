import React from 'react';
import ColorDot from './ColorDot.js';
const GameConfigurator = ({startGameCallback}) =>{
    const [colors, setColors] = React.useState([
        "#1f9e30", // green
        "#e50d23", // red
        "#e8e8e8", // white
        "#101010", // black
        "#e1e82e", // yellow
        "#e82ecc", // pink
    ]);
    const [newColor, setNewColor] = React.useState("#000000");
    const [validColor, setValidColor] = React.useState(true);
    const [allowDuplicateColors, setAllowDuplicateColors] = React.useState(true);
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
        <p>GC</p>
        <p>{colors.length}</p>
        {colors.map((col,index) => (
            <div>
                <ColorDot color={col}/>
                <button onClick={()=>{delColor(index)}}>-</button>
            </div>
        ))}
        <textarea value={newColor} onChange={updateColorBox}/>
        <button style={{'backgroundColor':validColor?null:"#e00000"}} onClick={addNewColorCallback}>Add new color</button>
        <br/>
        <p>Allow Duplicate Colors:
            <input type={"checkbox"} checked={allowDuplicateColors} onClick={(()=>{setAllowDuplicateColors(allowDuplicateColors=>!allowDuplicateColors)})} />
        </p>
        
        <br/>
        <br/>
        <button onClick={() =>startGameCallback(genCurrentConfig())} >Play Game</button>
    </div>
    );
};
export default GameConfigurator;
