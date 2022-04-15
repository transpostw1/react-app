import React, { FC, useEffect, useState } from "react";
import TabFilters from "./TabFilters";
import Heading2 from "components/Heading/Heading2";
import FlightCard, { FlightCardProps } from "components/FlightCard/FlightCard";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { ChevronDoubleLeftIcon } from "@heroicons/react/outline";
import { fetchData } from "redux";
import { connect } from "react-redux";

export interface SectionGridFilterCardProps {
  className?: string;
  fetchData?: () => void;    // check
  shippingData?: []
}

// const DEMO_DATA: FlightCardProps["data"][] = [
//   {
//     id: "1",
//     price: "$4,100",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
//       name: "Korean Air",
//     },
//   },
//   {
//     id: "2",
//     price: "$3,380",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
//       name: "Singapore Airlines",
//     },
//   },
//   {
//     id: "3",
//     price: "$2,380",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
//       name: "Philippine Airlines",
//     },
//   },
//   {
//     id: "1",
//     price: "$4,100",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
//       name: "Korean Air",
//     },
//   },
//   {
//     id: "2",
//     price: "$3,380",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
//       name: "Singapore Airlines",
//     },
//   },
//   {
//     id: "1",
//     price: "$4,100",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
//       name: "Korean Air",
//     },
//   },
//   {
//     id: "2",
//     price: "$3,380",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
//       name: "Singapore Airlines",
//     },
//   },
// ];

// Api Data for reference

// ID: "6"
// LoadType: "20'"
// SL_date: "0000-00-00"
// SL_name: ""
// cargo: ""
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


export interface Details {
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
  
}

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({ 
  className = "",
  fetchData,
  shippingData
}) => {

  const [apiDetails,setApiDetails] = useState<Details[]>([]);

  useEffect(() => {
    fetchData();
    // fetch("https://launchindia.org/transpost/rates.php", {
    //     method: "GET",
    //     redirect: "follow",
    //   })
    //     .then((response) => response.json())
    //     .then((result) =>{
    //       setApiDetails(result);
          
    //     })
    //     .catch((error) => console.log("error", error));
  },[]);

  
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      {/* <Heading2
        heading="Search Results"
      /> */}
      {/* <div className="mb-8 lg:mb-11">
        <TabFilters />
      </div> */}
      <div className="lg:p-10 lg:bg-neutral-50 lg:dark:bg-black/20 grid grid-cols-1 gap-6 rounded-3xl">
        {apiDetails.map((item, index) => {
         return <FlightCard key={index} data={item} />
        })}

        <div className="flex mt-12 justify-center items-center">
          <ButtonPrimary loading>Show more</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { data: any; }) =>{
  return {
    shippingData: state.data
  }
}

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SectionGridFilterCard);
