import React from 'react';
const GameConfigurator = () =>{
    const [numColors, setNumColors] = React.useState(6);
    const decColors = () => {
        setNumColors(numColors => numColors==1?numColors:numColors-1);
    };
    const incColors = () => {
        setNumColors(numColors => numColors+1);
    };
    return (
    <div>
        <p>GC</p>
        
        <p>{numColors}</p>
    </div>
    );
};
export default GameConfigurator;
