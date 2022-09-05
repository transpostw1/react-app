import React, { FC, ReactNode } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
  rightImg: string;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHero: FC<SectionHeroProps> = ({
  className = "",
  rightImg,
  heading,
  subHeading,
  btnText,
}) => {
  return (
    <div
      className={`nc-SectionHero relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:w-[60%] space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            <p className="leading-1 pb-5">
              Our team comprises young entrepreneurs and professionals from the
              industry. We bring together the domain knowledge and
              entrepreneurship in logistics and supply chains to address key
              problems faced by customs brokers and forwarders.
            </p>
            <p className="leading-2 pb-5">
              We achieve this by leveraging state-of-the-art technology to
              provide seamless processes, best-in-class products and a wholesome
              customer experience.
            </p>
            <p className="leading-1">
              We are a subsidiary of Seven Islands Logistics Pvt Ltd (a part of
              Seven Islands group), having a diverse board of domain specialists
              in Shipping, IT and Consulting to guide us.
            </p>
            {/* {subHeading} */}
          </span>
          {!!btnText && <ButtonPrimary href="/login">{btnText}</ButtonPrimary>}
        </div>
        <div className="">
          <img className="w-full" src={rightImg} alt="Group-pic" />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
