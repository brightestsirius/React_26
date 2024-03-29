import React, { useContext } from "react";
import { REGIONS } from "./../../constants/countries";

import CountriesContext from "../../contexts/CountriesContext";

export default function SelectRegion() {
  const { region, setRegion, startBattle } = useContext(CountriesContext);
  const handleSelectRegion = (e) => setRegion(e.target.value);

  return (
    <label>
      Select region{" "}
      <select onChange={handleSelectRegion} disabled={startBattle}>
        <option disabled={region}>Select region</option>
        {REGIONS.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
