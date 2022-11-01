import React, { useState, useEffect } from "react";

import Checkbox from "shared/Checkbox/Checkbox";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import ButtonPrimary from "shared/Button/ButtonPrimary";

import axios from "axios";
import { IcommodityDetails } from "new_component/CommodityInfo/CommodityInfoPage";
import { Label } from "@headlessui/react/dist/components/label/label";

export interface IfinanceFormDetails {
  fullName?: string;
  companyName?: string;
  commodity?: string;
  gst?: string;
  iec?: string;
  pan?: string;
  product?: string;
  annualTurnover?: string;
  isShipper?: boolean;
  isForwarder?: boolean;
}

const errors = {
  fullName: "Full Name field is Empty",
  companyName: "Company Name field is Empty",
  commodity: "Commodity Field is Empty",
  gst: "Please enter proper GST details",
  iec: "Please enter proper IEC details",
  pan: "Please enter proper PAN details",
  product: "Product field is empty",
  annualTurnover: "Annual turnover field is Empty",
};

const defaultValue = {
  fullName: "",
  companyName: "",
  commodity: "",
  gst: "",
  iec: "",
  pan: "",
  product: "",
  annualTurnover: "",
};

const FreightFinanceForm = () => {
  const [financeFormDetails, setFinanceFormDetails] =
    useState<IfinanceFormDetails>(defaultValue);

  const [focused, setFocused] = useState({
    fullName: false,
    commodity: false,
    companyName: false,
    annualTurnover: false,
    product: false,
    gst: false,
    iec: false,
    pan: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isShipper, setIsShipper] = useState(true);
  const [isForwarder, setIsForwarder] = useState(false);

  const submitHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // event.preventDefault();

    setIsSubmitted(true);
    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    // const postData = {
    //   commodity,
    //   fullName,
    //   phone,
    //   email,
    //   description,
    // };

    axios
      .post("", config)
      .then((response) => {
        const fetchedData = response.data;
        console.log(fetchedData);
      })
      .catch((error) => {
        const errorMsg = error.message;
        alert(errorMsg);
      });
  };

  useEffect(() => {
    if (isShipper === false && isForwarder === false) {
      setIsShipper(true);
    }
  }, [isShipper, isForwarder]);

  return (
    <div className=" flex border-t pt-24 md:items-center relative h-full  flex-col align-center  dark:border-neutral-600 dark:bg-neutral-700">
      {/* <div className="text-[1.2rem] font-bold my-4 ">
          <span>Please fill up the following details before proceeding!</span>
        </div> */}
      <form className=" md:w-[80%]">
        <div className=" flex-col  md:grid grid-cols-2 gap-6 my-2">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Full Name <span className="text-red-600">*</span>
            </span>
            <Input
              type="text"
              placeholder="Feild is Empty"
              className="mt-1 mb-1"
              onChange={(e) => {
                setFinanceFormDetails({
                  ...financeFormDetails,
                  fullName: e.target.value,
                });
              }}
              value={financeFormDetails.fullName}
              required={true}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.fullName?.length === 0 &&
                  (focused.fullName || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.fullName}
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
                setFinanceFormDetails({
                  ...financeFormDetails,
                  commodity: e.target.value,
                });
              }}
              value={financeFormDetails.commodity}
              required={true}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.commodity?.length === 0 &&
                  (focused.commodity || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.commodity}
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
                onChange={(e) => {
                  setIsShipper(e.target.checked);
                  setIsForwarder(false);
                }}
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
                onChange={(e) => {
                  setIsForwarder(e.target.checked);
                  setIsShipper(false);
                }}
              />
              <label
                className="text-neutral-900 dark:text-neutral-100"
                htmlFor="forwarder"
              >
                Forwader
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
              value={financeFormDetails.companyName}
              onChange={(e) => {
                setFinanceFormDetails({
                  ...financeFormDetails,
                  companyName: e.target.value,
                });
              }}
              required={true}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.companyName?.length === 0 &&
                  (focused.companyName || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.companyName}
              </p>
            }
          </label>

          <label className={`block ${isForwarder ? "" : "hidden"}`}>
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
          <label className={`block ${isForwarder ? "" : "hidden"}`}>
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

          <label className={`block ${isShipper ? "" : "hidden"}`}>
            <span className="text-neutral-800 dark:text-neutral-200">
              IEC Code <span className="text-red-600">*</span>
            </span>
            <Input
              type="text"
              placeholder="Enter your IEC number"
              className="mt-1"
              name="iec"
              value={financeFormDetails.iec}
              onChange={(e) => {
                setFinanceFormDetails({
                  ...financeFormDetails,
                  iec: e.target.value,
                });
              }}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.iec?.length === 0 &&
                  (focused.iec || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.iec}
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
                setFinanceFormDetails({
                  ...financeFormDetails,
                  annualTurnover: e.target.value,
                });
              }}
              value={financeFormDetails.annualTurnover}
            />
            {
              <p
                className={`text-[red] ${
                  financeFormDetails.annualTurnover?.length === 0 &&
                  (focused.annualTurnover || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.annualTurnover}
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
            <Select placeholder="Years">
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
          className="h-12 w-full rounded-[2.5rem]  md:w-[9rem] my-5 bg-[#2AA996] my-6 hover:bg-[#218778] flex items-center justify-center text-neutral-50 focus:outline-none "
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
