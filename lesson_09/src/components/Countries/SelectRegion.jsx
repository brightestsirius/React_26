import React, { useState, useEffect } from "react";
import { REGIONS } from "./../../constants/countries";

export default function SelectRegion({ liftingRegion, disabled }) {
  const [region, setRegion] = useState();

  const handleSelectRegion = (e) => setRegion(e.target.value);

  useEffect(() => {
    region && liftingRegion(region);
  }, [region]);

  return (
    <label className="label__region">
      Choose region:{" "}
      <select onChange={handleSelectRegion} disabled={disabled}>
        <option>Select region</option>
        {REGIONS.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
