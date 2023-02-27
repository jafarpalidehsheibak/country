import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import axios from "axios";

function Card({ filter, country }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);

  return (
    <div>
      <div className="card ">
        {data.map((item) => {
          if (country && item.name.common.toLowerCase().includes(country))
            return <CardItem {...item} key={item.name.common} />;
          else if (!country && filter === "Filter By Region")
            return <CardItem {...item} key={item.name.common} />;
          else if (!country && filter === item.region)
            return <CardItem {...item} key={item.name.common} />;
        })}
      </div>
    </div>
  );
}

export default Card;
