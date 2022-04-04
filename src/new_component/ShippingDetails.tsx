import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
// import ConatainerType from "./ConatainerType";
// import TransportationType from "./TransportationType";

// 1 => WHEN SELECTED POPOVER SHOULD CLOSE
// 2 => CHAGNING INPUT FIELD ACCORDINGLY/CHANGING CONTAINERTYPE
// 3 => SETTING DEFAULT VALUE

const ShipingDetails = () => {
  const [inputValue, setInputValue] = useState("FCL,20'Standard");
  const [isLActive, setIsLActive] = useState(false);
  const [isBActive, setIsBActive] = useState(false);
  const [isFActive, setIsFActive] = useState(true);
  const [vol, setVol] = useState(1);
  const [weight, setWeight] = useState(1);
  const [gWeight, setGWeight] = useState(1);
  const [transType, setTransType] = useState("FCL");
  const [contType, setContType] = useState("20'Standard");

  const defaultValue = () => {
    setIsLActive(false);
    setIsBActive(false);
    setIsFActive(true);
  };

  const selectHandler = () => {
    setInputValue(transType + "," + contType);
    console.log(inputValue);
  };

  return (
    <div>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              onChange={() => console.log("button clicked")}
              className={`
                ${open ? "" : "text-opacity-90"}
                text-white bg-[white] group my-5 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <input
                className="py-5 rounded border+-"
                value={inputValue}
                style={{ color: "black" }}
              />
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-black group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-1xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                    {/* <TransportationType /> */}
                    <div>
                      <h3>TRANSPORTATION TYPE</h3>
                      <select
                        className="w-full"
                        onChange={(e) => {
                          let Ttype = e.target.value;
                          setTransType(Ttype);
                          if (Ttype == "LCL") {
                            setIsLActive(true);
                            setIsBActive(false);
                            setIsFActive(false);
                            console.log("in LCL");
                          } else if (Ttype == "Bulk") {
                            setIsBActive(true);
                            setIsLActive(false);
                            setIsFActive(false);
                            console.log("in Bulk");
                          } else if (Ttype == "FCL") {
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
                              key={item}
                              value={
                                item == "Bulk"
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
                        <input className="w-full" type="number" min="0" value={weight}/>
                        <div className="mt-5">
                          <h3>
                            VOLUME, M<sup>3</sup>
                          </h3>
                          <input className="w-full" type="number" min="0" value={vol}/>
                        </div>
                      </div>
                    )}
                    {isBActive && (
                      <div>
                        <h3>GROSS WEIGHT, MT</h3>
                        <input className="w-full" type="number" min="0" value={gWeight}/>
                      </div>
                    )}
                    {isFActive && (
                      <div>
                        <h3>Type</h3>
                        <select
                          className="w-full"
                          onChange={(e) => setContType(e.target.value)}
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
