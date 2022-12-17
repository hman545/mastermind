import ColorDot from './ColorDot.js';
import React from 'react';
const GuessDisp = ({guess, colors, clickedCallback, selected})  =>{
    const [isHovered, setisHovered] = React.useState(false);   
    return (<div
        className="guessdisp"
        style={{
        'display':'inline-block',
            'backgroundColor':selected?'#0000ee':(isHovered?'#bbb':'#e0e0e0'),
        'margin':'0.3em',
        'padding':'0.1em',
        'borderRadius':'0.5em'}}

    onMouseOver={()=>{setisHovered(true)}}
    onMouseLeave={()=>{setisHovered(false)}}
    onClick={clickedCallback}>
        {guess.map(index => (<ColorDot color={colors[index]}/>))}
        </div>);
};
export default GuessDisp;
