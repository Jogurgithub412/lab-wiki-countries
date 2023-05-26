import React from 'react';
import { useParams } from 'react-router-dom'

function CountryDetails() {
    const {alpha3Code} = useParams();
    const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`;
    
    
        
        // Fetch country details and filter from the list using alpha3Code
        return <div className="App">
        <h3>Countries Details</h3>
        {!fetching && <p>Loading</p>}
      
        {fetching && countryDetails.map((country)=>{
          return(
            <div key={country._id}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="img" /> 
      
              <h3>{countryDetails}</h3>
            </div>
          )
        })}
          
        </div>;
      }





        // Assuming countryDetails contains the details of the country







        return (
          <div>
            <h2>{CountryDetails}</h2>
            <img src={flagUrl} alt={`${name}.flag`} />
            {/* Display other country details */}
          </div>
        );
      }
         


export default CountryDetails;