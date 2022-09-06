import React, { useEffect, useState } from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import bookingRcvd from "../../images/transpost images/booking-details/booking-recieved.png";

import { useLocation, RouteComponentProps } from "react-router-dom";
import Loading from "new_component/Loading";

const response = {
  status: "success",
  data: [
    {
      ID: 4,
      bookingID: 43,
      cs_statusID: 1,
      time: "2022-09-05 09:35am",
      status: [{ ID: 1, name: "Under Review", template: "Bookings Under Review" }],
    },
    {
      ID: 5,
      bookingID: 43,
      cs_statusID: 2,
      time: "2022-09-05 09:45am",
      status: [{ ID: 2, name: "Booking Confirmed", template: "Congratulations! Your Booking is Confirmed" }],
    },
    {
      ID: 5,
      bookingID: 43,
      cs_statusID: 2,
      time: "2022-09-10 11:45am",
      status: [{ ID: 2, name: "Container Pickup", template: "Your Container is Picked up" }],
    },
  ],
};

export interface BookingsTimelineProps {
  BId:string | number |null;
  bookingsData: {
    ID?: string;
    time?: string;
    status?: [
      {
        ID?: string;
        name?: string;
        template?: string;
      }
    ];
  };
}

const BookingDetails = () => {
  const [timelineData, setTimelineData] = useState<
    RouteComponentProps | null | {} | string | number
  >("");

  const location = useLocation<BookingsTimelineProps>();
  const { state } = location;

  useEffect(() => {
    console.log(state);
    setTimelineData(state);
  }, []);

  // if (timelineData) {
  //   return (
  //     <>
  //       <Loading className="h-5 w-5 " />
  //     </>
  //   );
  // }

  return (
    <div className="flex flex-col xl:pl-5 xl:ml-8 mb-4 justify-center ">
      <h1 className="text-2xl mb-4">Booking No: BKNG{timelineData}</h1>

      {response.data.map((item:any)=> {
        return (<Timeline>
          <TimelineEvent
          title={<h1 className="text-2xl font-semibold">{item.status[0].name}</h1>}
          createdAt={item.time}
          // icon={<img className="ml-2 w-5 h-5" src={bookingRcvd}></img>}
        >
          {item.status[0].template}
        </TimelineEvent>
        </Timeline>)
      })}
    
    </div>
  );
};

export default BookingDetails;
 