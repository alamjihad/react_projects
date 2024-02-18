import "./App.css";
import { useState } from "react";

const api = {
  key: "f51d52f13c790a40e46470ddf80149ef",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="bg-white rounded-xl">
      <h1 className="text-black p-5 underline">Weather App</h1>
      <div>
        <input type="text" placeholder="Enter city name" onChange={(e) => setSearch(e.target.value)} className="bg-white text-black border-2 border-black rounded p-2 m-3" />
        <br></br>
        <br></br>
        <button onClick={searchPressed} className="bg-gray-500 p-2 px-5">Search</button>
      </div>
      {typeof weather.main !== "undefined" ? (
        <div>
          <p className="text-black p-3">{weather.name}</p>
          <p className="text-black p-3">{weather.main.temp}°C</p>
        </div>
      ) : (
        <p className="text-black p-4">Sorry! Your searched city is not founded.</p>
      )}
    </div>
  );
}

export default App;