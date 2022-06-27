import React from "react";
import DbNavbar from "./dbNavbar/DbNavbar";
import CommonLayout from "containers/AccountPage/CommonLayout";
import CommentListing from "components/CommentListing/CommentListing";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { NavLink } from "react-router-dom";
import emptyicon from "../images/transpost images/dashboard/emptyPng.png";

import BookingCard from "./BookingCard";

const Dashboard = () => {
  const renderSidebar = () => {
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
            to={"/my-request"}
            className="block py-1 md:py-2 border-b-2 border-transparent flex-shrink-0"
          >
            <div className="flex items-center space-x-4 hover:border-b-2">
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
                My Request
              </span>
            </div>
          </NavLink>
          <NavLink
            to={"/dashboard"}
            className="block py-1 md:py-2 border-b-2 border-transparent flex-shrink-0 "
          >
            <div className="flex items-center space-x-4 hover:border-b-2">
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
                My Bookings
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    );
  };

  const renderSection1 = () => {
    return (
      // <div className="listingSection__wrap">
      <div>
        <div className="border-b border-neutral-200 dark:border-neutral-700  dark:bg-neutral-800">
          <div className="container">
            <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
              <NavLink
                activeClassName="!border-primary-500"
                to="/dashboard"
                className="block py-1 md:py-2 border-b-2 border-transparent flex-shrink-0"
              >
                All Bookings 0
              </NavLink>
              <NavLink
                // activeClassName="!border-primary-500"
                to="/dashboard"
                className="block py-1 md:py-2 border-b-2 border-transparent flex-shrink-0"
              >
                Pending 0
              </NavLink>
              <NavLink
                // activeClassName="!border-primary-500"
                to="/#"
                className="block py-1 md:py-2 border-b-2 border-transparent flex-shrink-0"
              >
                Completed 0
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap bg-white   ">
        {/* HEADING */}
        {true ? (
          <>
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
          </>
        ) : (
          <div className="h-screen flex flex-col justify-center items-center">
            <img src={emptyicon} className="h-[4rem] w-[4rem]" alt="" />
            <div className="text-2xl text-centre font-semibold">
              You don't have any cargoes booked with you yet.
            </div>
          </div>
        )}
        {/* <div className="w-14 border-b border-neutral-500 dark:border-neutral-700"></div> */}

        {/* comment */}
        {/* <div className="divide-y divide-neutral-100 dark:divide-neutral-800"> */}
        {/* <CommentListing hasListingTitle className="pb-8" />
          <CommentListing hasListingTitle className="py-8" />
          <CommentListing hasListingTitle className="py-8" />
          <CommentListing hasListingTitle className="py-8" />
          <div className="pt-8">
            <ButtonSecondary>View more 20 reviews</ButtonSecondary>
          </div> */}
        {/* </div> */}
      </div>
    );
  };


  

  return (
    <CommonLayout>
      <main className="container mt-1 mb-24 lg:mb-20 flex flex-col lg:flex-row">
        <div className="block flex-grow mb-24 lg:mb-0">
          <div className="lg:sticky lg:top-24">{renderSidebar()}</div>
        </div>
        <div className="w-full w-[70%] space-y-5 lg:pl-5 flex-shrink-0">
          {renderSection1()}
          {renderSection2()}
        </div>
      </main>
    </CommonLayout>
  );
};

export default Dashboard;
