import StartRating from "components/StartRating/StartRating";
import React, { FC, useEffect, useState, ReactElement } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import NcImage from "shared/NcImage/NcImage";
import { useLocation, RouteComponentProps } from "react-router-dom";
import moment from "moment";
import { IcommodityDetails } from "./CommodityInfo/CommodityInfoPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckSquare,faAnchorCircleCheck} from "@fortawesome/free-solid-svg-icons"


export interface BookingsProps {
  bId: string;
  bookedData: {
    ID?: string;
    _20gp?: string;
    _40gp?: string;
    _40hc?: string;
    sl_name?: string;
    expiry_date?: string;
    from_port?: string;
    service_mode?: string;
    to_port?: string;
    via?: string;
    sl_logo?: string;
    total?:string
  };
  cargoType: string;
  commodityDetails?:IcommodityDetails;
}

const Bookings = () => {
  const [bookingsData, setBookingsData] = useState<
    RouteComponentProps | null | {} | string
  >("");

  const location = useLocation<BookingsProps>();
  const { state } = location;

  useEffect(() => {
    setBookingsData(state);
  }, []);

  const renderContent = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
           We have received your booking.
        </h2>

        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* ------------------------ */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold"> Booking Details:</h3>
          <div className="flex flex-col sm:flex-row sm:items-center">
            {/* <div className="flex-shrink-0 w-full sm:w-40">
              <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
                <NcImage src="https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </div>
            </div> */}
            <div className="pt-5  sm:pb-5 sm:px-5 space-y-3">
              <div>
                {/* <span className="text-sm text-neutral-500 font-medium dark:text-neutral-400 line-clamp-1"> */}
                <span className="text-base sm:text-lg font-medium  block">
                  {`From ${state.bookedData.from_port} to ${state.bookedData.to_port}`}
                </span>
                <span className="text-base sm:text-lg font-medium mt-3 block">
                  Shipping Line - {state.bookedData.sl_name}
                </span>
              </div>
              <span className="block  text-sm text-neutral-500 dark:text-neutral-400">
                {/* { state.bookedData.service_mode ? Service - {state.bookedData.service_mode}: ""} */}
              </span>
              <div className="w-10 border-b border-neutral-200  dark:border-neutral-700"></div>
              {/* <StartRating /> */}
            </div>
          </div>
          <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700">
            <div className="flex-1 p-5 flex space-x-4">
              <svg
                className="w-8 h-8 text-neutral-300 dark:text-neutral-6000"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33333 8.16667V3.5M18.6667 8.16667V3.5M8.16667 12.8333H19.8333M5.83333 24.5H22.1667C23.4553 24.5 24.5 23.4553 24.5 22.1667V8.16667C24.5 6.878 23.4553 5.83333 22.1667 5.83333H5.83333C4.54467 5.83333 3.5 6.878 3.5 8.16667V22.1667C3.5 23.4553 4.54467 24.5 5.83333 24.5Z"
                  stroke="#D1D5DB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">Ready to Load</span>
                <span className="mt-1.5 text-lg font-semibold">
                   {moment( state.commodityDetails?.loadingDate).format('Do MMMM  YYYY')}
                </span>
              </div>
            </div>
            <div className="flex-1 p-5 flex space-x-4">
              <svg
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                className="nc-icon-field  h-6 ml-3 sm:h-8 w-6 sm:w-8 mr-3"
                fill="#C9CFDB"
              >
                <path d="M14.7229 5.89836V9.48968L13.1479 8.96239V6.71865H6.84814V8.96239L5.27319 9.48968V5.89836C5.27319 5.68081 5.35616 5.47216 5.50384 5.31833C5.65152 5.1645 5.85182 5.07807 6.06067 5.07807H7.63562V4.05272C7.63562 3.88955 7.69784 3.73307 7.8086 3.61769C7.91937 3.50232 8.06959 3.4375 8.22623 3.4375H11.7699C11.9265 3.4375 12.0767 3.50232 12.1875 3.61769C12.2982 3.73307 12.3605 3.88955 12.3605 4.05272V5.07807H13.9354C14.1443 5.07807 14.3446 5.1645 14.4923 5.31833C14.6399 5.47216 14.7229 5.68081 14.7229 5.89836Z"></path>
                <path d="M17.8748 15.5365V15.9467C17.8748 16.1099 17.8125 16.2663 17.7018 16.3817C17.591 16.4971 17.4408 16.5619 17.2841 16.5619C15.783 16.5619 14.6387 16.0333 13.7587 15.0393C13.58 15.4895 13.2771 15.8744 12.8884 16.1454C12.4998 16.4165 12.0427 16.5614 11.575 16.5619H8.42505C7.95732 16.5614 7.50024 16.4165 7.11155 16.1454C6.72287 15.8744 6.42002 15.4895 6.24128 15.0393C5.36128 16.0336 4.21698 16.5619 2.71585 16.5619C2.55921 16.5619 2.40899 16.4971 2.29823 16.3817C2.18747 16.2663 2.12524 16.1099 2.12524 15.9467V15.5365C2.12524 15.3734 2.18747 15.2169 2.29823 15.1015C2.40899 14.9862 2.55921 14.9213 2.71585 14.9213C4.2315 14.9213 5.22175 14.1085 5.65363 12.9896L3.93102 11.1952C3.83562 11.0958 3.76633 10.9725 3.72982 10.8372C3.69331 10.7018 3.6908 10.559 3.72252 10.4224C3.75424 10.2858 3.81913 10.1599 3.91098 10.0569C4.00282 9.95395 4.11853 9.87728 4.247 9.83427L9.75933 7.98863C9.91598 7.93608 10.0845 7.93608 10.2412 7.98863L15.7535 9.83427C15.882 9.87728 15.9977 9.95395 16.0895 10.0569C16.1814 10.1599 16.2463 10.2858 16.278 10.4224C16.3097 10.559 16.3072 10.7018 16.2707 10.8372C16.2342 10.9725 16.1649 11.0958 16.0695 11.1952L14.3469 12.9896C14.7854 14.1267 15.7875 14.9213 17.2841 14.9213C17.4408 14.9213 17.591 14.9862 17.7018 15.1015C17.8125 15.2169 17.8748 15.3734 17.8748 15.5365Z"></path>
              </svg>

              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">Containers</span>
                <span className="mt-1.5 text-lg font-semibold">
                  FCL - {state.cargoType}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------ */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Booking detail</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex text-neutral-6000 dark:text-neutral-300">
              <span className="flex-1">Reference Number</span>
              <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                TRA{state.bId}   <FontAwesomeIcon className="h-6 mx-2 text-[#218778]" icon={faAnchorCircleCheck} /> 
              </span>
            </div>
            <div className="flex text-neutral-6000 dark:text-neutral-300">
              <span className="flex-1">Date of Booking</span>
              <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                {moment().format("MMM Do, YYYY")}
              </span>
            </div>
            <div className="flex text-neutral-6000 dark:text-neutral-300">
              <span className="flex-1">Total</span>
              <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                {/* $
                {state.bookedData._20gp
                  ? state.bookedData._20gp
                  : state.bookedData._40gp
                  ? state.bookedData._40gp
                  : state.bookedData._40hc} */}
                  ${state.bookedData.total}
              </span>
            </div>
            {/* <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
              <span className="flex-1">Payment method</span>
              <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                Credit card
              </span>
            </div> */}
          </div>
        </div>
        <div>
          <ButtonPrimary href="/">Explore more rates</ButtonPrimary>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-PayPage`} data-nc-id="PayPage">
      <main className="container mt-11 mb-24 lg:mb-32 ">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

export default Bookings;
