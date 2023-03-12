import React from 'react';

function ColourInput(props) {
    return (
        <div className="colour-input-container">
            <p className="hashtag">#</p>
            <input className="colour-input" onChange={(e) => props.setColour("#" + e.target.value)} defaultValue={props.colour} value={props.returnValue(props.colour)} />
            <div className={"input-colour"} onClick={() => props.changePickerVisibleStatus(props.colour, "main", true)} style={{ background: "#" + props.returnValue(props.colour) }}></div>
        </div>
    );
}

export default ColourInput;