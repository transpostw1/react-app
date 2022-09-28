import React, { useEffect, useState } from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import bookingRcvd from "../../images/transpost images/booking-details/booking-recieved.png";

import { useLocation, RouteComponentProps } from "react-router-dom";
import Loading from "new_component/Loading";
import axios from "axios";

export interface BookingsTimelineProps {
  ID: string;
}

export interface ITimelineData {
  status: string;
  bookingID?: number;
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
}

const BookingDetails = () => {
  const [timelineData, setTimelineData] = useState<ITimelineData | null>(null);

  const location = useLocation<BookingsTimelineProps>();
  const { state } = location;

  useEffect(() => {
    axios
      .get(
        `https://apis.transpost.co/api/bookings/timeline?bookingID=${state.ID}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        const fetchedData = response.data;
        setTimelineData(fetchedData);
      })
      .catch((error) => {
        const errorMsg = error.message;
      });
  }, []);

  if (!timelineData) return <Loading className="w-5" />;

  return (
    <div className="flex flex-col xl:pl-5 xl:ml-8 mb-4 justify-center ">
      <h1 className="text-2xl mb-4">Booking No: {timelineData.bookingID} </h1>

      {timelineData?.data?.map((item: any) => {
        return (
          <Timeline  key={item.ID}>
            <TimelineEvent
            collapsible={false}  
            iconColor={"blue"}
            className="font-semibold "
              title={
                <h1 className="text-2xl font-semibold">
                  {item.status[0].name}
                </h1>
              }
              createdAt={item.time}
              // icon={<img className="ml-2 w-5 h-5" src={bookingRcvd}></img>}
            >
              {/* hav to use DOM purifier ref:https://stackoverflow.com/questions/65827431/what-are-the-pros-and-cons-of-using-an-html-parsing-package-like-html-react-pars */}
              <div 
                dangerouslySetInnerHTML={{ __html: item.status[0].template }}
              />
            </TimelineEvent>
          </Timeline>
        );
      })}
    </div>
  );
  // }
  //  else {
  //   console.log("type of timelineData", typeof timelineData);
  //   console.log("boolean", Object.entries(timelineData).length === 0);

  //   return <>loading</>;
  // }
};

export default BookingDetails;
