import React from "react";
import "./App.css";
import data from "./data/clients.json";
import SelectableList from "./components/SelectableList";

function App() {
  let customerList = data.Customers;
  return (
    <div className="App">
      <SelectableList data={customerList} />
    </div>
  );
}

export default App;
