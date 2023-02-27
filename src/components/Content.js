import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Content.css";
import axios from "axios";
import { Search } from "./Search";

function Content() {
  const [filter, SetFilter] = useState("Filter By Region");
  const [data, setData] = useState([
    "Filter By Region",
    "Africa",
    "Asia",
    "America",
    "Oceania",
    "Europe",
  ]);
  const [country, setCountry] = useState("");

  function searchHandler(params) {
    setCountry(params);
  }
  // useEffect(() => {
  //   const fetch = async () => {
  //     await axios
  //       .get("https://restcountries.com/v3.1/all")
  //       .then((res) => {
  //         setData(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   fetch();
  // }, []);
  return (
    <div>
      <div className="content">
        <div className="above">
          <div className="above-content col-sm-12 col-md-4">
            <img src="/img/search.svg" alt="search"></img>
            <Search searchHandler={searchHandler} />
          </div>
          <div className="select-box col-sm-6 col-md-2">
            <div className="labelfilter">
              {/* <label>Filter by Region</label>
              <img src="./img/down.svg" alt="down"></img> */}
              <select onChange={(e) => SetFilter(e.target.value)}>
                {data.map((item) => {
                  return <option key={item}>{item}</option>;
                })}
              </select>
            </div>
            {/* <div className="ulfilter"> */}
            {/* <ul className="country">
                {data.map((item) => {
                  return <li>{item.region}</li>;
                })}
                <li>ddd</li>
                <li>ddd</li>
                <li>ddd</li>
                <li>ddd</li>
              </ul> */}
            {/* <select>
                <option>Filter by Region</option>
                {data.map((item) => {
                  return <option key={item}>{item.region}</option>;
                })}
              </select>
            </div> */}
          </div>
        </div>
        <div className="down">
          <Card filter={filter} country={country} />
        </div>
      </div>
    </div>
  );
}

export default Content;
