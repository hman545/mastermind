import ColorDot from './ColorDot.js';
const GuessDisp = ({guess, colors, clickedCallback, selected})  =>{
    
    return (<div style={{'display':'inline-block', 'backgroundColor':selected?'#0000ee':'#e0e0e0', 'margin':'0.3em', 'padding':'0.1em','borderRadius':'0.5em'}}

    onClick={clickedCallback}>
        {guess.map(index => (<ColorDot color={colors[index]}/>))}
        </div>);
};
export default GuessDisp;
