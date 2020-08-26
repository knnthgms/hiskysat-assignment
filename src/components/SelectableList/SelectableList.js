import React, { useState, useEffect } from "react";

function Selectablelist(props) {
  // const [fetchingData, setLoading] = useState(true);
  // const [fetchingError, setError] = useState(false);
  // const [data, setData] = useState(null);
  const listItems = props.data.map((d) => <li key={d.Country}>{d.Country}</li>);
  return (
    <div className="item-list">
      <ul>{listItems}</ul>
    </div>
  );
}
export default Selectablelist;
