import CountryInfo from "./CountryInfo"
import Country from "./Country"

const Countries = ({ countries, filter }) => {

    const countriesToShow = filter === ''
        ? countries
        : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))


    if (filter === "") {
        return (countriesToShow.map((country, index) => <Country key={index} country={country}></Country>))
    }
    if (countriesToShow.length > 10 && filter !== "") {
        return "Too many matches, specify another filter"
    }
    if (countriesToShow.length > 1 && countriesToShow.length < 10) {
        return (
            countriesToShow.map((country, index) =>
                <div>
                    <ul>
                        <Country country={country} key={index}></Country>
                    </ul>
                </div>
            ))
    }
    else {
        return (countriesToShow.map((country, index) => <CountryInfo key={index} country={country}></CountryInfo>))
    }

}

export default Countries