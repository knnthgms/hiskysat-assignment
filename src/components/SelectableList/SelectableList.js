import React, { useState, useEffect } from "react";
import "./SelectableList.css";
function SelectableList(props) {
  const [selectedItem, selectItem] = useState(props.default);
  const handleChange = (e) => {
    selectItem(e.target.textContent);
  };
  const listItems = props.data.map((d, i) => (
    <div
      className={`listItem ${d === props.default ? "selected" : ""}`}
      onClick={(e) => handleChange(e)}
      key={i}
    >
      <span>{d}</span>
    </div>
  ));

  useEffect(() => {
    props.getSelection(selectedItem);
  });

  return (
    <div className="list">
      <div className="title">{props.listType}</div>
      <div className="item-list">{listItems}</div>
    </div>
  );
}
export default SelectableList;
