import React from "react";
import { WiSunset } from "react-icons/wi";
const OtherData = ({ logo, level, name }) => {
  return (
    <div className="details">
      {logo}
      <section>
        <p>{level}</p>
        <span>{name}</span>
      </section>
    </div>
  );
};

export default OtherData;
