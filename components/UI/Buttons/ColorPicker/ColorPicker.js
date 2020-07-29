import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = () => {
  const [color, setColor] = useState("#fff");

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    console.log("color:", color);
  };

  return <SketchPicker color={color} onChangeComplete={handleChangeComplete} />;
};

export default ColorPicker;
