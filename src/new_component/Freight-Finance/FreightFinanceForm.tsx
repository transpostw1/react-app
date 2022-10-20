import React, { useState } from "react";

import Checkbox from "shared/Checkbox/Checkbox";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import ButtonPrimary from "shared/Button/ButtonPrimary";

import axios from "axios";
import { IcommodityDetails } from "new_component/CommodityInfo/CommodityInfoPage";

export interface IfinanceFormDetails {
  fullName?: string;
  commodity?: string;
  gst?: string;
  iec?: string;
  product?: string;
  annualTurnover?: string;
}

const FreightFinanceForm = () => {
  const [financeFormDetails, setFinanceFormDetails] =
    useState<IfinanceFormDetails>({});

  const [commodityDetails, setCommodityDetails] = useState<IcommodityDetails>(
    {}
  );

  const submitHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // event.preventDefault();

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
        console.log(errorMsg);
      });
  };

  //   TODO Inputs not working

  return (
    <div className=" flex border-t pt-24 md:items-center relative h-full  flex-col align-center  dark:border-neutral-600 dark:bg-neutral-700">
      {/* <div className="text-[1.2rem] font-bold my-4 ">
          <span>Please fill up the following details before proceeding!</span>
        </div> */}
      <form className=" md:w-[80%]">
        <div className="flex-col  md:grid grid-cols-2 gap-6 my-2">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Full Name
            </span>
            <Input
              type="text"
              placeholder="Enter your Full Name"
              className="mt-1 mb-1"
              onChange={(e) => {
                setFinanceFormDetails({
                  ...financeFormDetails,
                  fullName: e.target.value,
                });
              }}
              value={financeFormDetails.fullName}
            />
            {/* {<p className="text-[red]">{validation.from_port}</p>} */}
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Commodity Name
            </span>
            <Input
              type="text"
              placeholder="Enter your Commodity"
              className="mt-1 mb-2"
              onChange={(e) => {
                setFinanceFormDetails({
                  ...financeFormDetails,
                  commodity: e.target.value,
                });
              }}
              value={financeFormDetails.commodity}
            />
            {/* {<p className="text-[red]">{validation.from_port}</p>} */}
          </label>
   
         

          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              What describes you best?
            </span>
            <div className="pt-5 flex gap-8">
              <Checkbox
                // defaultChecked={true}
                className=""
                name="shipper"
                label="Shipper"
              />
              <Checkbox className="" name="forwarder" label="Forwarder" />
            </div>
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              GST/IEC
            </span>
            <Input
              type="text"
              className="mt-1"
              name="gst_itc"
              value={financeFormDetails.gst}
              onChange={(e) => {
                setFinanceFormDetails({
                  ...financeFormDetails,
                  gst: e.target.value,
                });
              }}
            />
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Annual Turnover
            </span>
            <Input
              type="text"
              placeholder="Enter the weight per container in MT"
              className="mt-1 mb-2"
              onChange={(e) => {
                setCommodityDetails({
                  ...commodityDetails,
                  weight: e.target.value,
                });
              }}
              value={commodityDetails.weight}
            />
            {/* {<p className="text-[red]">{validation.from_port}</p>} */}
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Product
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
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              How old is your Company?
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
