import React, { useState, useEffect } from "react";

function Selectablelist(props) {
  const [selectedItem, selectItem] = useState(props.data[1]);
  const handleChange = (e) => {
    selectItem(e.target.textContent);
  };
  const listItems = props.data.map((d, i) => (
    <li className="listItem" onClick={(e) => handleChange(e)} key={i}>
      {d}
    </li>
  ));

  useEffect(() => {
    props.getSelection(selectedItem);
  });

  return (
    <div className="item-list">
      <ul>{listItems}</ul>
    </div>
  );
}
export default Selectablelist;
