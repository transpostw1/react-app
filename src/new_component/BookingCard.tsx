import React, { FC, useEffect } from "react";
import { BookingCardProps } from "./Dashboard";
import moment from "moment";
import { useHistory } from "react-router-dom";

const BookingCard: FC<BookingCardProps> = ({ data }) => {
  // TODO: Error Handling for all proper data and form validation
  const {
    DateOfBooking,
    name,
    ShippingLineName,
    ContainerType,
    ContainerCount,
    BookingNo,
    pol,
    pod,
    cs_status,
  } = data;

  const formatedDate = (dob: string | undefined) => {
    if (typeof dob === "string") {
      const date = new Date(Date.parse(dob));
      return moment(date).format("do MMM, YY");
    }
  };

  const history = useHistory();

  const onClickHandler = () => {
    const postData = { ...data };

    history.push({
      pathname: "/booking-details",
      state: { ID: data.ID },
    });
  };

  const renderMobile = () => {
    return (
      <div
        onClick={onClickHandler}
        className=" bg-[#80e8e0] flex  md:hidden w-full flex-col border rounded-lg drop-shadow-md hover:drop-shadow-xl cursor-pointer dark:border-neutral-500 dark:bg-neutral-700 "
      >
        <div className="flex font-bold  text-sm p-2 content-center border-zinc-400 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-5 w-5 stroke-stone-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          BKNG{data.ID}{" "}
        </div>
        <div className="w-full text-sm ">
          <div className="p-2 border-b-[1px] border-zinc-400 ">
            <div className="w-1/2 mt-0 mb-0 ml-auto mr-auto pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 15 10"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                className="w-4"
              >
                <defs></defs>
                <g transform="translate(5.202 3.89)">
                  <g transform="translate(0 0)">
                    <rect width="1.507" height="1.507"></rect>
                  </g>
                </g>
                <g transform="translate(7.521 3.89)">
                  <g transform="translate(0 0)">
                    <rect width="1.507" height="1.507"></rect>
                  </g>
                </g>
                <g transform="translate(5.202 1.4)">
                  <g transform="translate(0 0)">
                    <rect width="1.507" height="1.507"></rect>
                  </g>
                </g>
                <g transform="translate(7.521 1.4)">
                  <g transform="translate(0 0)">
                    <rect width="1.507" height="1.507"></rect>
                  </g>
                </g>
                <g transform="translate(9.841 3.892)">
                  <g transform="translate(0 0)">
                    <rect width="1.507" height="0.753"></rect>
                  </g>
                </g>
                <g transform="translate(0.422 0)">
                  <path
                    d="M15.993,98.608v-.592h.759v-1h-.759v-.759h-1v.759h-.759v1h.759v.592H13.428v3.062h4.131V98.608Z"
                    transform="translate(-13.428 -96.259)"
                  ></path>
                </g>
                <g transform="translate(0 5.624)">
                  <g transform="translate(0 0)">
                    <path
                      d="M14.023,276.364H9.895l-.223.754H0l1.073,3.622H13.7l1.3-4.376Zm-2.129,1.922h-.962v-1h.962Zm1.513,0h-.962v-1h.962Z"
                      transform="translate(0 -276.364)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex-shrink-0 pl-3 flex items-center w-1/2 py-2">
              <span className="block flex w-4 h-4 rounded-full border border-zinc-400"></span>
              <span className="block flex-grow border-b border-zinc-400 border-dashed my-1"></span>
              <span className="block w-4 h-4 rounded-full border border-zinc-400"></span>
            </div>
            <div className="flex-shrink-0 flex w-1/2">
              <span className="block w-5 mr-auto font-semibold">
                {!!pol && pol.port_name}
              </span>
              <span className="block w-5 font-semibold">
                {!!pod && pod.port_name}
              </span>
            </div>
          </div>
          <div className="flex pl-2  md:gap-x-4">
            <div className="flex w-[32] p-2">
              <span className="text-center">
                Shipping Line <br />
                <span className="font-semibold text-center">
                  {ShippingLineName}{" "}
                </span>
              </span>
            </div>
            <div className="flex w-[32] p-2 ">
              <span className="text-center">
                Status <br />
                <span className="text-center font-semibold">
                  {/* {cs_status.name} */}
                </span>
              </span>
            </div>
            <div className="flex w-[32] p-2">
              <span className="text-center">
                Containers <br />
                <span className="font-semibold ">
                  {ContainerType} X {ContainerCount}
                </span>
              </span>
            </div>
            <div className=" w-[32] p-2">
              <span className="flex text-center ">
                <span className="">
                  Booked on <br />
                  <span className="text-center font-semibold">
                    {formatedDate(DateOfBooking)}
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    // send booking id with the bookings detail
    <>
      {renderMobile()}
      <div
        onClick={onClickHandler}
        className=" bg-[#80e8e0] hidden md:flex w-full flex-row border rounded-lg drop-shadow-md hover:drop-shadow-xl cursor-pointer dark:border-neutral-500 dark:bg-neutral-700 "
      >
        <div className="flex font-bold border-r-[1px] text-sm p-2 content-center border-zinc-400 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-5 w-5 stroke-stone-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          BKNG{data.ID}{" "}
        </div>
        <div className="w-full text-sm ">
          <div className="p-2 border-b-[1px] border-zinc-400 ">
            <div className="w-1/2 mt-0 mb-0 ml-auto mr-auto pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 15 10"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                className="w-4"
              >
                <defs></defs>
                <g transform="translate(5.202 3.89)">
                  <g transform="translate(0 0)">
                    <rect width="1.507" height="1.507"></rect>
                  </g>
                </g>
                <g transform="translate(7.521 3.89)">
                  <g transform="translate(0 0)">
                    <rect width="1.507" height="1.507"></rect>
                  </g>
                </g>
                <g transform="translate(5.202 1.4)">
                  <g transform="translate(0 0)">
                    <rect width="1.507" height="1.507"></rect>
                  </g>
                </g>
                <g transform="translate(7.521 1.4)">
                  <g transform="translate(0 0)">
                    <rect width="1.507" height="1.507"></rect>
                  </g>
                </g>
                <g transform="translate(9.841 3.892)">
                  <g transform="translate(0 0)">
                    <rect width="1.507" height="0.753"></rect>
                  </g>
                </g>
                <g transform="translate(0.422 0)">
                  <path
                    d="M15.993,98.608v-.592h.759v-1h-.759v-.759h-1v.759h-.759v1h.759v.592H13.428v3.062h4.131V98.608Z"
                    transform="translate(-13.428 -96.259)"
                  ></path>
                </g>
                <g transform="translate(0 5.624)">
                  <g transform="translate(0 0)">
                    <path
                      d="M14.023,276.364H9.895l-.223.754H0l1.073,3.622H13.7l1.3-4.376Zm-2.129,1.922h-.962v-1h.962Zm1.513,0h-.962v-1h.962Z"
                      transform="translate(0 -276.364)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex-shrink-0 pl-3 flex items-center w-1/2 py-2">
              <span className="block flex w-4 h-4 rounded-full border border-zinc-400"></span>
              <span className="block flex-grow border-b border-zinc-400 border-dashed my-1"></span>
              <span className="block w-4 h-4 rounded-full border border-zinc-400"></span>
            </div>
            <div className="flex-shrink-0 flex w-1/2">
              <span className="block w-5 mr-auto font-semibold">
                {!!pol && pol.port_name}
              </span>
              <span className="block w-5 font-semibold">
                {!!pod && pod.port_name}
              </span>
            </div>
          </div>
          <div className="flex pl-2  md:gap-x-4">
            <div className="flex w-[32] p-2">
              <span className="text-center">
                Shipping Line <br />
                <span className="font-semibold text-center">
                  {ShippingLineName}{" "}
                </span>
              </span>
            </div>
            <div className="flex w-[32] p-2 ">
              <span className="text-center">
                Status <br />
                <span className="text-center font-semibold">
                  {/* {cs_status.name} */}
                </span>
              </span>
            </div>
            <div className="flex w-[32] p-2">
              <span className="text-center">
                Containers <br />
                <span className="font-semibold ">
                  {ContainerType} X {ContainerCount}
                </span>
              </span>
            </div>
            <div className=" w-[32] p-2">
              <span className="flex text-center ">
                <span className="">
                  Booked on <br />
                  <span className="text-center font-semibold">
                    {formatedDate(DateOfBooking)}
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
