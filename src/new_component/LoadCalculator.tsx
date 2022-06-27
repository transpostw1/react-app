import React from "react";
import { useState } from "react";

const LoadCalculator = () => {
  const tabs = ["Products", "Containers & Trucks", "Stuffing Result"];
  const [tabActive, setTabActive] = useState<string>("");

  const renderTab = () => {
    return (
      <ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar">
        {tabs.map((tab) => {
          const active = tab === tabActive;
          return (
            <li
              onClick={() => setTabActive(tab)}
              className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium ${
                active
                  ? ""
                  : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400"
              } `}
              key={tab}
            >
              {active && (
                <span className="block w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
              )}
              <span>{tab}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderAddGroup = () => {
    return <div>Add Groups </div>;
  };

  // const renderCard = () => {
  //   const isArchivePage = !!currentPage && !!currentTab;
  //   switch (tabActive) {
  //     // case "Stays":
  //     // return <StaySearchForm haveDefaultValue={isArchivePage} />;
  //     case "Cargo Tracker":
  //       return <ExperiencesSearchForm haveDefaultValue={isArchivePage} />;
  //     // case "Cars":
  //     // return <RentalCarSearchForm haveDefaultValue={isArchivePage} />;
  //     case "Rate Search":
  //       return <FlightSearchForm haveDefaultValue={isArchivePage} />;

  //     default:
  //       return null;
  //   }
  // };

  return (
    <div>
      {renderTab()}
      {renderAddGroup()}
      {/* {renderCard()} */}
    </div>
  );
};

export default LoadCalculator;
