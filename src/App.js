import React, {useState, useEffect} from "react";
import './App.css';
import { FormControl , Select , MenuItem , Card, CardContent } from '@material-ui/core';
import InfoBox from "./InfoBox"
import Rules from "./Rules"
import Table from "./Table"
import {sortData} from "./util";


function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo , setCountryInfo] = useState({});
  const [tableData , setTableData] = useState([]);

  useEffect(() => {
    fetch ("https://disease.sh/v3/covid-19/all")
    .then( response => response.json())
    .then( data => setCountryInfo(data))
  },[]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country)=> ({
          name: country.country,
          value: country.countryInfo.iso2
        }
        ));
        
        const sortedData = sortData(data);
        setTableData(sortedData);
        setCountries(countries);
      });
    };

    getCountriesData();
  }, [])

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    
    const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url).then( (response) => response.json())
    .then( data => {
      setCountryInfo(data);
      setCountry(countryCode);
    })


  }


  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
        <h1>COVID-19 TRACKER</h1>
          <FormControl className="app_dropdown">
            <Select variant="outlined" value={country} onChange={onCountryChange} >
              <MenuItem value="worldwide" >WorldWide</MenuItem>
              {countries.map(country => <MenuItem value={country.value} >{country.name}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
        
        <div className="app_stats">
          <InfoBox title="coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>

        <Rules />
      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live cases by country</h3>
          <Table countries={tableData} />

        </CardContent>
      </Card>
      

    </div>
  );
}

export default App;
