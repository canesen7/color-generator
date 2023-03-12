import React, { useEffect, useState } from 'react';
import { generateColours } from '../GeneralFunctions/ColorFunctions';
import PerColor from './PerColor';
import ColourInput from './SettingsArea/ColourInput';
import Settings from './SettingsArea/Settings';


function Dashboard() {
  const [colour, setColour] = useState("123456")
  const [colours, setColours] = useState([])
  const [isPickerVisible, setIsPickerVisible] = useState(false)
  const [pickerColour, setPickerColour] = useState({})

  useEffect(() => {
    let newColourList = generateColours(colour, colours)

    setColours(newColourList)
  }, [colour]);

  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if (e.key === " " ||
        e.code === "Space" ||
        e.keyCode === 32
      ) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);

        setColour(randomColor)
      }
    });
  }, []);

  const returnValue = (value) => {
    value = value.includes("#") ? value.split("#")[1] : value

    return value.toUpperCase()
  }

  const onChangeColourStatus = (i, status) => {
    let newColours = [...colours]

    newColours[i].locked = !status

    setColours(newColours, colours)
  }

  const changePickerVisibleStatus = (colour, i, status) => {
    setIsPickerVisible(status)
    setPickerColour({ colour: colour, i: i })
  }

  const updateColourByPerColorPicker = (colour, i) => {
    if (i !== "main") {
      let copiedColours = [...colours]

      copiedColours[i].color = colour

      setColours(copiedColours)
      setPickerColour({ colour: colour, i: i })
    } else {
      let generatedColours = generateColours(colour, colours)

      setColour(colour)
      setColours(generatedColours)
    }
  }

  return (
    <div className="container">
      {colours.map((col, i) => (
        <PerColor
          i={i}
          colours={colours}
          colour={col}
          onChangeColourStatus={onChangeColourStatus} />
      ))}

      <div className='colour-input-settings-main-div'>
        <ColourInput
          colour={colour}
          changePickerVisibleStatus={changePickerVisibleStatus}
          returnValue={returnValue}
          setColour={setColour} />

        <Settings
          setIsPickerVisible={setIsPickerVisible}
          updateColourByPerColorPicker={updateColourByPerColorPicker}
          changePickerVisibleStatus={changePickerVisibleStatus}
          setColour={setColour}
          pickerColour={pickerColour}
          isPickerVisible={isPickerVisible}
          colours={colours}
          colour={colour}
        />
      </div>
    </div>
  );
}

export default Dashboard;
