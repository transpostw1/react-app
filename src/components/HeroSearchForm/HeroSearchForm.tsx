import AirSearchForm from "new_component/AirSearchForm/AirSearchForm";
import LandSearchForm from "new_component/LandSearchForm/LandSearchForm";
import Loading from "new_component/Loading";
import RentWarehouseSearchForm from "new_component/RentWarehouseSearchForm/RentWarehouseSearchForm";
import React, { FC, useState } from "react";
import "react-dates/initialize";
import ExperiencesSearchForm from "./ExperiencesSearchForm";
// import StaySearchForm from "./StaySearchForm";
// import RentalCarSearchForm from "./RentalCarSearchForm";
import FlightSearchForm from "./FlightSearchForm";

export type SearchTab = "Stays" | "Cargo Tracker" | "Cars" | "Sea" | "Land" |"Air" | "Rent Warehouse";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Stays" | "Cargo Tracker" | "Cars" | "Sea" | "Land" | "Air" | "Rent Warehouse";
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
  currentTab = "Sea",
  currentPage,
}) => {
  const tabs: SearchTab[] = ["Sea","Land","Air","Cargo Tracker","Rent Warehouse"];
  const [tabActive, setTabActive] = useState<SearchTab>(currentTab);


  const renderTab = () => {
    return (
      <ul className="ml-2 sm:ml-6  flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto w-fit px-4 py-2 rounded-full  hiddenScrollbar dark:bg-neutral-800">
        {tabs.map((tab) => {
          const active = tab === tabActive;
          return (
            <li
              onClick={() => setTabActive(tab)}
              className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium  ${
                active
                  ? ""
                  : "text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
              } `}
              key={tab}
            >
              {active && (
                <span className="block w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-[#2AA996] mr-2" />
              )}
              <span>{tab}</span>
            </li>
          );
        })}
      </ul>
    );
  };


  const renderForm = () => {
    const isArchivePage = !!currentPage && !!currentTab;
    switch (tabActive) {
      // case "Stays":
      // return <StaySearchForm haveDefaultValue={isArchivePage} />;
      case "Cargo Tracker":
        return <ExperiencesSearchForm haveDefaultValue={isArchivePage} />;
      // case "Cars":
      // return <RentalCarSearchForm haveDefaultValue={isArchivePage} />;
      case "Sea":
        return <FlightSearchForm haveDefaultValue={isArchivePage} />;
      case "Land":
        return <LandSearchForm />;
      case "Air":
        return <AirSearchForm/>;
      case "Rent Warehouse":
        return <RentWarehouseSearchForm/>;

      default:
        return null;
    }
  };

  return (
    <div className="border border-gray-500 px-10 pb-10 backdrop-blur-[2px] rounded-3xl  w-full">
      <div
        className={`nc-HeroSearchForm w-full max-w-6xl py lg:py-2 ${className}`}
        data-nc-id="HeroSearchForm"
      >
        {renderTab()}
        {renderForm()}
      </div>
    </div>
  );
};

export default HeroSearchForm;
