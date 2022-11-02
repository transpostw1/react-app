import React, { FC } from "react";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { Helmet } from "react-helmet";
import SectionGridFilterCard from "containers/ListingFlightsPage/SectionGridFilterCard";

import SectionHeroArchivePage from './SectionHeroArchivePage'


export interface WarehousingPageProps {
    className?: string;
  }

const WarehousingPage:FC<WarehousingPageProps> = (
    {className=""}
) => {
  return (
    <div
    className={`nc-ListingFlightsPage relative overflow-hidden ${className}`}
    data-nc-id="ListingFlightsPage"
  >
    <Helmet>
      <title>Transpost</title>
    </Helmet>
    <BgGlassmorphism />

    <div className="container relative">
      {/* SECTION HERO */}
      <SectionHeroArchivePage
        currentPage="Warehousing & Disitribution"
        currentTab="Warehousing & Disitribution"
        listingType={
          <>
            {/* <span className="ml-2.5">1599 flights</span> */}
          </>
        }
        className="pt-10 pb-24 lg:pb-32 lg:pt-16 "
      />

      {/* SECTION */}
      {/* <SectionGridFilterCard className="pb-24 lg:pb-32" from_port={""} to_port={""} sl_date={undefined} cargo_type={null} /> */}
<div className="pb-24 lg:mb-[16rem]"> </div>

    </div>
  </div>
);
  
}

export default WarehousingPage




