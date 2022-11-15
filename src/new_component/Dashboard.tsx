import React, { FC, useEffect, useState } from "react";
import CommonLayout from "containers/AccountPage/CommonLayout";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import emptyicon from "../images/transpost images/dashboard/emptyPng.png";
import axios from "axios";

import BookingCard from "./BookingCard";
import Loading from "./Loading";
import CommonSidebar from "./CommonSidebar";
import { useUserAuth } from "utils/contexts/userContext";

export interface BookingCardProps {
  data: {
    ID?: string;
    DateOfBooking?: string;
    ContainerType?: string;
    ShippingLineName?: string;
    name?: string;
    ContainerCount?: string;
    BookingNo?: string;
    POL?: string;
    POD?: string;
    pol: {
      country: string;
      port_code: string;
      port_name: string;
    };
    pod: {
      country: string;
      port_code: string;
      port_name: string;
    };
    cs_status: {
      name: string;
      template: string;
    };
  };
}

const Dashboard = () => {
  const [bookingList, setBookingList] = useState([]);
  const [allList, setAllList] = useState([]);
  const [pendingList, setPendingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  const { user } = useUserAuth();

  const fetchData = async () => {
    axios
      .get(
        `https://apis.transpost.co/api/bookings/user/?email=${user.email}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        const result = response.data;
        console.log("Booking List", result.data);

        setBookingList(result.data);
        setAllList(result.data);
        if (result.data.length > 0) {
          setCompletedList(
            result.data.filter((v: any) => {
              const { status } = v;
              return status === "8";
            })
          );
          setPendingList(
            result.data.filter((v: any) => {
              const { status } = v;
              return status !== "8";
            })
          );
        }
      });
  };

  useEffect(() => {
    
    if (user) {
      fetchData();
    }
  }, [user]);

  if (!user) {
    return null;
  }


  // for count set all in initial rendering

  const pendingBookings = () => {
    if (bookingList.length > 0) {
      setBookingList(
        allList.filter((v) => {
          const { status } = v;
          return status !== "8";
        })
      );
      setActiveTab("Pending");
    }
  };

  const completedBookings = () => {
    if (bookingList.length > 0) {
      setBookingList(
        allList.filter((v) => {
          const { status } = v;
          return status === "8";
        })
      );
      setActiveTab("Completed");
    }
  };

  const renderSidebar = () => {
    return <CommonSidebar />;
  };

  const renderSection1 = () => {
    return (
      // <div className="listingSection__wrap">
      <div>
        <div className="border-b border-neutral-200 dark:border-neutral-700  dark:bg-transparent">
          <div className="container">
            <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
              <button
                onClick={() => {
                  setBookingList(allList);
                  setActiveTab("All");
                }}
                className={`block py-1 md:py-2 border-b-2 border-transparent flex-shrink-0 ${
                  activeTab == "All" ? "border-b-2 border-primary-500" : ""
                }`}
              >
                All Bookings (
                <span className="font-semibold">{allList.length}</span>)
              </button>
              <button
                onClick={pendingBookings}
                className={`block py-1 md:py-2 border-b-2 border-transparent flex-shrink-0 ${
                  activeTab == "Pending" ? "border-b-2 border-primary-500" : ""
                }`}
              >
                Pending (
                <span className="font-semibold">{pendingList.length}</span>)
              </button>
              <button
                onClick={completedBookings}
                className={`block py-1 md:py-2 border-b-2 border-transparent flex-shrink-0 ${
                  activeTab == "Completed"
                    ? "border-b-2 border-primary-500"
                    : ""
                }`}
              >
                Completed (
                <span className="font-semibold">{completedList.length}</span>)
              </button>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  };

  const renderSection2 = () => {
    if (bookingList.length === 0) {
      return (
        <div className="mt-12">
          <Loading className="m-[100px] w-full h-[100px]"></Loading>
        </div>
      );
    }
    return (
      <div className="listingSection__wrap bg-white dark:text-neutral-300  dark:bg-neutral-800 ">
        {/* HEADING */}
        {bookingList.length > 0 ? (
          <>
            {bookingList.map((item, i) => {
              return <BookingCard data={item} key={i} />;
            })}
          </>
        ) : (
          <div className="h-screen flex flex-col justify-center items-center dark:bg-neutral-800 ">
            <img src={emptyicon} className="h-[4rem] w-[4rem]" alt="" />

            <div className="text-2xl text-centre font-semibold">
              You don't have any cargoes booked with you yet.
            </div>
          </div>
        )}
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
