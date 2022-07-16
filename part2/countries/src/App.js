import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryFilter from './components/CountryFilter'
import Countries from './components/Countries'

function App() {

  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleCountryFilter = (event) => {
    setCountryFilter(event.target.value)
  }

  return (
    <div>
      <CountryFilter value={countryFilter} onChange={handleCountryFilter}></CountryFilter>
      <Countries countries={countries} filter={countryFilter}></Countries>
    </div>
  );
}

export default App;
