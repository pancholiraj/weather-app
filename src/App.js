import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./components/WeatherBox";

import {
  BsFillCloudSunFill,
  BsCloudHazeFill,
  BsFillCloudLightningRainFill,
  BsFillCloudRainHeavyFill,
} from "react-icons/bs";
import { IoIosSunny, IoIosThunderstorm } from "react-icons/io";

function App() {
  const [cityInput, setCityInput] = useState("mumbai");
  const [cityName, setCityName] = useState("bangalore");
  const [cityWeather, setCityWeather] = useState();
  const [cityTemp, setCityTemp] = useState();
  const [cityHumidity, setCityHumidity] = useState();
  const [cityPressure, setCityPressure] = useState();
  const [citySunset, setCitySunset] = useState();
  const [cityWindSpeed, setCityWindSpeed] = useState();
  const [icon, setIcon] = useState();
  const fetchNewWeather = (e) => {
    console.log("clicked");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=f637215bcd63010ac4dbc9f97a6de921`
    )
      .then((data) => data.json())
      .then((result) => {
        setCityName(result.name);
        setCityWeather(result.weather[0].main);
        setCityTemp(result.main.temp);
        setCityHumidity(result.main.humidity);
        setCityPressure(result.main.pressure);
        setCitySunset(result.sys.sunset);
        setCityWindSpeed(result.wind.speed);
      });
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=f637215bcd63010ac4dbc9f97a6de921`
    )
      .then((data) => data.json())
      .then((result) => {
        setCityName(result.name);
        setCityWeather(result.weather[0].main);
        setCityTemp(result.main.temp);
        setCityHumidity(result.main.humidity);
        setCityPressure(result.main.pressure);
        setCitySunset(result.sys.sunset);
        setCityWindSpeed(result.wind.speed);
      });
  });
  return (
    <div className="App">
      <div className="inputForm">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="city"
            id="city"
            value={cityInput}
            onChange={(e) => {
              setCityInput(e.target.value);
            }}
          />
          <button type="submit" onClick={fetchNewWeather}>
            Search
          </button>
        </form>
      </div>
      <WeatherBox
        cityName={cityName}
        cityWeather={cityWeather}
        cityTemp={cityTemp}
        cityHumidity={cityHumidity}
        cityPressure={cityPressure}
        citySunset={citySunset}
        cityWindSpeed={cityWindSpeed}
        setCityWeather={setCityWeather}
        icon={icon}
        setIcon={setIcon}
      />
    </div>
  );
}

export default App;
