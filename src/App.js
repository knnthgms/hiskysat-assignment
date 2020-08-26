import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data/clients.json";
import SelectableList from "./components/SelectableList";

function App() {
  const customerList = data.Customers;
  const getUnique = (array, item) => {
    return array.map((e) => e[item]).filter((v, i, a) => a.indexOf(v) === i);
  };
  const countryList = getUnique(customerList, "Country");
  const cityList = getUnique(customerList, "City");
  const companyList = getUnique(customerList, "CompanyName");
  const [selectedCountry, setCountry] = useState();
  const [selectedCity, setCity] = useState();
  const [selectedCompany, setCompany] = useState();

  return (
    <div className="App">
      <div className="selection-card">
        <SelectableList
          data={countryList}
          getSelection={(country) => setCountry(country)}
          listType={"Country"}
        />
        <SelectableList
          data={cityList}
          getSelection={(city) => setCity(city)}
          listType={"City"}
        />
        <SelectableList
          data={companyList}
          getSelection={(company) => setCompany(company)}
          listType={"CompanyName"}
        />
      </div>
    </div>
  );
}

export default App;
