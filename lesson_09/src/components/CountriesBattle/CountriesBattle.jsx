import React, { useState, useEffect } from "react";
import SelectRegion from "./SelectRegion";
import './style.sass'

import service from "./../../service/restcountries";

import Country from "./Country";

import CountriesContext from './../../contexts/CountriesContext'

export default function CountriesBattle() {
  const [region, setRegion] = useState();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (region) {
      (async () => {
        const response = await service.getCountries(region);
        setCountries(response);
      })();
    }
  }, [region]);

  return (
    <div>
      <SelectRegion liftingRegion={setRegion} />

      <CountriesContext.Provider value={{countries}}>
        {countries.length ? (
            <div className="countries__wrapper">
            <Country title="First" />
            <Country title="Second" />
            </div>
        ) : null}
      </CountriesContext.Provider>

    </div>
  );
}
