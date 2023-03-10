import React from "react";
import { NavLink } from "react-router-dom";
import CommonLayout from "containers/AccountPage/CommonLayout";
import emptyIcon from "../images/transpost images/dashboard/emptyPng.png";
import CommonSidebar from "./CommonSidebar";

const MyRequest = () => {


  const renderSection1 = () => {
    return (
      // <div className="listingSection__wrap">
      <div>
        <div className="border-b border-neutral-200 dark:border-neutral-700  dark:bg-transparent">
          <div className="container">
            <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
              <NavLink
                activeClassName="!border-primary-500"
                to="/user/my-request"
                className="block py-1 md:py-2 border-b-2 border-transparent flex-shrink-0"
              >
                All Request 0
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
      <div className="listingSection__wrap bg-white h-screen flex justify-center items-center dark:bg-neutral-800">
        {/* HEADING */}

        <img src={emptyIcon} className="h-[4rem] w-[4rem]" alt="" />
        <div className="text-2xl text-centre font-semibold">
          You haven't made any request yet.
        </div>
      </div>
    );
  };

  return (
    <CommonLayout>
      <main className="container mt-1 mb-24 lg:mb-20 flex flex-col lg:flex-row">
        <div className="block flex-grow mb-24 lg:mb-0">
          <div className="lg:sticky lg:top-24">
            <CommonSidebar />
          </div>
        </div>
        <div className="w-full w-[70%] space-y-5 lg:pl-5 flex-shrink-0">
          {renderSection1()}
          {renderSection2()}
        </div>
      </main>
    </CommonLayout>
  );
};

export default MyRequest;
