import React from "react";
import "../vacancies/vacancies.css";
import VacanciesBackImage from "../../assets/vacancies.jpg";

let VacanciesOneSection = () => {
  return (
    <div className="VacanciesBackImage">
      <img src={VacanciesBackImage} alt="VacanciesBackImage" />
      <div className="content">
        <h1>Əsas səhifə </h1>
        <h1>  / Vakansiyalar</h1>
      </div>
    </div>
  );
};

export default VacanciesOneSection;
