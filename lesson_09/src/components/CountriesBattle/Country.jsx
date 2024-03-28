import React, { useContext, useState } from "react";
import CountriesContext from "../../contexts/CountriesContext";
import service from './../../service/restcountries'

export default function Country({ title }) {
  const { countries } = useContext(CountriesContext);
  const [country, setCountry] = useState({});

  const handleSelectCountry = async e => {
    const response = await service.getCountry(e.target.value);
    setCountry(response[0]);
  }

  return (
    <div className="country__wrapper">
      <label>
        Choose {title} country:{" "}
        <select onChange={handleSelectCountry}>
          <option selected disabled>Select country</option>
          {countries.map((item, index) => (
            <option value={item.name.common} key={index}>
              {item.flag} {item.name.official}
            </option>
          ))}
        </select>

        {Object.keys(country).length ? <ul>
          <li>Subregion: {country.subregion}</li>
          <li>Area: {country.area}</li>
          <li>Population: {country.population}</li>
        </ul> : null}

      </label>
    </div>
  );
}
