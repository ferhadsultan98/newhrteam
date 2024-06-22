import React from "react";
import "../vacancies/vacancies.css";
import VacanciesBackImage from "../../assets/vacancies.jpg";

let VacanciesOneSection = () => {
  return (
    <div className="VacanciesBackImage">
      <img src={VacanciesBackImage} alt="VacanciesBackImage" />
      <div className="VacanciesContent">
        <h1>Boost Operations With Outsourcing Solutions</h1>
      </div>
    </div>
  );
};

export default VacanciesOneSection;
