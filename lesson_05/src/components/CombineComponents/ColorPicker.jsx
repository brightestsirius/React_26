import React, {useState, useEffect} from "react";

export default function ColorPicker({liftingColor}) {
  const [color, setColor] = useState(`#000000`);
  const handleColor = (e) => setColor(e.target.value);

  useEffect(() => {
    liftingColor(color);
  }, [color])

  return (
    <div>
      <br></br>
      <input type="color" value={color} onChange={handleColor} />
    </div>
  );
}
