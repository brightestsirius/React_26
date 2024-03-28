import React, { useState, useEffect, memo, useCallback, useMemo } from "react";
import service from "./../../service/countries";

export default memo(function SelectCountry({
  title = ``,
  countries = [],
  liftingCountry,
  selectedCountry = {},
  calculateResult,
  liftingResult,
  result
}) {
  const [country, setCountry] = useState({});
  const [finalResult, setFinalResult] = useState();

  const handleSelectCountry = async (e) => {
    const response = await service.getCountry(e.target.value);
    setCountry(response[0]);
  };

  useEffect(() => {
    liftingCountry(country);
  }, [country]);

  useEffect(() => {
    setCountry({});
  }, [countries])

  const filteredCountries = useMemo(() => JSON.parse(JSON.stringify(countries)).map(
    (item) => {
      if (
        Object.keys(selectedCountry).length &&
        item.name.common === selectedCountry.name.common
      )
        item.selected = true;
      return item;
    }
  ), [selectedCountry]);

  useEffect(() => {
    if (calculateResult) {
      setFinalResult(getResult());
    }
  }, [calculateResult]);

  const getResult = () => {
    return country.area + country.population;
  };

  useEffect(() => {
    liftingResult(finalResult);
  }, [finalResult]);

  const getResultLabel = useCallback(() => {
    return result===true ? <p className="country__label">Winner 🥳</p> : result===false ? <p className="country__label">Loser 🥵</p> : null;
  }, [result])

  return (
    <div className="country">
      {getResultLabel()}
      <label>
        {title}:{" "}
        <select onChange={handleSelectCountry} disabled={calculateResult}>
          <option>Select country</option>
          {filteredCountries.length
            ? filteredCountries.map((item) => (
                <option
                  key={item.name.common}
                  value={item.name.common}
                  disabled={item.selected}
                >
                  {item.flag} {item.name.common}
                </option>
              ))
            : null}
        </select>
      </label>
      {Object.keys(country).length ? (
        <ul>
          <li>Capital: {country.capital}</li>
          <li>Subregion: {country.subregion}</li>
          <li>Area: {country.area}</li>
          <li>Population: {country.population}</li>
          {finalResult ? (
            <li>
              <strong>Final score: {finalResult}</strong>
            </li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
});
