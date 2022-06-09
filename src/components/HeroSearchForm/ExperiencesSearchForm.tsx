import React, { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import GuestsInput, { GuestsInputProps } from "./GuestsInput";
import ExperiencesDateSingleInput from "./ExperiencesDateSingleInput";
import ButtonSubmit from "./ButtonSubmit";
import moment from "moment";
import { FC } from "react";
import shipIcon from "../../images/ship-solid.svg";
import Input from "shared/Input/Input";

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Tokyo, Jappan";
const defaultDate = moment();
const defaultGuestValue: GuestsInputProps["defaultValue"] = {
  guestAdults: 2,
  guestChildren: 2,
  guestInfants: 1,
};

export interface ExperiencesSearchFormProps {
  haveDefaultValue?: boolean;
}

const ExperiencesSearchForm: FC<ExperiencesSearchFormProps> = ({
  haveDefaultValue,
}) => {
  const [dateValue, setdateValue] = useState<moment.Moment | null>(null);
  const [locationInputValue, setLocationInputValue] = useState("");
  const [guestValue, setGuestValue] = useState({});

  const [dateFocused, setDateFocused] = useState<boolean>(false);
  // states for cargo tracking

  const [contDetail, setContainerDetail] = useState("");
  const [shippingLine, setShippingLine] = useState("");

  useEffect(() => {
    if (haveDefaultValue) {
      setdateValue(defaultDate);
      setLocationInputValue(defaultLocationValue);
      setGuestValue(defaultGuestValue);
    }
  }, []);

  const renderForm = () => {
    return (
      // <form className=" w-full relative mt-8 flex flex-col md:flex-row  rounded-3xl md:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700  md:divide-y-0">
        <form className="w-full relative mt-8 rounded-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
          {/* {renderRadioBtn()} */}
          <div className=" flex flex-col md:flex-row w-full rounded-full [ nc-divide-field ] ">
            <div className="relative flex flex-col md:flex-row flex-grow [ nc-divide-field ] ">
            <div className="border sm:w-full flex border-hidden" >
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 my-4 ml-4 sm:h-8 my-8 ml-4 sm:w-8 "
            fill="#C9CFDB"
          >
            <path d="M15.2333 9.59322C14.7063 9.59322 14.233 9.47458 13.8134 9.23729C13.3937 9 13.0619 8.66667 12.8179 8.23729C12.5837 7.80791 12.4666 7.32768 12.4666 6.79661C12.4666 6.26554 12.5837 5.78531 12.8179 5.35593C13.0619 4.92655 13.3937 4.59322 13.8134 4.35593C14.233 4.11864 14.7063 4 15.2333 4C15.7603 4 16.2336 4.11864 16.6532 4.35593C17.0729 4.59322 17.3998 4.92655 17.634 5.35593C17.878 5.78531 18 6.26554 18 6.79661C18 7.32768 17.878 7.80791 17.634 8.23729C17.3998 8.66667 17.0729 9 16.6532 9.23729C16.2336 9.47458 15.7603 9.59322 15.2333 9.59322ZM9.05581 4.13559H11.398V16H9.45105L4.34218 8.79661V16H2V4.13559H3.96157L9.05581 11.339V4.13559ZM15.2333 5.40678C14.8722 5.40678 14.5746 5.53107 14.3403 5.77966C14.1159 6.02825 14.0037 6.36723 14.0037 6.79661C14.0037 7.21469 14.1159 7.55367 14.3403 7.81356C14.5746 8.06215 14.8722 8.18644 15.2333 8.18644C15.5944 8.18644 15.8872 8.06215 16.1116 7.81356C16.3361 7.55367 16.4483 7.21469 16.4483 6.79661C16.4483 6.36723 16.3361 6.02825 16.1116 5.77966C15.8872 5.53107 15.5944 5.40678 15.2333 5.40678ZM12.7594 10.7119H17.7072V12.322H12.7594V10.7119Z"></path>
          </svg>
          <Input
            className=" mt-6  w-[100%] border-hidden focus:outline-none sm:w-full"
            type="text"
            placeholder="Container"
            value={contDetail}
            onChange={(e) => setContainerDetail(e.target.value)}
          />
          </div>
          <div className="border sm:w-full flex border-hidden">
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            // className="h-8 w-8 sm:my-8 ml-5 sm:h-8  sm:w-9"
            className="h-6 my-4 ml-4 sm:h-8 my-8 ml-4 sm:w-8"
            fill="#C9CFDB"
          >
            <path d="M14.7229 5.89836V9.48968L13.1479 8.96239V6.71865H6.84814V8.96239L5.27319 9.48968V5.89836C5.27319 5.68081 5.35616 5.47216 5.50384 5.31833C5.65152 5.1645 5.85182 5.07807 6.06067 5.07807H7.63562V4.05272C7.63562 3.88955 7.69784 3.73307 7.8086 3.61769C7.91937 3.50232 8.06959 3.4375 8.22623 3.4375H11.7699C11.9265 3.4375 12.0767 3.50232 12.1875 3.61769C12.2982 3.73307 12.3605 3.88955 12.3605 4.05272V5.07807H13.9354C14.1443 5.07807 14.3446 5.1645 14.4923 5.31833C14.6399 5.47216 14.7229 5.68081 14.7229 5.89836Z"></path>
            <path d="M17.8748 15.5365V15.9467C17.8748 16.1099 17.8125 16.2663 17.7018 16.3817C17.591 16.4971 17.4408 16.5619 17.2841 16.5619C15.783 16.5619 14.6387 16.0333 13.7587 15.0393C13.58 15.4895 13.2771 15.8744 12.8884 16.1454C12.4998 16.4165 12.0427 16.5614 11.575 16.5619H8.42505C7.95732 16.5614 7.50024 16.4165 7.11155 16.1454C6.72287 15.8744 6.42002 15.4895 6.24128 15.0393C5.36128 16.0336 4.21698 16.5619 2.71585 16.5619C2.55921 16.5619 2.40899 16.4971 2.29823 16.3817C2.18747 16.2663 2.12524 16.1099 2.12524 15.9467V15.5365C2.12524 15.3734 2.18747 15.2169 2.29823 15.1015C2.40899 14.9862 2.55921 14.9213 2.71585 14.9213C4.2315 14.9213 5.22175 14.1085 5.65363 12.9896L3.93102 11.1952C3.83562 11.0958 3.76633 10.9725 3.72982 10.8372C3.69331 10.7018 3.6908 10.559 3.72252 10.4224C3.75424 10.2858 3.81913 10.1599 3.91098 10.0569C4.00282 9.95395 4.11853 9.87728 4.247 9.83427L9.75933 7.98863C9.91598 7.93608 10.0845 7.93608 10.2412 7.98863L15.7535 9.83427C15.882 9.87728 15.9977 9.95395 16.0895 10.0569C16.1814 10.1599 16.2463 10.2858 16.278 10.4224C16.3097 10.559 16.3072 10.7018 16.2707 10.8372C16.2342 10.9725 16.1649 11.0958 16.0695 11.1952L14.3469 12.9896C14.7854 14.1267 15.7875 14.9213 17.2841 14.9213C17.4408 14.9213 17.591 14.9862 17.7018 15.1015C17.8125 15.2169 17.8748 15.3734 17.8748 15.5365Z"></path>
          </svg>
          <Input
            className="border mt-6 w-[100%] border-hidden sm:w-full focus:outline-none"
            type="text"
            list="shipping_lines"
            placeholder="Shipping Line"
            value={shippingLine}
            onChange={(e) => setShippingLine(e.target.value)}
          />
          <datalist id="shipping_lines">
            {[
              "Auto Detect",
              "AC Container Line",
              "Alianca",
              "Maersk",
              "Maersk Line Limited",
              "Maritime Marfret",
            ].map((value) => {
              return <option>{value}</option>;
            })}
          </datalist>
          </div>

        {/* <ExperiencesDateSingleInput
          defaultValue={dateValue}
          onChange={(date) => setdateValue(date)}
          defaultFocus={dateFocused}
          onFocusChange={(focus: boolean) => {
            setDateFocused(focus);
          }}
        /> */}
        {/* 
        <GuestsInput
          defaultValue={guestValue}
          onChange={(data) => setGuestValue(data)}
        /> */}
        {/* BUTTON SUBMIT OF FORM */}
        </div>
        <div className="m-2 px-4 py-4 lg:py-0 flex items-center justify-center">
          <ButtonSubmit />
        </div>
        </div>
        
      </form>
      // </form>
    );
  };

  return renderForm();
};

export default ExperiencesSearchForm;
