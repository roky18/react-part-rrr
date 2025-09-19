import React, { useState } from "react";
import "./Country.css";

const country = ({ country }) => {
  //   console.log(country.area.area);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // way----1

    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // way----2
    // setVisited(visited ? false : true);

    // way----3
    setVisited(!visited);

    setVisited;
    // console.log("sdfdgfdhjfgsgjhfags");
  };
  return (
    <div className={`counrty ${visited && "counrty-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name:- {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area:--- {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Rastro" : "Small Rastro"}
      </p>
      <p>Mohadesh: {country.region.region}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default country;
