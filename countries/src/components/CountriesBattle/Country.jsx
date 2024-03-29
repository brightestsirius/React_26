import React, { useContext, useState, useEffect, useMemo } from "react";

import CountriesContext from "../../contexts/CountriesContext";

import service from "../../service/restcountries";

export default function Country({
  title = ``,
  setSelectedCountry,
  disableCountry = {},
  setTotalScore,
  battleResult,
}) {
  const { countries, startBattle } = useContext(CountriesContext);
  const [country, setCountry] = useState({});
  const [totalScore, setTotalSore] = useState();
  const [battleLabel, setBattleLabel] = useState();

  const handleSelectCountry = async (e) => {
    const response = await service.getCountry(e.target.value);
    setCountry(response[0]);
  };

  useEffect(() => {
    if (Object.keys(country).length) {
      setSelectedCountry(country);
    }
  }, [country]);

  const filteredCountries = useMemo(
    () =>
      JSON.parse(JSON.stringify(countries)).map((item) => {
        if (
          Object.keys(disableCountry).length &&
          item.name.common === disableCountry.name.common
        )
          item.disabled = true;
        return item;
      }),
    [countries, disableCountry]
  );

  useEffect(() => {
    if (startBattle) {
      setTotalSore(calculateTotalScore());
    }
  }, [startBattle]);

  const calculateTotalScore = () => country.area + country.population;

  useEffect(() => {
    setTotalScore(totalScore);
  }, [totalScore]);

  useEffect(() => {
    if (battleResult === true) {
      setBattleLabel(`Winner 🥳`);
    } else if (battleResult === false) {
      setBattleLabel(`Loser 🥵`);
    }
  }, [battleResult]);

  return (
    <div className="country__wrapper">
      {battleLabel ? <p className="country__battle--label">{battleLabel}</p> : null}
      <label>
        Select {title} country:{" "}
        <select onChange={handleSelectCountry} disabled={startBattle}>
          <option disabled={Object.keys(country).length}>Select country</option>
          {filteredCountries.map((item, index) => (
            <option
              key={index}
              value={item.name.common}
              disabled={item.disabled}
            >
              {item.flag} {item.name.official}
            </option>
          ))}
        </select>
      </label>

      {Object.keys(country).length ? (
        <ul>
          <li>Capital: {country.capital.join(`, `)}</li>
          <li>Subregion: {country.subregion}</li>
          <li>Area: {country.area}</li>
          <li>Population: {country.population}</li>
          {totalScore ? (
            <li>
              <strong>Total score: {totalScore}</strong>
            </li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
}
