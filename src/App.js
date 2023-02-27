import { useState, useEffect } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/detail" element={<CardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
