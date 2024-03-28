import React, { useState, useEffect } from "react";
import service from "./../../service/countries";
import "./style.sass";

import SelectRegion from "./SelectRegion";
import SelectCountry from "./SelectCountry";

export default function Countries() {
  const [region, setRegion] = useState();
  const [countries, setCountries] = useState([]);

  const [firstCountry, setFirstCountry] = useState({});
  const [secondCountry, setSecondCountry] = useState({});

  const [showBtnBattle, setShowBtnBattle] = useState(false);
  const [calculateResult, setCalculateResult] = useState(false);

  const [firstCountryResult, setFirstCountryResult] = useState();
  const [secondCountryResult, setSecondCountryResult] = useState();

  const [result, setResult] = useState({});

  const [showBtnRestart, setShowBtnRestart] = useState(false);

  useEffect(() => {
    (async () => {
      if (region) {
        const response = await service.getRegion(region);
        setCountries(response);
      }
    })();
  }, [region]);

  useEffect(() => {
    if (Object.keys(firstCountry).length && Object.keys(secondCountry).length)
      setShowBtnBattle(true);
  }, [firstCountry, secondCountry]);

  const handleBattle = () => {
    setCalculateResult(true);
  }

  useEffect(() => {
    if(firstCountryResult && secondCountryResult){
        setResult({
            first: firstCountryResult>=secondCountryResult,
            second: secondCountryResult>=firstCountryResult
        })
    }
  }, [firstCountryResult, secondCountryResult]);

  useEffect(() => {
    if(Object.keys(result).length){
        setShowBtnBattle(false);
        setShowBtnRestart(true);
    }
  }, [result])

  const handleRestart = () => {
    setCountries([]);
    setShowBtnRestart(false);
    setCalculateResult(false);
    setFirstCountryResult(null);
    setSecondCountryResult(null);
    setResult({});
  }

  return (
    <div className="countries__wrapper">
      <SelectRegion liftingRegion={setRegion} disabled={calculateResult} />
      {countries.length ? (
        <div className="countries">
          <SelectCountry
            title={"Choose first country"}
            countries={countries}
            liftingCountry={setFirstCountry}
            selectedCountry={secondCountry}
            calculateResult={calculateResult}
            liftingResult={setFirstCountryResult}
            result={result.first}
          />
          <SelectCountry
            title={"Choose second country"}
            countries={countries}
            liftingCountry={setSecondCountry}
            selectedCountry={firstCountry}
            calculateResult={calculateResult}
            liftingResult={setSecondCountryResult}
            result={result.second}
          />
        </div>
      ) : null}
      {showBtnBattle ? <button className="btn__battle" onClick={handleBattle}>Battle!</button> : null}
      {showBtnRestart ? <button className="btn__battle" onClick={handleRestart}>Restart 🔄</button> : null}
    </div>
  );
}
