import React, { useState, useEffect, memo } from "react";

export default memo(function FormStyle({liftingStyle}) {
  console.log(`in FormStyle`);
  
  const [style, setStyle] = useState({
    color: `#000000`,
    backgroundColor: `#ffffff`,
  });

  const handleStyleColor = (e) =>
    setStyle((prevState) => ({ ...prevState, color: e.target.value }));
  const handleStyleBg = (e) =>
    setStyle((prevState) => ({
      ...prevState,
      backgroundColor: e.target.value,
    }));

    useEffect(() => {
      liftingStyle(style);
    }, [style])

  return (
    <fieldset>
      <legend>Style</legend>
      <label>
        Text color:{" "}
        <input
          type="color"
          defaultValue={style.color}
          onChange={handleStyleColor}
        />
      </label>
      <label>
        Bg color:{" "}
        <input
          type="color"
          defaultValue={style.backgroundColor}
          onChange={handleStyleBg}
        />
      </label>
    </fieldset>
  );
});