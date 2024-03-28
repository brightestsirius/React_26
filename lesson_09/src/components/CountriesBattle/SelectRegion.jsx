import React, { useState, useEffect } from "react";
import { REGIONS } from "./../../constants/countries";

export default function SelectRegion({ liftingRegion }) {
  const [region, setRegion] = useState();

  const handleSelectRegion = (e) => setRegion(e.target.value);

  useEffect(() => {
    liftingRegion(region);
  }, [region]);

  return (
    <label>
      Choose region:{" "}
      <select onChange={handleSelectRegion}>
        <option selected disabled>
          Select region
        </option>
        {REGIONS.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </label>
  );
}
