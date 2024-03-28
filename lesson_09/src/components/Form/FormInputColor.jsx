import React, { useContext, memo } from "react";

import FormContext from "../../contexts/FormContext";
import InputsContext from "../../contexts/InputsContext";

export default memo(function FormInputColor() {
  const { color, setColor } = useContext(FormContext);
  const {inputColor, setInputColor} = useContext(InputsContext);

  return (
    <>
      <label>
        Color for H2:{" "}
        <input
          type="color"
          defaultValue={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <label>
        Color for input[text] <input type="color" defaultValue={inputColor} onChange={e => setInputColor(e.target.value)} />
      </label>
    </>
  );
})