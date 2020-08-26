import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data/clients.json";
import { groupBy } from "./utils";
import SelectableList from "./components/SelectableList";
import MapDisplay from "./components/MapDisplay";

function App() {
  const customerList = data.Customers;

  // country grouping and sorting
  const groupByCountry = groupBy("Country");
  const groupedCountries = groupByCountry(customerList);
  const sortedCountries = Object.entries(groupedCountries)
    .sort((a, b) => b[1].length - a[1].length)
    .map((e) => e[0]);
  const [selectedCountry, setCountry] = useState(sortedCountries[0]);

  // city grouping and sorting
  const citiesInSelectedCountry = customerList.filter(
    (a) => a.Country === selectedCountry
  );
  const groupByCity = groupBy("City");
  const groupedCities = groupByCity(citiesInSelectedCountry);
  const sortedCities = Object.entries(groupedCities)
    .sort((a, b) => b[1].length - a[1].length)
    .map((e) => e[0]);
  const [selectedCity, setCity] = useState(sortedCities[0]);

  // company grouping and sorting
  const companiesInSelectedCity = citiesInSelectedCountry.filter(
    (a) => a.City === selectedCity
  );
  const groupByCompany = groupBy("CompanyName");
  const groupedCompany = groupByCompany(companiesInSelectedCity);
  const sortedCompanies = Object.entries(groupedCompany).map((e) => e[0]);
  const [selectedCompany, setCompany] = useState(sortedCompanies[0]);

  useEffect(() => {
    // setCity(sortedCities[0]);
    // setCompany(sortedCompanies[0]);
  });

  return (
    <div className="App">
      <div className="selection-card">
        <SelectableList
          data={sortedCountries}
          default={selectedCountry}
          getSelection={(country) => setCountry(country)}
          listType={"Country"}
        />
        <SelectableList
          data={sortedCities}
          default={selectedCity}
          getSelection={(city) => setCity(city)}
          listType={"City"}
        />
        <SelectableList
          data={sortedCompanies}
          default={selectedCompany}
          getSelection={(company) => setCompany(company)}
          listType={"CompanyName"}
        />
        <MapDisplay />
      </div>
    </div>
  );
}

export default App;
