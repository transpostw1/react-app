import React, { FC, useEffect } from "react";
import { BookingCardProps } from "./Dashboard";
import moment from "moment";
import axios from "axios";
import { useHistory } from "react-router-dom";

const BookingCard: FC<BookingCardProps> = ({ data }) => {
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
    console.log(postData);

    //  let config = {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    axios
      .get(`https://apis.transpost.co/api/bookings/timeline?bookingID=${data.ID}`)
      .then((response) => {
        const fetchedData = response.data;
        console.log(fetchedData);
        history.push({
          pathname: "/booking-details",
          state: { bookingsData: fetchedData },
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
      });
  };

  return (
    // send booking id with the bookings detail

    <div
      onClick={onClickHandler}
      className="flex bg-[#80e8e0] flex-row border rounded-lg drop-shadow-md hover:drop-shadow-xl cursor-pointer"
    >
      <div className="flex font-bold border-r-[1px] p-2 content-center border-zinc-400 items-center">
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
      <div className="w-full ">
        <div className="p-2 border-b-[1px] border-zinc-400 ">
          <div className="pl-[150px] pt-2">
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
          <div className="flex-shrink-0 pl-3 flex items-center w-[50%] py-2">
            <span className="block flex w-4 h-4 rounded-full border border-zinc-400"></span>
            <span className="block flex-grow border-b border-zinc-400 border-dashed my-1"></span>
            <span className="block w-4 h-4 rounded-full border border-zinc-400"></span>
          </div>
          <div className="flex-shrink-0 flex">
            <span className="block w-5 mr-[260px] font-semibold">
              {pol.port_name}
            </span>
            <span className="block w-5 font-semibold">{pod.port_name}</span>
          </div>
        </div>
        <div className="flex pl-2 gap-x-4">
          <div className="flex w-[32] p-2">
            {/* <svg
              viewBox="0 0 20 18"
              xmlns="http://www.w3.org/2000/svg"
              className=" stroke-stone-500 h-6 w-6 mr-1"
              // fill="#C9CFDB"
              fill="none"
            >
              <path d="M14.7229 5.89836V9.48968L13.1479 8.96239V6.71865H6.84814V8.96239L5.27319 9.48968V5.89836C5.27319 5.68081 5.35616 5.47216 5.50384 5.31833C5.65152 5.1645 5.85182 5.07807 6.06067 5.07807H7.63562V4.05272C7.63562 3.88955 7.69784 3.73307 7.8086 3.61769C7.91937 3.50232 8.06959 3.4375 8.22623 3.4375H11.7699C11.9265 3.4375 12.0767 3.50232 12.1875 3.61769C12.2982 3.73307 12.3605 3.88955 12.3605 4.05272V5.07807H13.9354C14.1443 5.07807 14.3446 5.1645 14.4923 5.31833C14.6399 5.47216 14.7229 5.68081 14.7229 5.89836Z"></path>
              <path d="M17.8748 15.5365V15.9467C17.8748 16.1099 17.8125 16.2663 17.7018 16.3817C17.591 16.4971 17.4408 16.5619 17.2841 16.5619C15.783 16.5619 14.6387 16.0333 13.7587 15.0393C13.58 15.4895 13.2771 15.8744 12.8884 16.1454C12.4998 16.4165 12.0427 16.5614 11.575 16.5619H8.42505C7.95732 16.5614 7.50024 16.4165 7.11155 16.1454C6.72287 15.8744 6.42002 15.4895 6.24128 15.0393C5.36128 16.0336 4.21698 16.5619 2.71585 16.5619C2.55921 16.5619 2.40899 16.4971 2.29823 16.3817C2.18747 16.2663 2.12524 16.1099 2.12524 15.9467V15.5365C2.12524 15.3734 2.18747 15.2169 2.29823 15.1015C2.40899 14.9862 2.55921 14.9213 2.71585 14.9213C4.2315 14.9213 5.22175 14.1085 5.65363 12.9896L3.93102 11.1952C3.83562 11.0958 3.76633 10.9725 3.72982 10.8372C3.69331 10.7018 3.6908 10.559 3.72252 10.4224C3.75424 10.2858 3.81913 10.1599 3.91098 10.0569C4.00282 9.95395 4.11853 9.87728 4.247 9.83427L9.75933 7.98863C9.91598 7.93608 10.0845 7.93608 10.2412 7.98863L15.7535 9.83427C15.882 9.87728 15.9977 9.95395 16.0895 10.0569C16.1814 10.1599 16.2463 10.2858 16.278 10.4224C16.3097 10.559 16.3072 10.7018 16.2707 10.8372C16.2342 10.9725 16.1649 11.0958 16.0695 11.1952L14.3469 12.9896C14.7854 14.1267 15.7875 14.9213 17.2841 14.9213C17.4408 14.9213 17.591 14.9862 17.7018 15.1015C17.8125 15.2169 17.8748 15.3734 17.8748 15.5365Z"></path>
            </svg> */}
            <span className="text-center">
              Shipping Line <br />
              <span className="font-semibold text-center">
                {ShippingLineName}{" "}
              </span>
            </span>
          </div>
          <div className="flex w-[32] p-2 ">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-5 w-5 stroke-stone-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg> */}
            <span className="text-center">
              Status <br />
              <span className="text-center font-semibold">
                {cs_status.name}
              </span>
            </span>
          </div>
          <div className="flex w-[32] p-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-5 w-5 stroke-stone-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg> */}

            <span className="text-center">
              Containers <br />
              <span className="font-semibold ">
                {ContainerType} X {ContainerCount}
              </span>
            </span>
          </div>
          <div className=" w-[32] p-2">
            <span className="flex text-center ">
              {/* <svg
                className="w-5 h-5 stroke-stone-500 mr-1"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33333 8.16667V3.5M18.6667 8.16667V3.5M8.16667 12.8333H19.8333M5.83333 24.5H22.1667C23.4553 24.5 24.5 23.4553 24.5 22.1667V8.16667C24.5 6.878 23.4553 5.83333 22.1667 5.83333H5.83333C4.54467 5.83333 3.5 6.878 3.5 8.16667V22.1667C3.5 23.4553 4.54467 24.5 5.83333 24.5Z"
                  // stroke="#D1D5DB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
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

    // </a>
  );
};

export default BookingCard;
