import rightImg from "images/transpost images/Aboutus/Group-134-1-1.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";

export interface PageAboutProps {
  className?: string;
}

const PageAbout: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>About || Transpost</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="Who we are"
          btnText=""
          subHeading="Our team comprises young entrepreneurs and professionals from the industry. We bring together the domain knowledge and entrepreneurship in logistics and supply chains to address key problems faced by customs brokers and forwarders.

          We achieve this by leveraging state-of-the-art technology to provide seamless processes, best-in-class products and a wholesome customer experience.
          
          We are a subsidiary of Seven Islands Logistics Pvt Ltd (a part of Seven Islands group), having a diverse board of domain specialists in Shipping, IT and Consulting to guide us."
        />

        <SectionFounder />
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay uniqueClassName="PageAbout_" />
        </div> */}

        {/* <SectionStatistic /> */}

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAbout;
