import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/Hero-illustration-main-1.png";
import HeroSearchForm from "components/HeroSearchForm/HeroSearchForm";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className=" text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
           <div className="text-[#218778]"> One <b >Globe</b>,</div>
            <div> One <b>Click.</b></div>
          </h2>
          <p className="">Transpost is an operating system for Customs Brokers and Forwarders enabling them to scale up their business with least effort and investment.</p>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
        <div className="flex-grow">
          <img className="w-full
          " src={imagePng} alt="hero" />
        </div>
      </div>

      <div className="z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
