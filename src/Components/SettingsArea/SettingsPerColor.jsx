import React from 'react';

function SettingsPerColor(props) {
    return (
        <>
        <div onClick={() => props.changePickerVisibleStatus(props.colour.color, props.i, true)} key={props.i} style={{ boxSizing: "border-box", width: "30px", height: "30px", borderRadius: "100px", background: props.colour.color }}></div>
        </>
    );
}

export default SettingsPerColor;