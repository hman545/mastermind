import React from 'react';
import ColorDot from './ColorDot.js';
const GameConfigurator = () =>{
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
    const updateColorBox = (event) => {
        setNewColor(event.target.value);
        let pattern = /^[#][abcdef0123456789]{6,6}$/;
        setValidColor(pattern.match(event.target.value));
    };

    return (
    <div>
        <p>GC</p>
        <p>{colors.length}</p>
        {colors.map(col => (
            <div>
                <ColorDot color={col}/>
                <button>-</button>
            </div>
        ))}
        <textarea value={newColor} onChange={updateColorBox}/>
        <button style={{'backgroundColor':validColor?null:"#e00000"}}>Add new color</button>
    </div>
    );
};
export default GameConfigurator;
