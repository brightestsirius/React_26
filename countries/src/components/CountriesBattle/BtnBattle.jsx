import React, { useContext, useEffect } from "react";

import CountriesContext from "../../contexts/CountriesContext";

export default function BtnBattle() {
  const { showBtnBattle, setShowBtnBattle, setStartBattle, startBattle } = useContext(CountriesContext);

  const handleClick = () => setStartBattle(true);

  useEffect(() => {
    if(startBattle) setShowBtnBattle(false);
  }, [startBattle])

  return showBtnBattle ? <button onClick={handleClick}>Battle!</button> : null;
}