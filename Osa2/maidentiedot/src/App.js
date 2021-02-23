import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filtteri from "./components/Filtteri";

const App = () => {
    const [country, setCountry] = useState([]);
    const [filtered, setFiltered] = useState('');

    useEffect(() => {
        axios
            .get
            ('https://restcountries.eu/rest/v2/all')
            .then
            (response => {
                setCountry(response.data);
                console.log(response.data)
            })
    }, []);

    const countryDetails = country.filter(c =>
        c.name.toLowerCase().includes(filtered.toLowerCase())).map(c => {
        return <>
            <h1 key={c.name}>{c.name}</h1>
                <p>Capital {c.capital}</p>
                <p>Population {c.population}</p>
                <h2>Languages</h2>
                <ul>
                    {c.languages.map(language =>
                        <li key={language.name}>{language.name}</li>)}
                </ul>
            <img src={c.flag} width={150}/>
            </>
    });


    const countryNames = country.filter(c =>
        c.name.toLowerCase().includes(filtered.toLowerCase())).map(c => {
        return <>
            <p key={c.name}>{c.name}</p>
        </>
    })

    const countryNameList = (countryDetails.length<10&&countryDetails.length>1) ? countryNames : ""
    const singleCountryInformation = (countryDetails.length===1) ? countryDetails : ""
    const tooManyCountries = (countryDetails.length>10) ? "Too many matches, specify another filter" : ""

    return (
        <>
            <Filtteri filtered={filtered} setFiltered={setFiltered}/>
            <>
                {tooManyCountries}
                {countryNameList}
                {singleCountryInformation}
            </>
        </>
    )
}

export default App
