import React, { useState, useEffect } from "react";
import "./style.sass";

import SelectRegion from "./SelectRegion";
import Countries from "./Countries";
import BtnBattle from "./BtnBattle";
import BtnRestart from './BtnRestart'

import CountriesContext from "./../../contexts/CountriesContext";

import service from "./../../service/restcountries";

export default function CountriesBattle() {
  const [region, setRegion] = useState();
  const [countries, setCountries] = useState([]);

  const [firstCountry, setFirstCountry] = useState({});
  const [secondCountry, setSecondCountry] = useState({});

  const [showBtnBattle, setShowBtnBattle] = useState(false);
  const [startBattle, setStartBattle] = useState(false);

  const [firstCountryScore, setFirstCountryScore] = useState();
  const [secondCountryScore, setSecondCountryScore] = useState();

  const [battleResult, setBattleResult] = useState({});

  useEffect(() => {
    if (region) {
      resetRegion();

      (async () => {
        try {
          const response = await service.getRegion(region);
          setCountries(response);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [region]);

  useEffect(() => {
    if (Object.keys(firstCountry).length && Object.keys(secondCountry).length) {
      setShowBtnBattle(true);
    }
  }, [firstCountry, secondCountry]);

  const resetRegion = () => {
    setCountries([]);
    setFirstCountry({});
    setSecondCountry({});
    setShowBtnBattle(false);
  };

  useEffect(() => {
    if(firstCountryScore && secondCountryScore){
        setBattleResult({
            first: firstCountryScore>=secondCountryScore,
            second: secondCountryScore>=firstCountryScore
        })
    }
  }, [firstCountryScore, secondCountryScore])

  return (
    <CountriesContext.Provider
      value={{
        region,
        setRegion,
        countries,
        setCountries,
        firstCountry,
        setFirstCountry,
        secondCountry,
        setSecondCountry,
        showBtnBattle,
        setShowBtnBattle,
        startBattle,
        setStartBattle,
        firstCountryScore,
        setFirstCountryScore,
        secondCountryScore,
        setSecondCountryScore,
        battleResult,
        setBattleResult
      }}
    >
      <div className="wrapper">
        <SelectRegion />
        <Countries />
        <BtnBattle />
        <BtnRestart />
      </div>
    </CountriesContext.Provider>
  );
}
