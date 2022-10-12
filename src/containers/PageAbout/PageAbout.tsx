import React, { FC } from "react";

import { Helmet } from "react-helmet";

import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "./SectionHero";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import NcImage from "shared/NcImage/NcImage";
import rightImg from "images/transpost images/Aboutus/group.jpg";

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
        <SectionValues />
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

const SectionValues = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-y-0  xl:grid-cols-2  xl:gap-8 ">
      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span> */}
      <h1 className="hover:animate-bounce xl:mb-10  xl:pb-10 xl:col-span-2 text-center text-[3rem] leading-none font-bold">
        Our Values
      </h1>
      <div className="w-full xl:flex xl:p-5">
        <img className="invisible xl:visible" src="https://transpost.co/wp-content/themes/saasland-child/images/Save-time.svg"></img>
        <span className="ml-3">
          <h1 className="text-[1.5rem] mb-5 font-semibold">Be Agile</h1>
          <p>
          Being agile in everything we do to get the desired result for our
          customers, employees and stakeholders.
          </p>
        </span>
      </div>
      <div className="w-full xl:flex xl:p-5">
        <img className="invisible xl:visible" src="https://transpost.co/wp-content/themes/saasland-child/images/collaborate-and-win.svg"></img>
        <span className="ml-3">
          <h1 className="text-[1.5rem] mb-5 font-semibold">Collaborate & Win Together</h1>
          <p>
            We take pride in our collaborative work culture which enables
            integrated solutions, bringing the best outcomes.
          </p>
        </span>
      </div>
      <div className="w-full xl:flex xl:p-5">
        <img className=" invisible xl:visible" src="https://transpost.co/wp-content/themes/saasland-child/images/Open-to-ideas.svg"></img>
        <span className="ml-3">
          <h1 className="text-[1.5rem] mb-5 font-semibold">Open to New Ideas</h1>
          <p>
            Open mindedness and change go hand in hand. We encourage our
            employees to be open to new ideas and drive change.
          </p>
        </span>
      </div>
      <div className="w-full xl:flex xl:p-5">
        <img className=" invisible xl:visible" src="https://transpost.co/wp-content/themes/saasland-child/images/Diversity.svg"></img>
        <span className="ml-3">
          <h1 className="text-[1.5rem] mb-5 font-semibold">Strength in Diversity</h1>
          <p>
            We commit ourselves to diversity in as many ways as possible. Be it
            diversity in gender, culture, nationality or age.
          </p>
        </span>
      </div>
    </div>
  );
};

export default PageAbout;
