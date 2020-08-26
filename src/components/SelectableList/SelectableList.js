import React, { useState, useEffect } from "react";
import "./SelectableList.css";
function SelectableList(props) {
  const [selectedItem, selectItem] = useState(props.default);
  const handleChange = (e) => {
    selectItem(e.target.textContent);
  };
  const listItems = props.data.map((d, i) => (
    <li
      className={`listItem ${d === props.default ? "selected" : ""}`}
      onClick={(e) => handleChange(e)}
      key={i}
    >
      <span>{d}</span>
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
export default SelectableList;
