import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "utils/contexts/userContext";
import NcModal from "shared/NcModal/NcModal";
import CommodityInfoPage from "new_component/CommodityInfo/CommodityInfoPage";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import moment from "moment";
import TestQuoteModal from "./TestQuoteModal";

const TestRate = ({ data }: any) => {
  console.log("PROPS", data);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [cargo, setCargo] = useState<string>("");

  const { isLogin, user } = useUserAuth();

  const handleClose = () => {
    setShowModal(false);
  };

  const createQuoteHandler = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (!!data._20gp || data.cargo_size == "20gp") {
      setCargo("20'Standard");
    } else if (!!data._40gp || data.cargo_size == "40gp") {
      setCargo("40'Standard");
    } else if (!!data._40hc || data.cargo_size == "40hc") {
      setCargo("40'High Cube");
    }
  }, [data]);

  const renderHeader = () => {
    return (
      <div className="col-span-2 grid gap-2 grid-cols-6 pb-4 border-b justify-items-center items-center">
        <div className="text-[blue] ">Service</div>
        <div className="self-end justify-self-end text-[blue] ">ETD</div>
        <div className="grid self-end relative px-2 w-full ">
          <span className="w-3 h-3 absolute left-0 -top-[0.3rem] border-bg-[#01a77e] rounded-full bg-[#01a77e] "></span>
          <span className="border-b border-[#01a77e]  top-[50%] w-full"></span>
          <span className="w-3 h-3 absolute right-0 -top-[0.3rem] border-bg-[#01a77e] rounded-full bg-[#01a77e] "></span>
        </div>
        <div className="self-end justify-self-start text-[blue]"> ETA</div>
        <div className="text-[blue]"> Vessel Name</div>
        <div className="font-semibold"> Total Price</div>
        <div className="text-center self-start">
          {" "}
          {data.service_mode.length > 0 ? data.service_mode : "-"}
        </div>
        <div className="self-start justify-self-end">
          {" "}
          {data.departures.length > 0
            ? moment(data.departures[0].departureDateEstimated).format("Do MMM")
            : "-"}
        </div>
        <div className="self-start text-center">
          <span>{data.transit_time.length > 0 ? data.transit_time : "-"}</span>
        </div>
        <div className="self-start justify-self-start">
          {" "}
          {data.departures.length > 0
            ? moment(
                data.departures[data.departures.length - 1].arrivalDateEstimated
              ).format("Do MMM")
            : "-"}
        </div>
        <div className="text-center">
          {" "}
          {data.vesselName.length > 0 ? data.vesselName : "-"}
        </div>
        <div className="">
          {" "}
          <span>USD </span>
          <span className="font-semibold">{data.totalPrice}</span>
        </div>
      </div>
    );
  };

  const renderSchedule = () => {
    return (
      <div
        className={`flex flex-col  h-min gap-10 border-l border-neutral-400 ${
          data.vgmCutoff.length > 0 ? "w-1/2" : "hidden"
        }`}
      >
        <div className="flex">
          <img
            className="w-10 absolute left-10"
            src="https://ecomm.one-line.com/one-ecom/_next/static/media/ico-doc-cut-off.83dfba82.svg"
          />
          <p className="flex flex-col mx-8 py-2">
            <span className="font-semibold">DOC cutt off</span>
            {moment(data.docCutoff).format("Do MMM")}{" "}
          </p>
        </div>
        <div className="flex">
          <img
            className="w-10 absolute left-10"
            src="https://ecomm.one-line.com/one-ecom/_next/static/media/ico-vgm-cut-off.920fce76.svg"
          />
          <p className="flex flex-col mx-8 py-2">
            <span className="font-semibold">VGM cutt off</span>

            {moment(data.vgmCutoff).format("Do MMM")}
          </p>
        </div>
        <div className="flex">
          <img
            className="w-10 absolute left-10"
            src="https://ecomm.one-line.com/one-ecom/_next/static/media/ico-cy-cut-off.75beb148.svg"
          />
          <p className="flex flex-col mx-8 py-2">
            <span className="font-semibold">Port CY cutt off</span>
            {moment(data.cyCutoff).format("Do MMM")}
          </p>
        </div>

        {data.departures.map((item: any, index: any) => {
          return (
            <div className="flex ">
              <img
                className="w-10 absolute left-10"
                src="https://ecomm.one-line.com/one-ecom/_next/static/media/ico-boat.92edbb69.svg"
              />
              <p className="flex flex-col mx-8 py-2">
                {index === 0 && (
                  <span className="font-semibold">Departure</span>
                )}
                {item.departureTerminal.split("(")[0]} / {item.departureLoc}
              </p>
            </div>
          );
        })}

        <div className="flex">
          <img
            className="w-10 absolute left-10"
            src="https://ecomm.one-line.com/one-ecom/_next/static/media/ico-location-nofill.c2b55ecd.svg"
          />
          <p className="flex flex-col mx-8 py-2">
            <span className="font-semibold">Arrival</span>
            <span>
              {" "}
              {data.departures.length > 0
                ? data.departures[
                    data.departures.length - 1
                  ].arrivalTerminal.split("(")[0] +
                  "/" +
                  data.departures[data.departures.length - 1].arrivalLoc
                : "-"}
            </span>
            <span className="font-semibold text-sm">
              ETA:{" "}
              {moment(
                data.departures[data.departures.length - 1].arrivalDateEstimated
              ).format("Do MMM")}
            </span>
            {/* <span>
              {data.departures[data.departures.length - 1].transitTimeInHrs +
                "hrs"}
            </span> */}
          </p>
        </div>
      </div>
    );
  };

  const renderDetailTop = () => {
    return (
      <div
        className={`flex flex-col space-y-3 z-15 ${
          data.vgmCutoff.length > 0 ? "" : "col-span-2"
        }`}
      >
        <div className="font-semibold text-lg uppercase">Freight Charges</div>
        {data.freightCharges.map((item: any) => {
          return (
            <div className="flex w-full justify-between px-2 py-2 my-1 ">
              <div className="capitalize">{item.chargeName.toLowerCase()}</div>
              <div className="font-semibold">USD {item.totalAmountInUSD}</div>
            </div>
          );
        })}
        {data.originCharges.length > 0 && (
          <>
            <div className="border-t border-neutral-300 pt-4  font-semibold text-lg uppercase">
              Origin Charges
            </div>
            <div className=" pb-4">
              {data.originCharges.map((item: any) => {
                return (
                  <div className="flex justify-between border-neutral-300  px-2 py-2  my-1 ">
                    <div className="capitalize">
                      {item.chargeName.toLowerCase()}
                    </div>
                    <div className="font-semibold">
                      USD {item.totalAmountInUSD}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {data.destinationCharges.length > 0 && (
          <>
            <div className="border-t pt-4 border-neutral-300 font-semibold text-lg uppercase">
              Destination Charges
            </div>
            <div className=" pb-4">
              {data.destinationCharges.map((item: any) => {
                return (
                  <div className="flex justify-between border-neutral-300  px-2 py-2  my-1 ">
                    <div className="capitalize">
                      {item.chargeName.toLowerCase()}
                    </div>
                    <div className="font-semibold">
                      USD {item.totalAmountInUSD}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  };
  // TODO modify api as sheet rate true or false
  const renderDetail = () => {
    if (!isOpen) return null;
    return (
      <div
        className={`p-4 md:p-8 grid gap-4  border border-neutral-200 dark:border-neutral-700 rounded-2xl ${
          data.vgmCutoff.length > 0 ? "grid-cols-2  " : "gird-cols-1 "
        } `}
      >
        {renderHeader()}
        {data.vgmCutoff.length > 0 && renderSchedule()}
        {renderDetailTop()}
        <div></div>
        <ButtonPrimary
          className="ml-2 w-1/2 justify-self-end"
          onClick={createQuoteHandler}
        >
          +Create Quote
        </ButtonPrimary>
      </div>
    );
  };

  return (
    <div
      className={`nc-RateCardgroup p-4 sm:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
     dark:border-neutral-800 rounded-2xl  overflow-hidden hover:shadow-lg transition-shadow space-y-6 `}
      data-nc-id="RateCard"
      onClick={()=> setIsOpen(!isOpen)}
    >
      <TestQuoteModal data={data} onclose={handleClose} showModal={showModal} />
      <div className={` sm:pr-20 relative  `} data-nc-id="RateCard">
        {/*  eslint-disable-next-line jsx-a11y/anchor-has-content */}
        {/* <Link to="/signup" className="absolute inset-0" /> */}

        <span
          className={`absolute right-0 bottom-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 bg-neutral-50 dark:bg-neutral-800 rounded-full flex items-center justify-center cursor-pointer ${
            isOpen ? "transform-rotate-180" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="text-xl las la-angle-down"></i>
        </span>

        <div className="flex  flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0">
          {/* LOGO IMG */}
          <div className="w-12 lg:w-32 flex-shrink-0">
            {/* <div >Expiry date: {data.expiry_date}</div> */}
            <img src={data.sl_logo} className="w-[80%] h-[80%]" alt="" />
          </div>
          {/* FOR MOBILE RESPONSIVE */}
          <div className="block lg:hidden space-y-1">
            <div className="flex font-semibold">
              <div>
                {/* <span>{data.from_port}</span> */}
                <span className="flex items-center text-sm text-neutral-500 font-normal mt-0.5">
                  {/* {data.from_port} */}
                </span>
              </div>
              <span className="w-12 flex justify-center">
                <i className=" text-2xl las la-long-arrow-alt-right"></i>
              </span>
              <div>
                {/* <span>{data.to_port}</span> */}
                <span className="flex items-center text-sm text-neutral-500 font-normal mt-0.5">
                  {/* {data.to_port} */}
                </span>
              </div>
            </div>

            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              <span className="mx-2">·</span>
              <span className="mx-2">·</span>
            </div>
          </div>

          {/* TIME - NAME */}
          <div className="hidden lg:block  min-w-[150px] flex-[4] ">
            <div className="font-medium text-lg">
              {/* {data.from_port} - {data.to_port} */}
            </div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              {data.sl_name}
            </div>
          </div>

          {/* TIME */}
          <div className="hidden lg:block flex-[4] whitespace-nowrap">
            <div className="font-medium text-lg"> Validity:</div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              {moment(data.departureDateEstimated).format("Do MMM YY")}
            </div>
          </div>

          {/* TYPE */}
          <div className="hidden lg:block flex-[4] whitespace-nowrap">
            <div className="font-medium text-lg">Cargo Type: </div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              FCL - {cargo}
            </div>
          </div>

          {/* PRICE */}
          <div className="flex-col whitespace-nowrap sm:text-right">
            <span className="text-xl font-semibold text-secondary-6000">
              <div className="font text-center">
                {" "}
                {isLogin ? (
                  <div className="flex flex-col space-x-2 align-self">
                    <span className="text-sm text-normal font-normal text-black">
                      Freight Cost{" "}
                    </span>
                    <span>USD {data.base_rate}</span>
                  </div>
                ) : (
                  "****"
                )}{" "}
              </div>
              {isLogin ? (
                <div className="mt-5 ">
                  <NcModal
                    renderTrigger={(openModal) => (
                      <button
                        className="p-2 border border-black rounded-2xl"
                        onClick={() => openModal()}
                      >
                        Book Now
                      </button>
                    )}
                    renderContent={() => (
                      <CommodityInfoPage
                        // data={data}
                        email={user?.email}
                        // cargo={cargo}
                      />
                    )}
                  />
                </div>
              ) : (
                <div className=" mt-5 font-medium underline underline-offset-1">
                  <Link to="/signup">Sign up to know the rates</Link>
                </div>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* DETAIL */}
      {renderDetail()}
    </div>
  );
};
export default TestRate;
