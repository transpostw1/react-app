import React, { useState, useEffect } from "react";
import LocationInput from "components/HeroSearchForm/LocationInput";
import { FocusedInputShape } from "react-dates";
import ExperiencesDateSingleInput from "components/HeroSearchForm/ExperiencesDateSingleInput";
import ShippingDetails from "./ShippingDetails";

const AirSearchForm = () => {
  const [pickUpInputValue, setPickUpInputValue] = useState("");
  const [dropOffInputValue, setDropOffInputValue] = useState("");
  const [fieldFocused, setFieldFocused] = useState<
    FocusedInputShape | "dropOffInput" | null
  >(null);
  const [dateValue, setdateValue] = useState<moment.Moment | null>(null);
  const [dateFocused, setDateFocused] = useState<boolean>(false);

  const submitHandler = () => {};

  const selectedType = () =>{

  }

  const renderForm = () => {
    return (
      <div className="w-full">
        <form className="w-full relative mt-2 rounded-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
          {/* {renderRadioBtn()} */}
          <div className=" flex flex-col md:flex-row w-full rounded-full [ nc-divide-field ] ">
            <div className="relative flex flex-col md:flex-row flex-grow [ nc-divide-field ] ">
              <LocationInput
                defaultValue={pickUpInputValue}
                onChange={(e) => {
                  setPickUpInputValue(e);
                }}
                
                onInputDone={() => setFieldFocused("dropOffInput")}
                placeHolder="Origin"
                desc="From"
              />
              <LocationInput
                defaultValue={dropOffInputValue}
                onChange={(e) => {
                  setDropOffInputValue(e);
                }}
                onInputDone={() => setFieldFocused("startDate")}
                placeHolder="Destination"
                desc="To"
                autoFocus={fieldFocused === "dropOffInput"}
              />
              {/* for single date selector */}

              <ExperiencesDateSingleInput
                defaultValue={dateValue}
                onChange={(date) => {
                  setdateValue(date);
                }}
                defaultFocus={dateFocused}
                onFocusChange={(focus: boolean) => {
                  setDateFocused(focus);
                }}
              />

              {/* shipping details - new component */}
              <ShippingDetails selectedType={selectedType} />
              {/* BUTTON SUBMIT OF FORM */}
            </div>
            <div className="px-4 py-3 flex items-center justify-center">
              {/* <ButtonSubmit  /> */}
              <button
                onClick={submitHandler}
                type="button"
                className="h-14  md:h-16 w-full md:w-16 rounded-full bg-[#cd512f] hover:bg-[#218778] flex items-center justify-center text-neutral-50 focus:outline-none"
              >
                <span className="mr-3 md:hidden">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return renderForm();
}

export default AirSearchForm