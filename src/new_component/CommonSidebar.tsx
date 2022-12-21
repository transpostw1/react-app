import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBriefcase,faQuoteLeftAlt,faComment} from "@fortawesome/free-solid-svg-icons"

const CommonSidebar = () => {
  return (
    <div className="bg-white w-full flex flex-col  sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 space-y-6 sm:space-y-7 px-0 sm:p-6 xl:p-8 xl:h-screen">
      {/* ---- */}
      <div className="space-y-3 flex flex-col ">
        <h2 className="text-2xl font-semibold">Overview</h2>
      </div>

      {/* ---- */}
      <div className="border-b border-neutral-200 dark:border-neutral-700 w-14"></div>

      {/* ---- */}
      <div className="space-y-4">
        <NavLink
          activeClassName="bg-primary-200 rounded-lg dark:bg-neutral-700 "
          to={"/user/bookings"}
          className="block py-1 md:py-2 pl-2 border-l-2 border-transparent flex-shrink-0 "
        >
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon className="h-5 w-5"  icon={faBriefcase}/>
          
            <span className="text-neutral-6000 dark:text-neutral-300">
              Bookings
            </span>
          </div>
        </NavLink>
        <NavLink
          activeClassName="bg-primary-200 rounded-lg dark:bg-neutral-700 "
          to={"/user/my-request"}
          className="block py-1 md:py-2 pl-2 border-b-2 border-transparent flex-shrink-0"
        >
          <div className="flex items-center space-x-4 ">
          <FontAwesomeIcon  className="h-5 w-5" icon={faComment}/>
{/* 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg> */}
            <span className="text-neutral-6000 dark:text-neutral-300 ">
              Inquiries
            </span>
          </div>
        </NavLink>
        <NavLink
          activeClassName="bg-primary-200 rounded-lg dark:bg-neutral-700 "
          to={"/user/quotes"}
          className="block py-1 md:py-2 pl-2 border-b-2 border-transparent flex-shrink-0"
        >
          <div className="flex items-center space-x-4 ">
            <FontAwesomeIcon className="h-5 w-5"  icon={faQuoteLeftAlt}/>
            
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
