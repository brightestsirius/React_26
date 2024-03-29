import React, { useContext } from "react";

import Country from "./Country";

import CountriesContext from "../../contexts/CountriesContext";

export default function Countries() {
  const { countries, firstCountry, setFirstCountry, secondCountry, setSecondCountry, setFirstCountryScore, setSecondCountryScore, battleResult } = useContext(CountriesContext);

  return countries.length ? (
    <div className="countries__wrapper">
      <Country title={"first"} setSelectedCountry={setFirstCountry} disableCountry={secondCountry} setTotalScore={setFirstCountryScore} battleResult={battleResult.first} />
      <Country title={"second"} setSelectedCountry={setSecondCountry} disableCountry={firstCountry} setTotalScore={setSecondCountryScore} battleResult={battleResult.second} />
    </div>
  ) : null;
}
