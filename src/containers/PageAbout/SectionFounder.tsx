import Heading from "components/Heading/Heading";
import React from "react";
import NcImage from "shared/NcImage/NcImage";
import satyaueImg from "../../images/transpost images/Aboutus/satyaue-paul_optimized-scaled.jpg";
import masoodImg from "../../images/transpost images/Aboutus/Masood Ahmed - CTO.jpg";
import vinayImg from "../../images/transpost images/Aboutus/Vinay Sangwan ( Head Of Sales - North Region).jpg";
import amtullaImg from "../../images/transpost images/Aboutus/Amtulla Kagalwala.jpeg";
import vivekImg from "../../images/transpost images/Aboutus/Vivek Das - Head Of Customer Experience.jpg";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `Satyaue Paul`,
    job: "CEO | Co-founder",
    avatar: satyaueImg,
  },
  {
    id: "2",
    name: `Masood Ahmed`,
    job: "CTO",
    avatar: masoodImg,
  },
  {
    id: "3",
    name: `Vinay Sangwan`,
    job: "Head Of Sales - North Region",
    avatar: vinayImg,
  },
  {
    id: "4",
    name: `Amtulla Kagalwala`,
    job: "Head of Sales - West Region",
    avatar: amtullaImg,
  },
  {
    id: "5",
    name: `Vivek Das`,
    job: "Head Of Customer Experience",
    avatar: vivekImg,
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="Our leadership team brings together industry experts with years of expertise.
        They cultivate our strong culture, and work tirelessly."
      >
        Our Passionate Team
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <NcImage
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
