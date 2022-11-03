import React from "react";
import oceanImg from "../../images/transpost images/landing-page/image-ocean-shipment@2x.png";
import oceanIcon from "../../images/transpost images/landing-page/ICONS/icon-ocean-shipment-large@2x.png";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface SolutionsIType {
  id: number;
  imgHref: string;
  iconHref: string;
  title: string;
  subtitle: string;
  buttonHref: string;
}

const SOLUTIONS_ARRAY = [
  {
    id: 1,
    imgHref:
     require("../../images/transpost images/landing-page/image-ocean-shipment@2x.png"),

    iconHref: require("../../images/transpost images/landing-page/ICONS/icon-ocean-shipment-large@2x.png"),

    title: "Ocean Shipment",
    subtitle:
      "Technology brings full scale benefits with visibility and access to shipping line rates, schedules and our best in class Booking Management Services.",
    buttonHref: "",
  },
  {
    id: 2,
    imgHref: require("../../images/transpost images/landing-page/image-cargo-insurance@2x.png"),
    iconHref: require("../../images/transpost images/landing-page/ICONS/icon-cargo-insurance-large@2x-1.png"),
    title: "Cargo Insurance",
    subtitle:
      "A specially curated insurance plan is at your fingertips as the platform offers easy purchase options.",
    buttonHref: "",
  },
  {
    id: 3,
    imgHref: require("../../images/transpost images/landing-page/image-trade-finance@2x.png"),
    iconHref: require("../../images/transpost images/landing-page/ICONS/icon-trade-finance-large@2x-1.png"),

    title: "Trade Finance",
    subtitle:
      "Get approved within 24 hours for your trade finance needs for the export shipments you have planned.*",
    buttonHref: "",
  },
  {
    id: 4,
    imgHref: require("../../images/transpost images/landing-page/image-freight-finance@2x.png"),

    iconHref: require("../../images/transpost images/landing-page/ICONS/icon-freight-finance-large@2x-1.png"),

    title: "Freight Finance",
    subtitle:
      "Unlock your growth potential fuelling your logistics cost with freight finance options.*",
    buttonHref: "",
  },
];

const SectionSolutions = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto text-4xl my-10 font-bold">
        <span className="text-[#01a77e] ">Solutions</span>
        <span> we offer</span>
      </div>
      <div className="mx-auto w-[26rem] text-center ">
        Our services and products support your supply chain and logistics needs
        for ocean shipments, cargo insurance and trade finance.
      </div>

      {SOLUTIONS_ARRAY.map((item: SolutionsIType) => {
        const { id, imgHref, iconHref, title, subtitle } = item;
        return (
          <div key={id} className={`flex ${ (id % 2 == 0) ? "flex-row-reverse" : "" }  w-full py-12`}>
            <div className="w-1/2">
              <img src={imgHref} alt="IMAGE" />
            </div>
            <div className="w-1/2 p-5 flex flex-col gap-8">
              <img src={iconHref} alt="" className="w-[6rem] pt-4" />
              <span className="font-bold text-4xl">{title}</span>
              <span>{subtitle}</span>
              <ButtonPrimary className="w-1/3">Learn more</ButtonPrimary>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionSolutions;
