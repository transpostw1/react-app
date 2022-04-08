import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imgpng from "../../images/coscoLogo.jpg";

// export interface FlightCardProps {
//   className?: string;
//   data: {
//     id: string;
//     airlines: {
//       logo: string;
//       name: string;
//     };
//     price: string;
//   };
// }

// Api Data for reference

// ID: "6"
// LoadType: "20'"    =>
// SL_date: "0000-00-00"  sailing date
// SL_name: ""    shiiping line
// cargo: ""      cargo type
// expiry_date: "0000-00-00"
// free_dates: "0000-00-00"
// freight_cost: "7192"
// from_port: "Ex.Nhava Sheva\t"
// inclusions: ""
// rates_by_forwarder: "0"
// remarks: ""
// service_mode: "IMEX"
// to_port: "Barcelona"
// total_cost: "0"
// transit_port: "Direct"
// transit_time: "0000-00-00"

export interface FlightCardProps {
  className?: string;
  data: {
    ID: string;
    LoadType: string;
    SL_date: string;
    SL_name: string;
    cargo: string;
    expiry_date: string;
    free_dates: string;
    freight_cost: number;
    from_port: string;
    inclusions: string;
    rates_by_forwarder: number;
    remarks: string;
    service_mode: string;
    to_port: string;
    total_cost: number;
    transit_port: string;
    transit_time: string;
  };
}

// 1 - Display the data of search term overhere
// 2 - need to pass the api details to this

const FlightCard: FC<FlightCardProps> = ({ className = "", data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderDetailTop = () => {
    return (
      <div>
        <div className="flex flex-col md:flex-row ">
          <div className="w-24 mt-8 md:w-20 lg:w-24 flex-shrink-0 md:pt-7">
            <img src={imgpng} className="w-12" alt="" />
          </div>
          <div className="flex my-5 md:my-0">
            <div className="flex-shrink-0 flex flex-col items-center py-2">
              <span className="block w-6 h-6 rounded-full border border-neutral-400"></span>
              <span className="block flex-grow border-l border-neutral-400 border-dashed my-1"></span>
              <span className="block w-6 h-6 rounded-full border border-neutral-400"></span>
            </div>
            <div className="ml-4 space-y-10 text-sm">
              <div className="flex flex-col space-y-1">
                <span className=" text-neutral-500 dark:text-neutral-400">
                  From
                </span>
                <span className=" font-semibold">{data.from_port}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className=" text-neutral-500 dark:text-neutral-400">
                  To
                </span>
                <span className=" font-semibold">{data.to_port}</span>
              </div>
            </div>
          </div>
          <div className="border-l border-neutral-200 dark:border-neutral-700 md:mx-6 lg:mx-10"></div>
          <ul className="text-sm text-neutral-500 dark:text-neutral-400 space-y-1 md:space-y-2">
            <li >Expiry date: {data.expiry_date}</li>
            <li>Transit Port: {data.transit_port}</li>
            <li>Transit Time: {data.transit_time}</li>
          </ul>
          <div className="border-l border-neutral-200 dark:border-neutral-700 md:mx-6 lg:mx-10"></div>
          <ul className="text-sm text-neutral-500 dark:text-neutral-400 space-y-1 md:space-y-2">

            <li>Free Days: {data.free_dates}</li>
            <li>Cargo: {data.cargo}</li>
            <li>Rates for Forwarder: {data.rates_by_forwarder}</li>
          </ul>
          {/* verticle line */}
          <div className="border-l border-neutral-200 dark:border-neutral-700 md:mx-6 lg:mx-10"></div>
          <div className="flex-[4] whitespace-nowrap sm:text-center">
              <span className="text-xl font-semibold text-secondary-6000">
                {/* USD {data.freight_cost} */}
                USD ****
              </span>
            <div className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
              Total Cost
            </div>
            <div className="mt-5 font-medium underline underline-offset-1">
              {/* <ButtonPrimary>+ Get Quote</ButtonPrimary> */}
              <Link to='/signup'>Sign up to know the rates</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDetail = () => {
    if (!isOpen) return null;
    return (
      <div className="p-4 md:p-8 border border-neutral-200 dark:border-neutral-700 rounded-2xl ">
        {renderDetailTop()}
        <div className="my-7 md:my-10 space-y-5 md:pl-24">
          {/* Horizontal line */}
          {/* <div className="border-t border-neutral-200 dark:border-neutral-700" /> */}
          {/* <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Transit time: {data.transit_time}
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-FlightCardgroup p-4 sm:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
     dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6 ${className}`}
      data-nc-id="FlightCard"
    >
      <div
        className={` sm:pr-20 relative  ${className}`}
        data-nc-id="FlightCard"
      >
        {/*  eslint-disable-next-line jsx-a11y/anchor-has-content */}
        {/* <Link to="/signup" className="absolute inset-0" /> */}

        <span
          className={`absolute right-0 bottom-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 bg-neutral-50 dark:bg-neutral-800 rounded-full flex items-center justify-center cursor-pointer ${
            isOpen ? "transform -rotate-180" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="text-xl las la-angle-down"></i>
        </span>

        <div className="flex  flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0">
          {/* LOGO IMG */}
          <div className="w-24 lg:w-32 flex-shrink-0">
            {/* <div >Expiry date: {data.expiry_date}</div> */}
            <img src={imgpng} className="w-12" alt="" />
          </div>

          {/* FOR MOBILE RESPONSIVE */}
          <div className="block lg:hidden space-y-1">
            <div className="flex font-semibold">
              <div>
                <span>{data.from_port}</span>
                <span className="flex items-center text-sm text-neutral-500 font-normal mt-0.5">
                  {data.from_port}
                </span>
              </div>
              <span className="w-12 flex justify-center">
                <i className=" text-2xl las la-long-arrow-alt-right"></i>
              </span>
              <div>
                <span>{data.to_port}</span>
                <span className="flex items-center text-sm text-neutral-500 font-normal mt-0.5">
                  {data.to_port}
                </span>
              </div>
            </div>

            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              <span className="VG3hNb">{data.transit_port}</span>
              <span className="mx-2">·</span>
              <span>{data.transit_time}</span>
              <span className="mx-2">·</span>
              <span>HAN</span>
            </div>
          </div>

          {/* TIME - NAME */}
          <div className="hidden lg:block  min-w-[150px] flex-[4] ">
            <div className="font-medium text-lg">
              {data.from_port}- {data.to_port}
            </div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              {data.SL_name}SL name
            </div>
          </div>

          {/* TIMME */}
          <div className="hidden lg:block flex-[4] whitespace-nowrap">
            <div className="font-medium text-lg"> Sailing Date:</div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              {data.SL_date}
            </div>
          </div>

          {/* TYPE */}
          <div className="hidden lg:block flex-[4] whitespace-nowrap">
            <div className="font-medium text-lg">Load Type: </div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              {data.LoadType} - FCL
            </div>
          </div>

          {/* PRICE */}
          <div className="flex-[4] whitespace-nowrap sm:text-right">
            <div>
              <span className="text-xl font-semibold text-secondary-6000">
                {/* USD {data.freight_cost} */}
                USD ****
              </span>
            </div>
            {/* <div className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
              Freight Forwarder Cost
            </div> */}
            <div className="text-xs font-medium underline underline-offset-1 sm:text-sm text-neutral-500 font-medium mt-0.5 ">
            <Link to='/signup'>Sign up to know the rates</Link>
            </div>
          </div>
        </div>
      </div>

      {/* DETAIL */}
      {renderDetail()}
    </div>
  );
};

export default FlightCard;
