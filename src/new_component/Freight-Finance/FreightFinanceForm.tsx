import React, { useState, useEffect } from "react";

import Checkbox from "shared/Checkbox/Checkbox";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import ButtonPrimary from "shared/Button/ButtonPrimary";

import axios from "axios";

export interface IfinanceFormDetails {
  name?: string;
  company_name?: string;
  commodity_name?: string;
  gst?: string;
  iec_code?: string;
  pan?: string;
  product?: string;
  annual_turnover?: string;
  yoc?: string;
  isShipper?: boolean;
  isForwarder?: boolean;
}

const errors = {
  name: "Full Name field is Empty",
  company_name: "Company Name field is Empty",
  commodity_name: "Commodity Field is Empty",
  gst: "Please enter proper GST details",
  iec_code: "Please enter proper IEC details",
  pan: "Please enter proper PAN details",
  product: "Product field is empty",
  annual_turnover: "Annual turnover field is Empty",
};

const defaultValue = {
  name: "",
  company_name: "",
  commodity_name: "",
  gst: "",
  iec_code: "",
  pan: "",
  product: "",
  annual_turnover: "",
  yoc: "0_1",
};

const FreightFinanceForm = () => {
  const [financeFormDetails, setFinanceFormDetails] =
    useState<IfinanceFormDetails>(defaultValue);

  const [focused, setFocused] = useState({
    name: false,
    commodity_name: false,
    company_name: false,
    annual_turnover: false,
    product: false,
    gst: false,
    iec_code: false,
    pan: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isShipper, setIsShipper] = useState(true);
  const [isForwarder, setIsForwarder] = useState(false);

  const submitHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    setIsSubmitted(true);
    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const formData = { ...financeFormDetails, isShipper, isForwarder };

    axios
      .post("https://apis.transpost.co/api/freight-finance/store", formData)
      .then((response) => {
        console.log(financeFormDetails);
        const fetchedData = response.data;
        console.log(fetchedData);
      })
      .then(() => {

        alert("Successfully created")
      })
      .catch((error) => {
        const errorMsg = error.message;
        alert(errorMsg);
      });
  };

  const onShipperSelect = () => {
    setIsShipper(!isShipper);
    setIsForwarder(!isForwarder);

    console.log("forwarder ", isForwarder);
    console.log("shipper ", isShipper);
  };
  const onForwarderSelect = () => {
    setIsForwarder(!isForwarder);
    setIsShipper(!isShipper);

    console.log("forwarder ", isForwarder);
    console.log("shipper ", isShipper);
  };
  // useEffect(() => {
  //   const formData = { ...financeFormDetails, isShipper, isForwarder };
  //   console.log("formData", formData);
  // },[isShipper,isForwarder]);

  return (
    <div className=" flex border-t pt-24 md:items-center relative h-full  flex-col align-center  dark:border-neutral-600 dark:bg-neutral-700">
      <form className=" md:w-[80%]">
        <div className=" flex-col container md:grid grid-cols-2 space-y-4 sm:space-y-2 sm:gap-6 my-2">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Full Name <span className="text-red-600">*</span>
            </span>
            <Input
              type="text"
              placeholder="Enter your full name"
              className="mt-1 mb-2"
              onChange={(e) => {
                setFocused({
                  ...focused,
                  name: true,
                });
                setFinanceFormDetails({
                  ...financeFormDetails,
                  name: e.target.value,
                });
              }}
              value={financeFormDetails.name}
              required={true}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.name?.length === 0 &&
                  (focused.name || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.name}
              </p>
            }
          </label>
          <label className="block ">
            <span className="text-neutral-800 dark:text-neutral-200">
              Commodity Name <span className="text-red-600">*</span>
            </span>
            <Input
              type="text"
              placeholder="Enter your Commodity Name"
              className="mt-1 mb-2"
              onChange={(e) => {
                setFocused({
                  ...focused,
                  company_name: true,
                });
                setFinanceFormDetails({
                  ...financeFormDetails,
                  commodity_name: e.target.value,
                });
              }}
              value={financeFormDetails.commodity_name}
              required={true}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.commodity_name?.length === 0 &&
                  (focused.commodity_name || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.commodity_name}
              </p>
            }
          </label>

          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              What describes you best? <span className="text-red-600">*</span>
            </span>
            <div className="pt-5 flex gap-8">
              <input
                id="shipper"
                name="shipper"
                type="checkbox"
                checked={isShipper}
                className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-primary-500 focus:ring-primary-500"
                onClick={onShipperSelect}
              />

              <label
                className="text-neutral-900 dark:text-neutral-100"
                htmlFor="shipper"
              >
                Shipper
              </label>
              <input
                id="forwarder"
                name="forwarder"
                type="checkbox"
                checked={isForwarder}
                className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-primary-500 focus:ring-primary-500"
                onClick={onForwarderSelect}
              />
              <label
                className="text-neutral-900 dark:text-neutral-100"
                htmlFor="forwarder"
              >
                Forwarder
              </label>

              {/* <Checkbox className="" name="forwarder" label="Forwarder" /> */}
            </div>
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Company Name <span className="text-red-600">*</span>
            </span>
            <Input
              type="text"
              placeholder="Enter your Company Name"
              className="mt-1"
              name="company_name"
              value={financeFormDetails.company_name}
              onChange={(e) => {
                setFocused({
                  ...focused,
                  company_name: true,
                });
                setFinanceFormDetails({
                  ...financeFormDetails,
                  company_name: e.target.value,
                });
              }}
              required={true}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.company_name?.length === 0 &&
                  (focused.company_name || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.company_name}
              </p>
            }
          </label>

          <label
            className={`block ${
              isForwarder ? "" : "hidden"
            }`}
          >
            <span className="text-neutral-800 dark:text-neutral-200">
              GST <span className="text-red-600">*</span>
            </span>
            <Input
              type="text"
              placeholder="Enter your GST number"
              className="mt-1"
              name="gst"
              value={financeFormDetails.gst}
              onChange={(e) => {
                setFocused({
                  ...focused,
                  gst: true,
                });
                setFinanceFormDetails({
                  ...financeFormDetails,
                  gst: e.target.value,
                });
              }}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.gst?.length === 0 &&
                  (focused.gst || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.gst}
              </p>
            }
          </label>
          <label
            className={`block ${
              isForwarder ? "" : "hidden"
            }`}
          >
            <span className="text-neutral-800 dark:text-neutral-200">
              PAN <span className="text-red-600">*</span>
            </span>
            <Input
              type="text"
              placeholder="Enter your PAN number"
              className="mt-1"
              name="pan"
              value={financeFormDetails.pan}
              onChange={(e) => {
                setFocused({
                  ...focused,
                  pan: true,
                });
                setFinanceFormDetails({
                  ...financeFormDetails,
                  pan: e.target.value,
                });
              }}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.pan?.length === 0 &&
                  (focused.pan || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.pan}
              </p>
            }
          </label>

          <label
            className={`block ${isShipper ? "" : "hidden"}`}
          >
            <span className="text-neutral-800 dark:text-neutral-200">
              IEC Code <span className="text-red-600">*</span>
            </span>
            <Input
              type="text"
              placeholder="Enter your IEC number"
              className="mt-1"
              name="iec_code"
              value={financeFormDetails.iec_code}
              onChange={(e) => {
                setFinanceFormDetails({
                  ...financeFormDetails,
                  iec_code: e.target.value,
                });
              }}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.iec_code?.length === 0 &&
                  (focused.iec_code || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.iec_code}
              </p>
            }
          </label>

          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Annual Turnover <span className="text-red-600">*</span>
            </span>
            <Input
              type="text"
              placeholder=""
              className="mt-1 mb-2"
              onChange={(e) => {
                setFocused({
                  ...focused,
                  annual_turnover: true,
                });
                setFinanceFormDetails({
                  ...financeFormDetails,
                  annual_turnover: e.target.value,
                });
              }}
              value={financeFormDetails.annual_turnover}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.annual_turnover?.length === 0 &&
                  (focused.annual_turnover || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.annual_turnover}
              </p>
            }
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Product <span className="text-red-600">*</span>
            </span>
            <Input
              type="text"
              placeholder="Your Product"
              className="mt-1"
              name="product"
              value={financeFormDetails.product}
              onChange={(e) => {
                setFinanceFormDetails({
                  ...financeFormDetails,
                  product: e.target.value,
                });
              }}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.product?.length === 0 &&
                  (focused.product || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.product}
              </p>
            }
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              How old is your Company? <span className="text-red-600">*</span>
            </span>
            <Select
              onChange={(e) =>
                setFinanceFormDetails({
                  ...financeFormDetails,
                  yoc: e.target.value,
                })
              }
            >
              <option value="0_1">0-1 Years</option>
              <option value="1_2">1-2 Years</option>
              <option value="2_3">2-3 Years</option>
              <option value="3_5">3-5 Years</option>
              <option value="5">above 5 Years</option>
              <option value="10">above 10 Years</option>
            </Select>
          </label>
        </div>

        <button
          className="h-12  w-[95%]  mx-auto sm:ml-5 rounded-[2.5rem]  md:w-[9rem] my-5 bg-[#2AA996] my-6 hover:bg-[#218778] flex items-center justify-center text-neutral-50 focus:outline-none "
          type="button"
          onClick={(e) => submitHandler(e)}
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default FreightFinanceForm;
