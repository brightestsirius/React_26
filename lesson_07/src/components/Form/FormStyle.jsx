import React, { useState, useEffect, memo } from "react";

export default memo(function FormStyle({ liftingStyles }) {
  const [styles, setStyles] = useState({
    color: `#000000`,
    backgroundColor: `#ffffff`,
  });

  const handleTextColor = (e) =>
    setStyles((prevState) => ({ ...prevState, color: e.target.value }));
  const handleBackgroundColor = (e) =>
    setStyles((prevState) => ({
      ...prevState,
      backgroundColor: e.target.value,
    }));

  useEffect(() => {
    liftingStyles(styles);
  }, [styles]);

  return (
    <fieldset>
      <legend>Style:</legend>
      <label>
        Text color:{" "}
        <input
          type="color"
          defaultValue={styles.color}
          onChange={handleTextColor}
        />
      </label>
      <label>
        Background color:{" "}
        <input
          type="color"
          defaultValue={styles.backgroundColor}
          onChange={handleBackgroundColor}
        />
      </label>
    </fieldset>
  );
});