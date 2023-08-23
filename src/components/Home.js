import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [path, setPath] = useState("/");

  const pathHandler = (e) => {
    setPath(e.target.value);
  };

  return (
    <div className="home">
      <h1> Welcome to Synops Simulator Tool </h1>

      <div className="selection-sec">
        <h2> Select Your Channel. </h2>
        <div className="select-op form-group">
          <select onChange={pathHandler} className="form-control dropdown-primary">
            <option value="/"> Select </option>
            <option value="/ipad"> iPad </option>
            <option value="/epublish"> Epublish </option>
            <option value="/email"> Email </option>
            <option value="/banner"> Banner </option>
          </select>
          <Link to={path}>Select</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
