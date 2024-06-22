import React from "react";
import "../main/main.css"
import TwoSection from "./twosection/twosection";
import ThreeSection from "./threesection/threesection";
import SimpleSlider from "./onesection/onesection";

let Main = () => {
  return (
    <>
      <SimpleSlider/>
      <TwoSection />
      <ThreeSection />
    </>
  );
};

export default Main;
