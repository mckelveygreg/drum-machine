import React from 'react';

const DrumContainer = (props) => {

    const drumBuilder = props.drumSounds.map(item => {
        return (
            <div className='drum-pad' id={item.key} key={item.key} onClick={props.clickHandler} >
                {item.keyPressed}
                <audio src={item.url} className='clip' id={item.keyPressed} key={item.keyPressed} />
            </div>
        );
    });

    //console.log(drumBuilder);

    return (
        <div id='drum-container'>
            {drumBuilder}
        </div>
    )
}

export default DrumContainer;