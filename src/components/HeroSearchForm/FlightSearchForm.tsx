import React, { useEffect, useState, useRef } from "react";
import LocationInput, { IPorts } from "./LocationInput";
import { FocusedInputShape } from "react-dates";
// import RentalCarDatesRangeInput from "./RentalCarDatesRangeInput";
import ButtonSubmit from "./ButtonSubmit";
import { FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import moment from "moment";
import NcInputNumber from "components/NcInputNumber/NcInputNumber";
import ExperiencesDateSingleInput from "./ExperiencesDateSingleInput";
import GuestsInput, { GuestsInputProps } from "./GuestsInput";
import ShippingDetails from "new_component/ShippingDetails";
import { fetchData } from "../../redux";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { debounce } from "lodash";

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Nhava Sheva";
const defaultDate = moment();
const defaultGuestValue: GuestsInputProps["defaultValue"] = {
  guestAdults: 2,
  guestChildren: 2,
  guestInfants: 1,
};

export interface Data {
  from_port: string;
  to_port: string;
  sl_date: moment.Moment | string | null;
  cargo_type: string | null;
}
export interface postDataProps {
  from_port: string;
  to_port: string;
  sl_date: moment.Moment | string | null | undefined;
  cargo_type: string | null;
}

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
  fetchData: (D: postDataProps) => {} | any; // check
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

const cargoSize = (containerDetail: string) => {
  switch (containerDetail) {
    case "FCL,20'Standard":
      return "20gp";
      break;
    case "FCL,40'Standard":
      return "40gp";
      break;
    case "FCL,40'High Cube":
      return "40hc";
      break;
    default:
      return null;
  }
};

const FlightSearchForm: FC<FlightSearchFormProps> = ({
  haveDefaultValue,
  fetchData,
}) => {
  const [dateValue, setdateValue] = useState<moment.Moment | null>(null);
  // const [locationInputValue, setLocationInputValue] = useState("");
  // const [guestValue, setGuestValue] = useState({});
  const [contDetails, setContDetails] = useState("FCL,20'Standard");
  const [convDate, setConvDate] = useState<null | string | undefined>(null);

  const [dateFocused, setDateFocused] = useState<boolean>(false);

  const selectedType = (value: React.SetStateAction<string>) => {
    setContDetails(value);
  };

  useEffect(() => {
    if (haveDefaultValue) {
      setdateValue(defaultDate);
      // setLocationInputValue(defaultLocationValue);
      // setGuestValue(defaultGuestValue);
      setConvDate(defaultDate.format());
    }
  }, []);

  // DEFAULT DATA FOR ARCHIVE PAGE
  // const defaultPickUpInputValue = "Nhava Sheva, India";
  // const defaultDropOffInputValue = "Fos-sur-Mer, France";

  // USE STATE
  const [dateRangeValue, setDateRangeValue] = useState<DateRage>({
    startDate: null,
    endDate: null,
  });
  const [timeRangeValue, setTimeRangeValue] = useState<TimeRage>({
    startTime: "10:00 AM",
    endTime: "10:00 AM",
  });
  const [pickUpInputValue, setPickUpInputValue] = useState<string>("");
  const [dropOffInputValue, setDropOffInputValue] = useState("");
  const [pickUpsearchList, setPickUpSearchList] = useState<IPorts[]>([]);
  const [dropOffSearchList, setDropOffSearchList] = useState<IPorts[]>([]);

  const [fieldFocused, setFieldFocused] = useState<
    FocusedInputShape | "dropOffInput" | null
  >(null);
  // const [dropOffLocationType, setDropOffLocationType] = useState<
  //   "roundTrip" | "oneWay" | ""
  // >("roundTrip");
  // const [guests, setGuests] = useState(1);
  // const [flightClassState, setFlightClassState] = useState("Economy");

  const [postData, setPostData] = useState<postDataProps>({
    from_port: pickUpInputValue,
    to_port: dropOffInputValue,
    sl_date: convDate, // converted date in string format
    cargo_type: cargoSize(contDetails),
    // user_email: currentUser ? currentUser.email : "",
  });

  const submitHandler = () => {
    fetchData(postData);
  };

  // USER EFFECT
  useEffect(() => {
    setPostData({ ...postData, from_port: pickUpInputValue });
  }, [pickUpInputValue]);

  useEffect(() => {
    setPostData({ ...postData, to_port: dropOffInputValue });
  }, [dropOffInputValue]);

  useEffect(() => {
    setPostData({ ...postData, sl_date: dateValue?.format("YYYY-MM-DD") });
  }, [dateValue]);

  useEffect(() => {
    setPostData({ ...postData, cargo_type: cargoSize(contDetails) });
  }, [contDetails]);

  const fetchPickUpList = debounce((InputValue: string) => {
    axios
      .get(
        `https://apis.transpost.co/api/ajax-autocomplete-search?q=${InputValue}`
      )
      .then((response) => {
        setPickUpSearchList(response.data);
        console.log("PickUp", response.data);
      });
  });

  //find solution for following
  const fetchDropofflist = async (InputValue: string) => {
  

    const response = await axios.get(
      `https://apis.transpost.co/api/ajax-autocomplete-search?q=${InputValue}`,
    );
    console.log("droppOff", response.data);

    setDropOffSearchList(response.data);
  };

  useEffect(() => {
    if (pickUpInputValue.length % 2 === 0 && pickUpInputValue.length !== 0) {
      fetchPickUpList(pickUpInputValue);
    }
  }, [pickUpInputValue]);

  useEffect(() => {
    if (dropOffInputValue.length % 2 === 0 && dropOffInputValue.length !== 0) {
      fetchDropofflist(dropOffInputValue);
    }
  }, [dropOffInputValue]);

  const pickUpHandler = (e: string) => {
    
    setPickUpInputValue(e);
  };

  const dropOffHandler = (e: string) => {
    setDropOffInputValue(e);
    // fetchDropofflist(e);
  };

  

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
                  pickUpHandler(e);
                }}
                onInputDone={() => setFieldFocused("dropOffInput")}
                placeHolder="Origin"
                desc="From"
                searchList={pickUpsearchList}
              />
              <LocationInput
                defaultValue={dropOffInputValue}
                onChange={(e) => {
                  dropOffHandler(e);
                }}
                searchList={dropOffSearchList}
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
};

const mapStateToProps = (state: { data: any }) => {
  return {
    shippingData: state.data,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    fetchData: async (postData: postDataProps) => {
      dispatch(fetchData(postData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearchForm);
