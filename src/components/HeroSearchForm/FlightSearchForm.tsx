import React, { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import { FocusedInputShape } from "react-dates";
// import RentalCarDatesRangeInput from "./RentalCarDatesRangeInput";
import ButtonSubmit from "./ButtonSubmit";
import { FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import moment from "moment";
import NcInputNumber from "components/NcInputNumber/NcInputNumber";
import ExperiencesDateSingleInput from "./ExperiencesDateSingleInput";
import GuestsInput, { GuestsInputProps } from "./GuestsInput";
import ShippingDetails from "new_component/ShippingDetails";
import { url } from "inspector";
import { fetchData } from "../../redux";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";



// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Nava Sheva";
const defaultDate = moment();
const defaultGuestValue: GuestsInputProps["defaultValue"] = {
  guestAdults: 2,
  guestChildren: 2,
  guestInfants: 1,
};

export interface ExperiencesSearchFormProps {
  haveDefaultValue?: boolean;
}

export interface DateRage {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}

export interface TimeRage {
  startTime: string;
  endTime: string;
}

export interface FlightSearchFormProps {
  haveDefaultValue?: boolean;
  fetchData: () => {} | any; // check
}

const flightClass = [
  {
    name: "Economy",
    href: "##",
  },
  {
    name: "Business",
    href: "##",
  },
  {
    name: "Multiple",
    href: "##",
  },
];

const FlightSearchForm: FC<FlightSearchFormProps> = ({ haveDefaultValue, fetchData }) => {
  const [dateValue, setdateValue] = useState<moment.Moment | null>(null);
  const [locationInputValue, setLocationInputValue] = useState("");
  const [guestValue, setGuestValue] = useState({});
  const [contDetails, setContDetails] = useState("");
  // const [apiData, setApiData] = useState(null);

  const [dateFocused, setDateFocused] = useState<boolean>(false);

  const selectedType = (value: React.SetStateAction<string>) => {
    setContDetails(value);
  };

  const submitHandler = () => {
    fetchData();
  };

  useEffect(() => {
    if (haveDefaultValue) {
      setdateValue(defaultDate);
      setLocationInputValue(defaultLocationValue);
      setGuestValue(defaultGuestValue);
    }
  }, []);

  // DEFAULT DATA FOR ARCHIVE PAGE
  const defaultPickUpInputValue = "Nhava Sheva, India";
  const defaultDropOffInputValue = "Fos-sur-Mer, France";

  // USE STATE
  const [dateRangeValue, setDateRangeValue] = useState<DateRage>({
    startDate: null,
    endDate: null,
  });
  const [timeRangeValue, setTimeRangeValue] = useState<TimeRage>({
    startTime: "10:00 AM",
    endTime: "10:00 AM",
  });
  const [pickUpInputValue, setPickUpInputValue] = useState("");
  const [dropOffInputValue, setDropOffInputValue] = useState("");
  const [fieldFocused, setFieldFocused] = useState<
    FocusedInputShape | "dropOffInput" | null
  >(null);
  const [dropOffLocationType, setDropOffLocationType] = useState<
    "roundTrip" | "oneWay" | ""
  >("roundTrip");
  const [guests, setGuests] = useState(1);
  const [flightClassState, setFlightClassState] = useState("Economy");

  // USER EFFECT
  useEffect(() => {
    if (haveDefaultValue) {
      setDateRangeValue({
        startDate: moment(),
        endDate: moment().add(4, "days"),
      });

      setPickUpInputValue(defaultPickUpInputValue);
      setDropOffInputValue(defaultDropOffInputValue);
    }
  }, []);

  const renderGuest = () => {
    return (
      <div className="">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
           ${open ? "" : ""}
            px-4 py-1.5 rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
              >
                <span>{`${guests} Guest`}</span>
                <ChevronDownIcon
                  className={`${
                    open ? "" : "text-opacity-70"
                  } ml-2 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
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
                <Popover.Panel className="absolute z-10 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 ">
                  <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                    <div className="relative bg-white dark:bg-neutral-800 p-4">
                      <NcInputNumber
                        onChange={(e) => setGuests(e)}
                        min={1}
                        defaultValue={guests}
                        max={20}
                      />
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

  const renderSelectClass = () => {
    return (
      <div className="">
        <Popover className="relative">
          {({ open, close }) => (
            <>
              <Popover.Button
                className={`
           ${open ? "" : ""}
            px-4 py-1.5 rounded-md inline-flex items-center font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-xs`}
              >
                <span>{`${flightClassState}`}</span>
                <ChevronDownIcon
                  className={`${
                    open ? "" : "text-opacity-70"
                  } ml-2 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
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
                <Popover.Panel className="absolute z-10 w-screen max-w-[200px] sm:max-w-[220px] px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 ">
                  <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 ">
                    <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7 ">
                      {flightClass.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            setFlightClassState(item.name);
                            close();
                          }}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <p className="text-sm font-medium ">{item.name}</p>
                        </a>
                      ))}
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

  const renderRadioBtn = () => {
    return (
      <div className=" py-5 [ nc-hero-field-padding ] flex flex-row flex-wrap border-b border-neutral-100 dark:border-neutral-700">
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-4 ${
            dropOffLocationType === "roundTrip"
              ? "bg-black shadow-black/10 shadow-lg text-white"
              : "border border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("roundTrip")}
        >
          Round-trip
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-4 ${
            dropOffLocationType === "oneWay"
              ? "bg-black text-white shadow-black/10 shadow-lg"
              : "border border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("oneWay")}
        >
          One-way
        </div>
        <div className=" mr-2 my-1 sm:mr-4 border border-neutral-300 dark:border-neutral-700 rounded-full">
          {renderSelectClass()}
        </div>
        <div className="my-1 border border-neutral-300 dark:border-neutral-700 rounded-full">
          {renderGuest()}
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div className="w-full">
        <form className="w-full relative mt-8 rounded-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
          {/* {renderRadioBtn()} */}
          <div className=" flex flex-col md:flex-row w-full rounded-full [ nc-divide-field ] ">
            <div className="relative flex flex-col md:flex-row flex-grow [ nc-divide-field ] ">
              <LocationInput
                defaultValue={pickUpInputValue}
                onChange={(e) => setPickUpInputValue(e)}
                onInputDone={() => setFieldFocused("dropOffInput")}
                placeHolder="Port,City"
                desc="From"
              />
              <LocationInput
                defaultValue={dropOffInputValue}
                onChange={(e) => setDropOffInputValue(e)}
                onInputDone={() => setFieldFocused("startDate")}
                placeHolder="Port,City"
                desc="To"
                autoFocus={fieldFocused === "dropOffInput"}
              />
            </div>
            {/* for single date selector */}
            <ExperiencesDateSingleInput
              defaultValue={dateValue}
              onChange={(date) => setdateValue(date)}
              defaultFocus={dateFocused}
              onFocusChange={(focus: boolean) => {
                setDateFocused(focus);
              }}
            />
            {/* shipping details - new component */}
            <ShippingDetails selectedType={selectedType} />
            {/* BUTTON SUBMIT OF FORM */}
            <div className="px-4 py-3 flex items-center justify-center">
              {/* <ButtonSubmit  /> */}
              <button
                onClick={submitHandler}
                type="button"
                className="h-14 md:h-16 w-full md:w-16 rounded-full bg-[#2AA996] hover:bg-[#218778] flex items-center justify-center text-neutral-50 focus:outline-none"
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
};

const mapStateToProps = (state: { data: any }) => {
  return {
    shippingData: state.data,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    fetchData: async () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearchForm);

