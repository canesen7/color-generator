import React from 'react';
import { PhotoshopPicker, SliderPicker } from 'react-color';
import SettingsPerColor from './SettingsPerColor';

function Settings(props) {
    return (
        <div className="color-picker-menu">
            <div className="slider-picker-container">
                <SliderPicker
                    color={props.colour}
                    onChangeComplete={(color) => props.setColour(color.hex)}
                    styles={{ marginTop: "15px" }} /></div>
            <div className="colours-settings-container">
                {props.colours.map((colour, i) => (
                    <SettingsPerColor colour={colour} i={i} changePickerVisibleStatus={() => props.changePickerVisibleStatus(colour, i, true)} />
                ))}
            </div>

            <div style={{ display: props.isPickerVisible ? "block" : "none", position: "absolute", top: "102%" }}>
                <PhotoshopPicker
                    color={props.pickerColour.i === "main" ? props.colour : props.pickerColour.colour}
                    onChangeComplete={(color) => props.updateColourByPerColorPicker(color.hex, props.pickerColour.i)}
                    onAccept={() => props.setIsPickerVisible(false)}
                    onCancel={() => props.setIsPickerVisible(false)} />
            </div>
        </div>
    );
}

export default Settings;