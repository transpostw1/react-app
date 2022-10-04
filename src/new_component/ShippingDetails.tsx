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
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                className="nc-icon-field  h-6 ml-3 sm:h-8 w-6 sm:w-8 mr-3"
                fill="#C9CFDB"
              >
                <path d="M14.7229 5.89836V9.48968L13.1479 8.96239V6.71865H6.84814V8.96239L5.27319 9.48968V5.89836C5.27319 5.68081 5.35616 5.47216 5.50384 5.31833C5.65152 5.1645 5.85182 5.07807 6.06067 5.07807H7.63562V4.05272C7.63562 3.88955 7.69784 3.73307 7.8086 3.61769C7.91937 3.50232 8.06959 3.4375 8.22623 3.4375H11.7699C11.9265 3.4375 12.0767 3.50232 12.1875 3.61769C12.2982 3.73307 12.3605 3.88955 12.3605 4.05272V5.07807H13.9354C14.1443 5.07807 14.3446 5.1645 14.4923 5.31833C14.6399 5.47216 14.7229 5.68081 14.7229 5.89836Z"></path>
                <path d="M17.8748 15.5365V15.9467C17.8748 16.1099 17.8125 16.2663 17.7018 16.3817C17.591 16.4971 17.4408 16.5619 17.2841 16.5619C15.783 16.5619 14.6387 16.0333 13.7587 15.0393C13.58 15.4895 13.2771 15.8744 12.8884 16.1454C12.4998 16.4165 12.0427 16.5614 11.575 16.5619H8.42505C7.95732 16.5614 7.50024 16.4165 7.11155 16.1454C6.72287 15.8744 6.42002 15.4895 6.24128 15.0393C5.36128 16.0336 4.21698 16.5619 2.71585 16.5619C2.55921 16.5619 2.40899 16.4971 2.29823 16.3817C2.18747 16.2663 2.12524 16.1099 2.12524 15.9467V15.5365C2.12524 15.3734 2.18747 15.2169 2.29823 15.1015C2.40899 14.9862 2.55921 14.9213 2.71585 14.9213C4.2315 14.9213 5.22175 14.1085 5.65363 12.9896L3.93102 11.1952C3.83562 11.0958 3.76633 10.9725 3.72982 10.8372C3.69331 10.7018 3.6908 10.559 3.72252 10.4224C3.75424 10.2858 3.81913 10.1599 3.91098 10.0569C4.00282 9.95395 4.11853 9.87728 4.247 9.83427L9.75933 7.98863C9.91598 7.93608 10.0845 7.93608 10.2412 7.98863L15.7535 9.83427C15.882 9.87728 15.9977 9.95395 16.0895 10.0569C16.1814 10.1599 16.2463 10.2858 16.278 10.4224C16.3097 10.559 16.3072 10.7018 16.2707 10.8372C16.2342 10.9725 16.1649 11.0958 16.0695 11.1952L14.3469 12.9896C14.7854 14.1267 15.7875 14.9213 17.2841 14.9213C17.4408 14.9213 17.591 14.9862 17.7018 15.1015C17.8125 15.2169 17.8748 15.3734 17.8748 15.5365Z"></path>
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
                        // className="nc-select w-full  dark:bg-transparent focus:bg-transparent"
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
                          } else if (Ttype === "FCL") {
                            setIsFActive(true);
                            setIsLActive(false);
                            setIsBActive(false);
                          }
                        }}
                      >
                        {[
                          "Full Container Load",
                          "Less Container Load",
                          "Bulk",
                        ].map((item) => {
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
