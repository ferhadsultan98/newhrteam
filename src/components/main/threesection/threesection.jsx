import React from "react";
import "../../main/threesection/threesection.css";
import ModernOutsorcing from "../../../assets/outsorcing1.png";
import StaffOutstaffing from "../../../assets/stafoutstaffing1.png";
import DirectPlacement from "../../../assets/directplace1.webp";

let ThreeSection = () => {
  return (
    <div className="threesection">
    <h1>HR Team</h1>
    <div className="ThreeSectionCards">
      <div className="ExpertiseCards">
        <div className="OneCardHeader">
          <p>Expertise</p>
        </div>
        <div className="OneCardMain">
          <img src={ModernOutsorcing} alt="" />
        </div>
        <div className="OneCardFooter">
          <h3>Modern Outsorcing</h3>
          <p>
            Modern outsourcing practices focus on strategic partnerships aimed
            at creating long-term value.
          </p>
        </div>
      </div>
      <div className="ExpertiseCards">
        <div className="OneCardHeader">
          <p>Expertise</p>
        </div>
        <div className="OneCardMain">
          <img src={StaffOutstaffing} alt="" />
        </div>
        <div className="OneCardFooter">
          <h3>Staff Outstaffing</h3>
          <p>
            Outstaffing is the ability to use staff owned by another company, or
            hire out-of-state labor.
          </p>
        </div>
      </div>
      <div className="ExpertiseCards">
        <div className="OneCardHeader">
          <p>Expertise</p>
        </div>
        <div className="OneCardMain">
          <img src={DirectPlacement} alt="" />
        </div>
        <div className="OneCardFooter">
          <h3>Direct Placement</h3>
          <p>
            Direct placement is a recruitment method where a company hires an
            employee directly without involving a third-party recruitment agency
            or staffing firm.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ThreeSection;
