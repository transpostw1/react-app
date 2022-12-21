import React, { useState, useEffect } from "react";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import moment from "moment";

import cargoDetails from "../../data/jsons/__containerTracking.json";
import { useCargoDetails } from "utils/contexts/cargoContext";
import Loading from "new_component/Loading";

const __tablehead = [
  "Milestones",
  "Location",
  "Vessel Name",
  "Planned Date",
  "Actual Date",
];

//TODO: Implement context api for rendering modal

const CargoDetailsModal = () => {
  const { visible, closeModal, cargoDetails, loading } = useCargoDetails();

  useEffect(() => {
    if (visible === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });

  if (!visible) {
    return null;
  } else if (Object.keys(cargoDetails).length === 0) {
    return null;
  }

  const Loader = () => {
    return (
      <div className=" fixed z-max flex  inset-0 bg-neutral-200 align-center justify-center  items-center bg-opacity-10  backdrop-blur-sm border rounded dark:border-neutral-800  ">
        <div className="absolute flex justify-center align-center">
          <svg
            className={`animate-spin w-8 h-8 -ml-1 mr-3  `}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    );
  };

  if(!cargoDetails){
return <Loader/>
  }
  const rendertable = () => {
    return (
      <>
        <div className="grid grid-cols-5 mt-5 font-semibold border-l border-neutral-300 text-center mx-5  ">
          {__tablehead.map((val) => {
            return (
              <div className="border-y border-r p-5 border-neutral-300 ">
                {val}
              </div>
            );
          })}
        </div>
        {cargoDetails.container.sailingInfo.map((item: any) => {
          return (
            <div className="grid grid-cols-5  border-l border-neutral-300 mx-5">
              <div className="border-r border-b border-neutral-300 text-center p-5 ">
                {item.description}
              </div>
              <div className="border-r border-b border-neutral-300 text-center p-5 ">
                {cargoDetails.locations[item.location - 1].name}
              </div>
              {
                <div className="border-r border-b border-neutral-300 text-center p-5">
                  {item.vessel
                    ? cargoDetails.vessels[item.vessel - 1].name
                    : "-"}
                </div>
              }
              <div className="border-r border-b border-neutral-300 text-center p-5">
                {item.eventStatus
                  ? "-"
                  : moment(item.date).format("DD-MMM YYYY h:mm a")}
              </div>
              <div className="border-r border-b border-neutral-300 text-center p-5 ">
                {item.eventStatus
                  ? moment(item.date).format("DD-MMM YYYY h:mm a")
                  : "-"}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className=" fixed z-max flex  inset-0 bg-neutral-200 align-center justify-center  items-center bg-opacity-10  backdrop-blur-sm border rounded dark:border-neutral-800  ">
      <div className="flex absolute max-h-[80%] flex-col  bg-white border rounded-lg dark:border-neutral-600 dark:bg-neutral-700">
        <ButtonClose className="absolute right-1 top-1" onClick={closeModal} />
        <span className=" text-left py-5 px-4 h-auto border-neutral-100 dark:border-neutral-700 text-base w-full font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200 ">
          {`Track & Trace`}
        </span>
        <div className="inline-block border-b w-full relative border-text-neutral-900 "></div>
        {/* Body */}
        <div className="relative py-5  max-h-[80%] overflow-y-auto">
          <div className="flex px-8 justify-between  w-full">
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-400">
                Container Number
              </span>
              <span className="font-semibold">
                {cargoDetails.container.number}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-400">POL</span>
              <span className="font-semibold">
                {
                  cargoDetails.locations[
                    cargoDetails.schedule.originPol.location - 1
                  ].name
                }
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-400">POD</span>
              <span className="font-semibold">
                {
                  cargoDetails.locations[
                    cargoDetails.schedule.destinationPod.location - 1
                  ].name
                }
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-400">ETA</span>
              <span className="font-semibold">N/A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-400">
                Departure Date
              </span>
              <span className="font-semibold">
                {moment(cargoDetails.schedule.originInland.date).format(
                  "DD-MMM YYYY"
                )}
              </span>
            </div>
            <div className="border-r border-neutral-300"></div>
            <div className="flex flex-col ">
              <span className="font-semibold text-neutral-400">Created On</span>
              <span className="font-semibold"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-400">Created By</span>
              <span className="font-semibold"></span>
            </div>
          </div>
          <div className="inline-block border-b w-full relative border-text-neutral-900 "></div>
          {rendertable()}
        </div>
        <span className="  bg-white  border-t border-neutral-300 py-8 dark:border-neutral-700 text-base w-full font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200"></span>
      </div>
    </div>
  );
};

export default CargoDetailsModal;
