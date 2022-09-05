import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import bookingRcvd from "../../images/transpost images/booking-details/booking-recieved.png";

const BookingDetails = () => {
  return (
    <div className="flex flex-col xl:pl-5 xl:ml-8 mb-4 justify-center ">
      <h1 className="text-2xl mb-4">Booking No: #XYZ</h1>
      <Timeline>
        <TimelineEvent
          title={<h1 className="text-2xl font-semibold">Booking Recieved</h1>}
          createdAt="2022-06-12 10:06 PM"
            // icon={<img className="ml-2 w-5 h-5" src={bookingRcvd}></img>}
        >
          We have recieved your bookings
        </TimelineEvent>
        <TimelineEvent
          title="Booking confirmed"
          createdAt="2022-06-12 10:06 PM"
        >
          Your bookings has been confirmed !
        </TimelineEvent>
        <TimelineEvent
          title="Booking confirmed"
          createdAt="2022-06-12 10:06 PM"
        >
          Your bookings has been confirmed
        </TimelineEvent>
        <TimelineEvent
          title="Booking confirmed"
          createdAt="2022-06-12 10:06 PM"
        >
          Your bookings has been confirmed
        </TimelineEvent>
        
      </Timeline>
    </div>
  );
};

export default BookingDetails;
