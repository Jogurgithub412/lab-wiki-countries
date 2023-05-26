import React from 'react';
import { useParams} from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link to={`/country/${country.alpha3Code}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default CountriesList;
