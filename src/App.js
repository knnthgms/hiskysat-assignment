import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data/clients.json";
import { groupBy } from "./utils";
import SelectableList from "./components/SelectableList";

function App() {
  const customerList = data.Customers;
  const getUnique = (array, item) => {
    return array.map((e) => e[item]).filter((v, i, a) => a.indexOf(v) === i);
  };
  const countryList = getUnique(customerList, "Country");
  const cityList = getUnique(customerList, "City");
  const companyList = getUnique(customerList, "CompanyName");

  const groupByCountry = groupBy("Country");
  const groupedCountries = groupByCountry(customerList);
  const sortedCountries = Object.entries(groupedCountries)
    .sort((a, b) => a[1] - b[1])
    .map((e) => e[0]);
  const [selectedCountry, setCountry] = useState(sortedCountries[0]);

  const groupByCity = groupBy("City");
  const groupedCities = groupByCity(
    customerList.filter((a) => a.Country == selectedCountry)
  );
  const sortedCities = Object.entries(groupedCities)
    .sort((a, b) => a[1] - b[1])
    .map((e) => e[0]);
  const [selectedCity, setCity] = useState(sortedCities[0]);

  const groupByCompany = groupBy("CompanyName");
  const groupedCompany = groupByCompany(
    customerList.filter(
      (a) => a.Country == selectedCountry && a.City == selectedCity
    )
  );
  const sortedCompanies = Object.entries(groupedCompany)
    .sort((a, b) => a[1] - b[1])
    .map((e) => e[0]);
  const [selectedCompany, setCompany] = useState(sortedCompanies[0]);

  useEffect(() => {
    //lets see what
  });

  return (
    <div className="App">
      <div className="selection-card">
        <SelectableList
          data={sortedCountries}
          getSelection={(country) => setCountry(country)}
          listType={"Country"}
        />
        <SelectableList
          data={sortedCities}
          getSelection={(city) => setCity(city)}
          listType={"City"}
        />
        <SelectableList
          data={sortedCompanies}
          getSelection={(company) => setCompany(company)}
          listType={"CompanyName"}
        />
      </div>
    </div>
  );
}

export default App;
