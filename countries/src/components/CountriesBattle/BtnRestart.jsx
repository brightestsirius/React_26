import React, { useContext } from "react";

import CountriesContext from "../../contexts/CountriesContext";

export default function BtnRestart() {
  const {
    startBattle,
    setStartBattle,
    setRegion,
    setCountries,
    setFirstCountry,
    setSecondCountry,
    setShowBtnBattle,
    setFirstCountryScore,
    setSecondCountryScore,
    setBattleResult,
  } = useContext(CountriesContext);

  const handleRestart = () => {
    setStartBattle(false);
    setRegion();
    setCountries([]);
    setFirstCountry({});
    setSecondCountry({});
    setShowBtnBattle(false);
    setFirstCountryScore();
    setSecondCountryScore();
    setBattleResult({});
  };

  return startBattle ? <button onClick={handleRestart}>Restart</button> : null;
}
