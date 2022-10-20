import React, { useRef } from "react";
import { Helmet } from "react-helmet";

import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "./SectionHero";
import rightImage from "../../images/transpost images/heros/freight-finance/Freight-Finance_Illustration.png";
import FreightFinanceForm from "./FreightFinanceForm";

const PageFreightFinance = () => {
  const myRef = useRef<null | HTMLDivElement>(null);

  const clickHandler = () => {
    if (window.screen.width > 540) {
      myRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };
  
  return (
    <div className="">
      <Helmet>
        <title>Freight Finance</title>
      </Helmet>
      {/* BG GLASS */}
      <BgGlassmorphism />
      <div className="container py-16 lg:py-16 ">
        {/* <div className="container py-16 lg:py-28 "> */}
        {/* TODO: EDIT HEADING */}
        <SectionHero
          clickHandler={clickHandler}
          heading="Fuel your Freight finances"
          btnText="Get Started"
          rightImg={rightImage}
          subHeading="Freight finance solution for customers who need to cover logistics cost only"
        />
      </div>
      <div  ref={myRef}>
        <FreightFinanceForm  />
      </div>
    </div>
  );
};

export default PageFreightFinance;
