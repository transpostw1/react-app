import React from "react";
import { NavLink } from "react-router-dom";

const CommonSidebar = () => {
  return (
    <div className="bg-white  w-full flex flex-col  sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-7 px-0 sm:p-6 xl:p-8 xl:h-screen">
      {/* ---- */}
      <div className="space-y-3 flex flex-col ">
        <h2 className="text-2xl font-semibold">Overview</h2>
      </div>

      {/* ---- */}
      <div className="border-b border-neutral-200 dark:border-neutral-700 w-14"></div>

      {/* ---- */}
      <div className="space-y-4">
        <NavLink
          activeClassName=" bg-primary-200 rounded-lg"
          to={"/user/bookings"}
          className="block py-1 md:py-2 pl-2 border-l-2 border-transparent flex-shrink-0 "
        >
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
              Bookings
            </span>
          </div>
        </NavLink>
        <NavLink
          activeClassName="bg-primary-200 rounded-lg"
          to={"/user/my-request"}
          className="block py-1 md:py-2 pl-2 border-b-2 border-transparent flex-shrink-0"
        >
          <div className="flex items-center space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
              Inquiries
            </span>
          </div>
        </NavLink>
        <NavLink
          activeClassName="bg-primary-200 rounded-lg"
          to={"/user/quotes"}
          className="block py-1 md:py-2 pl-2 border-b-2 border-transparent flex-shrink-0"
        >
          <div className="flex items-center space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
              Quotes
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default CommonSidebar;
