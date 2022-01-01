const ColorDot = ({color}) => {
    return (
        <div style={{'borderRadius':'100%',
                'backgroundColor':color,
                'width':'1em',
                'height':'1em',
                'margin':'0.3em',
                'display':'inline-flex',
            'border':'0.1em solid black',
        }}></div>
    );
};

export default ColorDot;
