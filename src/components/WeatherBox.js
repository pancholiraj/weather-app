import React, { useEffect, useState } from "react";
import "./weatherBox.css";
import {
  BsFillCloudSunFill,
  BsCloudHazeFill,
  BsFillCloudLightningRainFill,
  BsFillCloudRainHeavyFill,
  BsFillMoonStarsFill,
} from "react-icons/bs";
import { IoIosSunny, IoIosThunderstorm } from "react-icons/io";
import { WiSunset, WiHumidity, WiRainWind, WiStrongWind } from "react-icons/wi";

import OtherData from "./OtherData";

const WeatherBox = ({
  cityName,
  cityWeather,
  cityTemp,
  cityHumidity,
  cityPressure,
  citySunset,
  cityWindSpeed,
  setCityWeather,
  icon,
  setIcon,
}) => {
  const [am, setAM] = useState(false);
  useEffect(() => {
    const d = new Date();
    let hour = d.getHours();
    if (cityWeather == "Haze") {
      setIcon(<BsCloudHazeFill />);
    } else if (cityWeather == "Clouds" || cityWeather == "Overcast clouds") {
      setIcon(<BsCloudHazeFill />);
    } else if (cityWeather == "Clear" || cityWeather == "Clear sky") {
      if (hour > 19 || time <= 5) {
        setIcon(<BsFillMoonStarsFill />);
      } else {
        setIcon(<IoIosSunny />);
      }
    } else if (cityWeather == "Mist") {
      if (hour > 19 || time <= 5) {
        setIcon(<BsFillMoonStarsFill />);
      } else {
        setIcon(<IoIosSunny />);
      }
    } else if (cityWeather == "Thunderstorm with light rain") {
      setIcon(<BsFillCloudLightningRainFill />);
    } else if (cityWeather == "Thunderstorm") {
      setIcon(<IoIosThunderstorm />);
    } else if (cityWeather == "Rain") {
      setIcon(<BsFillCloudRainHeavyFill />);
    } else {
      if (time < 18 && time >= 5) {
        setIcon(<BsFillMoonStarsFill />);
      } else {
        setIcon(<IoIosSunny />);
      }
    }

    if (hour > 12) {
      setAM(false);
    } else {
      setAM(true);
    }
  }, [cityName]);

  //   temp to 2 digits
  let temp = String(cityTemp);
  let temp2 = temp.split("");
  let newTemp = temp2[0] + temp2[1];

  //   current Time
  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  // convert seconds to time
  let sec = citySunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()} : ${date.getMinutes()}`;
  return (
    <div className="weatherBox">
      <div className="weatherIcon">{icon}</div>
      <div className="currentDetails">
        <div className="temp">
          <h1>{newTemp}&deg;</h1>
          <div className="weatherDetail">
            <p>{cityWeather}</p>
            <span>{cityName}</span>
          </div>
        </div>
        <div className="timeDate">
          <h2>{new Date().toLocaleDateString()}</h2>
          <h2>
            {time}
            {am ? "AM" : "PM"}
          </h2>
        </div>
      </div>
      <div className="otherData">
        <OtherData logo={<WiSunset />} level={`${timeStr}PM`} name={"sunset"} />
        <OtherData
          logo={<WiHumidity />}
          level={cityHumidity}
          name={"Humidity"}
        />
        <OtherData
          logo={<WiRainWind />}
          level={cityPressure}
          name={"Pressure"}
        />
        <OtherData
          logo={<WiStrongWind />}
          level={cityWindSpeed}
          name={"Speed"}
        />
      </div>
    </div>
  );
};

export default WeatherBox;
