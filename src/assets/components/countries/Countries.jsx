import React, { use, useState } from "react";
import Country from "../Country/country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitesFlag] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("clicker country", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlag, flag];
    setVisitesFlag(newVisitedFlags);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h1>IN THE COUNTRIES: {countries.length}</h1>
      <h2>Total Countries Visited by ROKY:--{visitedCountries.length}</h2>
      <h3>Total Country Visited Flags: {visitedFlag.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>

      <div className="vf-container">
        {visitedFlag.map((flag, index) => (
          <img key={index} src={flag} alt="" />
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
