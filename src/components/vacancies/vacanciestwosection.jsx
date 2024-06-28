import React,{useEffect} from "react";
import "../vacancies/vacancies.css";
import Aos from 'aos';
import 'aos/dist/aos.css'

let VacanciesTwoSection = () => {
  useEffect(() => {
    Aos.init();
     }, [])
  return (
    <>
    <div className="VacanciesContainer">
      <div className="VacanciesHeader" data-aos="zoom-in-up">
        <h1>Aktiv Vakansiyalar</h1>
        <p>Vakansiyalarımızı izləyərək iş təkliflərimizdən yararlanın</p>
      </div>
    </div>
       <div className="VacanciesInfo" data-aos="zoom-in-down">
        <div className="vacinfo">
      <a href="#"><ul >
         <li>Vakansiya edən şirkət</li>
         <li>Vakansiya məlumatı</li>
         <li>Tarix</li>
       </ul>
       </a> 
      <a href="#"><ul >
         <li>Vakansiya edən şirkət</li>
         <li>Vakansiya məlumatı</li>
         <li>Tarix</li>
       </ul>
       </a> 
      <a href="#"><ul >
         <li>Vakansiya edən şirkət</li>
         <li>Vakansiya məlumatı</li>
         <li>Tarix</li>
       </ul>
       </a> 
      <a href="#"><ul >
         <li>Vakansiya edən şirkət</li>
         <li>Vakansiya məlumatı</li>
         <li>Tarix</li>
       </ul>
       </a> 
      <a href="#"><ul >
         <li>Vakansiya edən şirkət</li>
         <li>Vakansiya məlumatı</li>
         <li>Tarix</li>
       </ul>
       </a> 
      <a href="#"><ul >
         <li>Vakansiya edən şirkət</li>
         <li>Vakansiya məlumatı</li>
         <li>Tarix</li>
       </ul>
       </a> 
      <a href="#"><ul >
         <li>Vakansiya edən şirkət</li>
         <li>Vakansiya məlumatı</li>
         <li>Tarix</li>
       </ul>
       </a> 
      <a href="#"><ul >
         <li>Vakansiya edən şirkət</li>
         <li>Vakansiya məlumatı</li>
         <li>Tarix</li>
       </ul>
       </a> 
      <a href="#"><ul >
         <li>Vakansiya edən şirkət</li>
         <li>Vakansiya məlumatı</li>
         <li>Tarix</li>
       </ul>
       </a> 
       </div>
     </div>
     </>
  );
};

export default VacanciesTwoSection;
