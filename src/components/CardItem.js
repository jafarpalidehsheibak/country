import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <div className="links">
      <div className="card-item col-sm-12 col-md-4 col-lg-3">
        <img src={props.flags.svg} alt="ai"></img>
        <Link to="/detail">
          <h3>{props.name.common}</h3>
        </Link>
        <p>Pupulation: {props.population}</p>
        <p>Region: {props.region}</p>
        <p>Capital: {props.capital}</p>
      </div>
    </div>
  );
}

export default CardItem;
