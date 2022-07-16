const CountryInfo = ({ country }) => {

    return (
        <div>
            <div>
                <h2>{country.name.common}</h2>
            </div>
            <div>Capital: {country.capital}</div>
            <div>Area: {country.area}</div>
            <div>
                <img src={country.flags.png} alt="" width="140" height="95" />
            </div>

        </div>
    )
}

export default CountryInfo