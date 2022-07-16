const CountryFilter = ({ value, onChange }) => {
    return (
        <div>Find countries
            <input value={value} onChange={onChange}></input>
        </div>
    )
}

export default CountryFilter