import React from "react";
import "./search.css";

const SerarchBox = ({placeholder,handlechange}) => {
  return (
    <div className="searchBox">
      <input
        className="search"
        placeholder={placeholder}
        type="search"
        onChange={handlechange}
      ></input>
    </div>
  );
};

export default SerarchBox;
