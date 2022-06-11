
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants"

interface state{
    name: string;
    state_code: string
}


interface APICountriesResponse {
  name: string;
//   cities: string[];
  iso3?: string;
//   iso3?: string;
states: state[]
  // countryCode: string
}


interface countryFormat{
    name: string;
    states: state[]
}
const useGetCountries = (): {countries: countryFormat[] , loaded: boolean} => {
    // console.log("inside useGetCountries")
  const [countries, setCountries] = useState<countryFormat[]>([]);
  const [error, setError] = useState<{ message: string }>({ message: "" });
  const [ loaded , setLoaded] = useState<boolean>(true)

//   console.log(56);
  useEffect(() => {
    //   console.log("inside useEffect")
    axios
      .get(BASE_URL + "countries/states")
      .then(({data}) =>{
        //   console.log(response)
        const arrayOfCountries: APICountriesResponse[] = data.data
        // console.log(arrayOfCountries)
        // only need part of the properties inside this data object 
        arrayOfCountries.map((item) => {
            // delete item.iso2;
            delete item.iso3;
            
        })
        // console.log(arrayOfCountries)
        setCountries(arrayOfCountries)
      }
      )
    //   .then((data) => setCountries(data))
      .catch((error) => setError(error.message))
      .finally(( ) => setLoaded(false))
      ;
  }, []);

  return {countries,loaded};
};

export { useGetCountries };