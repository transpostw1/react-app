import React, { useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

// 1 => select focus\ auto focus

export const ShipingDetails = (props: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState("AIR,1MT");
  const [isLActive, setIsLActive] = useState(false);
  const [isBActive, setIsBActive] = useState(false);
  const [isFActive, setIsFActive] = useState(true);
  const [vol, setVol] = useState(1);
  const [weight, setWeight] = useState(1);
  const [gWeight, setGWeight] = useState(1);
  const [transType, setTransType] = useState("AIR");
  const [contDetails, setContDetails] = useState("1MT");
  const [showPopover, setShowPopover] = useState(false);

  const selectHandler = () => {
    if (transType === "LCL") {
      setContDetails(vol + " M3/" + weight + " MT");
    } else if (transType === "Bulk") {
      setContDetails(gWeight + " MT");
    }
    setInputValue(transType + "," + contDetails);
    setShowPopover(!showPopover);
  };

  // for click outside div
  useEffect(() => {
    if (eventClickOutsideDiv) {
      document.removeEventListener("click", eventClickOutsideDiv);
    }
    showPopover && document.addEventListener("click", eventClickOutsideDiv);
    return () => {
      document.removeEventListener("click", eventClickOutsideDiv);
    };
  }, [showPopover]);

  useEffect(() => {
    props.selectedType(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (transType === "LCL") {
      setContDetails(vol + " M3/" + weight + " MT");
    } else if (transType === "Bulk") {
      setContDetails(gWeight + " MT");
    }
  }, [transType, contDetails]);

  useEffect(() => {
    setInputValue(transType + "," + contDetails);
  }, [contDetails]);
  const defaultV = () => {
    setIsFActive(true);
    setIsLActive(false);
    setIsBActive(false);
  };
  useEffect(() => {
    defaultV();
  }, [showPopover]);

  const eventClickOutsideDiv = (event: MouseEvent) => {
    if (!containerRef.current) return;
    // CLICK IN_SIDE
    if (!showPopover || containerRef.current.contains(event.target as Node)) {
      return;
    }
    // CLICK OUT_SIDE
    setShowPopover(false);
  };

  return (
    <div ref={containerRef}>
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "nc-hero-field-focused" : "text-opacity-90"}
                nc-hero-field-padding  text-white bg-white group bg-transparent mt-5 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white  text-neutral-300 dark:bg- dark:text-neutral-400 focus-visible:ring-opacity-75`}
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="nc-icon-field  h-6 ml-3 sm:h-8 w-6 sm:w-8 mr-3"
                fill="#C9CFDB"
              >
                <g clip-path="url(#Air0)">
                  <path d="M3.72074 4.9118C3.82515 4.81502 4.02851 4.78031 4.17532 4.83398L10.2238 7.06531L12.5521 4.90738C13.2722 4.23998 15.1167 3.75142 15.8675 4.56149C16.6183 5.37156 15.9912 7.1737 15.2711 7.8411L12.9428 9.99903L14.7084 16.1999C14.7564 16.3678 14.7135 16.5387 14.597 16.6467L13.2625 17.8835C13.0461 18.0841 12.673 17.9958 12.5158 17.7061L9.86963 12.8474L7.77372 14.7899L8.11728 16.9255C8.14116 17.0751 8.09484 17.2192 7.99234 17.3142L7.1774 18.0695C6.96538 18.2661 6.60226 18.1859 6.4394 17.9067L4.7843 14.8337L1.84567 12.9503C1.57968 12.7668 1.52725 12.3986 1.73927 12.2021L2.55421 11.4468C2.65671 11.3518 2.80393 11.3165 2.95131 11.3517L5.05466 11.8562L7.15057 9.91366L2.50621 6.90628C2.22927 6.72754 2.16982 6.34924 2.38628 6.14861L3.72074 4.9118Z"></path>
                </g>
                <clipPath id="Air0">
                  <rect width="20" height="20" fill="white"></rect>
                </clipPath>
              </svg>
              <input
                className=" bg-transparent rounded border+- block font-bold text-neutral-800 focus:outline-none  dark:text-neutral-200"
                value={inputValue}
                // style={{ color: "neutral" }}
                onClick={() => {
                  setShowPopover(!showPopover);
                  setTransType("Standard Cargo");
                  setContDetails("1MT");
                }}
              ></input>
              <ChevronDownIcon
                onClick={() => {
                  setShowPopover(!showPopover);
                  setTransType("Standard Cargo");
                  setContDetails("1MT");
                }}
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-black group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              show={showPopover}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3  transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-1xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7 lg:grid-cols-1">
                    {/* <TransportationType /> */}
                    <div>
                      <h3>SHIPMENT</h3>
                      <select
                        className="nc-Select h-11 mt-1.5 block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700  dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-800"
                        onChange={(e) => {
                          let Ttype = e.target.value;
                          setTransType(Ttype);
                          if (Ttype === "LCL") {
                            setIsLActive(true);
                            setIsBActive(false);
                            setIsFActive(false);
                            setVol(1);
                            setWeight(1);
                          } else if (Ttype === "Bulk") {
                            setIsBActive(true);
                            setIsLActive(false);
                            setIsFActive(false);
                            setGWeight(1);
                          } else if (Ttype === "Standard Cargo") {
                            setIsFActive(true);
                            setIsLActive(false);
                            setIsBActive(false);
                          }
                        }}
                      >
                        {["Standard Cargo"].map((item) => {
                          return (
                            <option
                              defaultValue={transType}
                              key={item}
                              value={
                                item === "Bulk"
                                  ? "Bulk"
                                  : item.match(/[A-Z]/g)?.join("")
                              }
                            >
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    {/* <ConatainerType /> */}
                    {isLActive && (
                      <div>
                        <h3>WEIGHT, MT</h3>
                        <input
                          className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                          type="number"
                          min="0"
                          value={weight}
                          onChange={(e) => setWeight(parseInt(e.target.value))}
                        />
                        <div className="mt-5">
                          <h3>
                            VOLUME, M<sup>3</sup>
                          </h3>
                          <input
                            className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                            type="number"
                            min="0"
                            value={vol}
                            onChange={(e) => setVol(parseInt(e.target.value))}
                          />
                        </div>
                      </div>
                    )}
                    {isFActive && (
                      <div>
                        <h3>GROSS WEIGHT, MT</h3>
                        <input
                          className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                          type="number"
                          min="0"
                          onChange={(e) => setGWeight(parseInt(e.target.value))}
                          value={gWeight}
                        />
                      </div>
                    )}
                    {/* {isFActive && (
                      <div>
                        <h3>Type</h3>
                        <select
                          className="nc-Select h-11 mt-1.5 block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700  dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-800"
                          onChange={(e) => setContDetails(e.target.value)}
                        >
                          {[
                            "20'Standard",
                            "40'Standard",
                            "40'High Cube",
                            "20'Refrigerated",
                            "40'Refrigerated",
                            "45'High Cube",
                          ].map((item) => {
                            return (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div> */}
                    {/* )} */}
                    <button
                      type="button"
                      onClick={selectHandler}
                      className="bg-[#2AA996] hover:bg-[#218778] text-white font-bold py-2 px-4 rounded"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default ShipingDetails;
