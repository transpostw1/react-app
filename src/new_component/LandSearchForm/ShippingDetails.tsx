import React, { useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

// 1 => select focus\ auto focus

export const ShipingDetails = (props: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState("FCL,20'Standard");
  const [isLActive, setIsLActive] = useState(false);
  const [isBActive, setIsBActive] = useState(false);
  const [isFActive, setIsFActive] = useState(true);
  const [vol, setVol] = useState(1);
  const [weight, setWeight] = useState(1);
  const [gWeight, setGWeight] = useState(1);
  const [transType, setTransType] = useState("FCL");
  const [contDetails, setContDetails] = useState("20'Standard");
  const [showPopover, setShowPopover] = useState(false);

  const selectHandler = () => {
    if (transType === "Less Truck Load") {
      setContDetails(vol + " M3/" + weight + " MT");
    } else if (transType === "Full Truck Load") {
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
    if (transType === "Less Truck Load") {
      setContDetails(vol + " M3/" + weight + " MT");
    } else if (transType === "Full Truck Load") {
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
                fill="#C9CFDB"
                className="nc-icon-field  h-6 ml-3 sm:h-8 w-6 sm:w-8 mr-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.473 9.49907L16.8273 7.93178C16.4919 7.61234 16.037 7.4329 15.5627 7.4329H14.5V5.71526C14.5 4.76844 13.6941 4.00098 12.7 4.00098H2.8C1.80589 4.00098 1 4.76844 1 5.71526V13.7406C1 14.8337 1.80474 15.835 2.94223 15.9812C3.80569 16.0921 4.58237 15.7276 5.05 15.1338C5.52168 15.7366 6.30772 16.0972 7.18013 15.9784C8.09245 15.8542 8.84176 15.1573 9.04645 14.3016C9.12391 13.9778 9.10911 13.7037 9.0543 13.4296H13.6457C13.6281 13.5078 13.6159 13.586 13.6086 13.6655C13.5086 14.7484 14.3265 15.786 15.4518 15.9685C16.8728 16.1991 18.1 15.1676 18.1 13.8581C18.1 13.7108 18.0824 13.5702 18.0543 13.4296H18.55C18.7961 13.4296 19 13.2354 19 13.001V10.7108C19 10.2563 18.8104 9.82044 18.473 9.49907ZM3.25 14.7153C2.7543 14.7153 2.35 14.3302 2.35 13.8581C2.35 13.386 2.7543 13.001 3.25 13.001C3.7457 13.001 4.15 13.386 4.15 13.8581C4.15 14.3302 3.7457 14.7153 3.25 14.7153ZM6.85 14.7153C6.3543 14.7153 5.95 14.3302 5.95 13.8581C5.95 13.386 6.3543 13.001 6.85 13.001C7.3457 13.001 7.75 13.386 7.75 13.8581C7.75 14.3302 7.3457 14.7153 6.85 14.7153ZM15.85 14.7153C15.3543 14.7153 14.95 14.3302 14.95 13.8581C14.95 13.386 15.3543 13.001 15.85 13.001C16.3457 13.001 16.75 13.386 16.75 13.8581C16.75 14.3302 16.3457 14.7153 15.85 14.7153ZM14.5 10.001V8.71527H15.5547C15.6742 8.71527 15.7867 8.76214 15.8711 8.8425L17.091 10.001H14.5Z"></path>
              </svg>
              <input
                className=" bg-transparent rounded border+- block font-bold text-neutral-800 focus:outline-none  dark:text-neutral-200"
                value={inputValue}
                // style={{ color: "neutral" }}
                onClick={() => {
                  setShowPopover(!showPopover);
                  setTransType("FCL");
                  setContDetails("20'Standard");
                }}
              ></input>
              <ChevronDownIcon
                onClick={() => {
                  setShowPopover(!showPopover);
                  setTransType("FCL");
                  setContDetails("20'Standard");
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
                          if (Ttype === "Less Truck Load") {
                            setIsLActive(true);
                            setIsBActive(false);
                            setIsFActive(false);
                            setVol(1);
                            setWeight(1);
                          } else if (Ttype === "Full Truck Load") {
                            setIsBActive(true);
                            setIsLActive(false);
                            setIsFActive(false);
                            setGWeight(1);
                          } else if (Ttype === "FCL") {
                            setIsFActive(true);
                            setIsLActive(false);
                            setIsBActive(false);
                          }
                        }}
                      >
                        {[
                          "Full Container Load",
                          "Full Truck Load",
                          "Less Truck Load",
                        ].map((item) => {
                          return (
                            <option
                              defaultValue={transType}
                              key={item}
                              value={
                                item === "Full Truck Load"
                                  ? "Full Truck Load"
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
                    {isBActive && (
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
                    {isFActive && (
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
                      </div>
                    )}
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
