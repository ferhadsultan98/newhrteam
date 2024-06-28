import React from "react";
import "../contactonesection/contactonesection.css";
import ContactBackImage from "../../../assets/contactback.jpg";

let ContactOneSection = () => {
  return (
    <div className="ContactBackImage">
      <img src={ContactBackImage} alt="" />
      <div className="content">
          <h1>Əsas səhifə</h1>
        <h1>/ Əlaqə</h1>
      </div>
    </div>
  );
};

export default ContactOneSection;
