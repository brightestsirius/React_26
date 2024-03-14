import React, { useState } from "react";
import Input from "./Input";
import Value from "./Value";
import ColorPicker from "./ColorPicker";

export default function CombineComponents() {
  const [value, setValue] = useState(`Default value`);
  const [color, setColor] = useState();

  const getColor = value => setColor(value);
  
  return (
    <div>
      <Input value={value} setValue={setValue} />
      <ColorPicker liftingColor={getColor} />
      <Value value={value} color={color} />
    </div>
  );
}
