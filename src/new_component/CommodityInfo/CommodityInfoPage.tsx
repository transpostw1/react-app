import React, { useState } from "react";
import Select from "shared/Select/Select";
import Input from "shared/Input/Input";
import Checkbox from "shared/Checkbox/Checkbox";
import axios from "axios";
import { useHistory } from "react-router-dom";

export interface IcommodityDetails {
  commodityName?: string;
  containerCount?: number |string;
  weight?: number | string;
  loadingDate?: string;
  desc?: string;
}

const CommodityInfoPage = ({
  data,
  onclose,
  showInfoModal,
  email,
  cargo,
}: any) => {
  const [commodityDetails, setCommodityDetails] = useState<IcommodityDetails>({});

  const history = useHistory();
  const handleOnClose = () => {
    onclose();
  };

  if (!showInfoModal) {
    return null;
  }

  const proccedHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const postData = { ...data, email, commodityDetails };

    console.log("postData", postData);

    axios
      .post("https://apis.transpost.co/api/bookings/store", postData)
      .then((response) => {
        const fetchedData = response.data;
        console.log("fetchedData",fetchedData);
        history.push({
          pathname: "/bookings",
          state: {
            bId: fetchedData?.Booking.ID,
            bookedData: data,
            cargoType: cargo,
            commodityDetails
          },
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
      });
  };

  return (
    <div className=" p-10 fixed z-50 inset-0 bg-neutral-200 bg-opacity-10  backdrop-blur-sm border rounded dark:border-neutral-800 ">
      <div className="flex container md:items-center relative h-full flex-col align-center bg-neutral-100 border rounded-lg dark:border-neutral-600 dark:bg-neutral-700">
        <div className="text-[1.2rem] font-bold my-4 ">
          <span>Please fill up the following details before proceeding!</span>
        </div>
        <form className=" md:w-[80%]">
          <div className="flex-col  md:grid grid-cols-2 gap-6 my-2">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Commodity Name*
              </span>
              <Input
                type="text"
                placeholder="Enter Comodity Name"
                className="mt-1 mb-1"
                  onChange={(e) => {
                    setCommodityDetails({
                      ...commodityDetails,
                      commodityName: e.target.value,
                    });
                  }}
                  value={commodityDetails.commodityName}
              />
              {/* {<p className="text-[red]">{validation.from_port}</p>} */}
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Number of Containers *
              </span>
              <Input
                type="text"
                placeholder="Enter Number of Containers"
                className="mt-1 mb-2"
                  onChange={(e) => {
                    setCommodityDetails({
                      ...commodityDetails,
                      containerCount: e.target.value,
                    });
                  }}
                  value={commodityDetails.containerCount}
              />
              {/* {<p className="text-[red]">{validation.from_port}</p>} */}
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Weight per container (in MT) *
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
                Ready to Load *
              </span>
              <Input
                type="date"
                placeholder=""
                className="mt-1 mb-2"
                  onChange={(e) => {
                    setCommodityDetails({
                      ...commodityDetails,
                      loadingDate: e.target.value,
                    });
                  }}
                  value={commodityDetails.loadingDate}
              />
            </label>

            <label className="block col-span-2 ">
              <span className="text-neutral-800 dark:text-neutral-200">
                Description (Optional).
              </span>
              <textarea
                placeholder="IMO cargo, Temperature control, OG, Overweight, Flexitank, Cargo readiness, CBM, Humidity, etc."
                className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-[1rem] "
                onChange={(e) => {
                  setCommodityDetails({
                    ...commodityDetails,
                    desc: e.target.value,
                  });
                }}
                value={commodityDetails.desc}
              />
            </label>
            <label className="block">
              <Checkbox
                className=""
                name="first_mile"
                label="First mile assitance"
              />
            </label>
            <label className="block">
              <Checkbox
                className=""
                name="last_mile"
                label="Last mile asistance"
              />
            </label>

            <button
              className="h-12 w-full rounded-[2.5rem]  md:w-[9rem] my-5 bg-[#2AA996] my-6 hover:bg-[#218778] flex items-center justify-center text-neutral-50 focus:outline-none "
              type="button"
              onClick={(e) => proccedHandler(e)}
            >
              Proceed
            </button>
            <button
              className="h-12 w-full rounded-[2.5rem]  md:w-[9rem] my-5 bg-[#2AA996] my-6 hover:bg-[#218778] flex items-center justify-center text-neutral-50 focus:outline-none "
              type="button"
              onClick={handleOnClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommodityInfoPage;
