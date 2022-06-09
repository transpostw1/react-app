import React from "react";
import Logo from "shared/Logo/Logo";

const dbNavData = [
  { name: "Overview", link: "overview" },
  { name: "Analysis", link: "analysis" },
  { name: "Shipments", link: "shipments" },
  { name: "Search Stats", link: "searrchstats" },
];

const DbNavbar = () => {
  return (
    <div>
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
          {dbNavData.map((item) => {
            const { name, link } = item;
            return (
              <div className="flex space-x-4">
                {" "}
                <a href={`/${link}`}>{name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DbNavbar;
