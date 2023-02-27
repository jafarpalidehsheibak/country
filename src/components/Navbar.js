import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div>
      <div className="navbar">
        <a href="https://google.com">
          <h1>Where in the World ?</h1>
        </a>
        <button onClick={() => props.toggleTheme()}>
          <img src="./img/moon.svg" alt="moon"></img>
          Dark Mode
        </button>
      </div>
    </div>
  );
}

export default Navbar;
