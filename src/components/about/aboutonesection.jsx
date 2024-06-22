import React from "react";
import "../about/about.css";
import AboutBackImage from "../../assets/hrabout.jpg";

let AboutOneSection = () => {
  return (
    <div className="AboutBackImage">
      <img src={AboutBackImage} alt="" />
      <div className="AboutContent">
        <h1>Autsorsinq həlləri ilə əməliyyatları gücləndirin</h1>
      </div>
    </div>
  );
};

export default AboutOneSection;