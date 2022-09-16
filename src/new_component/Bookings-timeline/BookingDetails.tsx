import React, { useEffect, useState } from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import bookingRcvd from "../../images/transpost images/booking-details/booking-recieved.png";

import { useLocation, RouteComponentProps } from "react-router-dom";
import Loading from "new_component/Loading";

const response = {
  status: "success",
  bookingID: 43,
  data: [
    {
      ID: 4,
      bookingID: 43,
      cs_statusID: 1,
      time: "2022-09-05 09:35am",
      status: [
        { ID: 1, name: "Under Review", template: "Bookings Under Review" },
      ],
    },
    {
      ID: 5,
      bookingID: 43,
      cs_statusID: 2,
      time: "2022-09-05 09:45am",
      status: [
        {
          ID: 2,
          name: "Booking Confirmed",
          template: "Congratulations! Your Booking is Confirmed",
        },
      ],
    },
    {
      ID: 6,
      bookingID: 43,
      cs_statusID: 2,
      time: "2022-09-10 11:45am",
      status: [
        {
          ID: 2,
          name: "Container Pickup",
          template: "Your Container is Picked up",
        },
      ],
    },
  ],
};

export interface BookingsTimelineProps {
  bookingsData: {
    bookingID?: string;

    data: [
      {
        ID?: number;
        cs_statusId?: number;
        status?: [
          {
            ID?: number;
            name?: string;
            template?: string;
          }
        ];
      }
    ];
  };
}

const BookingDetails = () => {
  const [timelineData, setTimelineData] = useState<
    RouteComponentProps | null | string | {}
  >("");

  const location = useLocation<BookingsTimelineProps>();
  const { state } = location;

  useEffect(() => {
    setTimelineData(state.bookingsData);
  }, []);

  // if (timelineData) {
  //   return (
  //     <>
  //       <Loading className="h-5 w-5 " />
  //     </>
  //   );
  // }

  if (typeof timelineData === "object" && !Array.isArray(timelineData) && timelineData !== null) {
    console.log(timelineData);

    return (
      <div className="flex flex-col xl:pl-5 xl:ml-8 mb-4 justify-center ">
        {/* <h1 className="text-2xl mb-4">Booking No: {timelineData.bookingID} </h1> */}

        {/* {timelineData.data.map((item: any) => { */}
        {/* for testing  */}
        {response.data.map((item: any) => {
          return (
            <Timeline key={item.ID}>
              <TimelineEvent
                title={
                  <h1 className="text-2xl font-semibold">
                    {item.status[0].name}
                  </h1>
                }
                createdAt={item.time}
                // icon={<img className="ml-2 w-5 h-5" src={bookingRcvd}></img>}
              >
                {item.status[0].template}
              </TimelineEvent>
            </Timeline>
          );
        })}
      </div>
    );
  } else {
    console.log(typeof timelineData);

    return <>loading</>;
  }
};

export default BookingDetails;
