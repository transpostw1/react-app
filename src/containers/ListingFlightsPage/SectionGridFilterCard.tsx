import React, { FC, useEffect, useRef, useState } from "react";
import TabFilters from "./TabFilters";
import Heading2 from "components/Heading/Heading2";
import FlightCard, { FlightCardProps } from "components/FlightCard/FlightCard";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { ChevronDoubleLeftIcon } from "@heroicons/react/outline";
import { fetchData } from "../../redux";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import QuickRequest from "new_component/QuickRequest";
import Loading from "new_component/Loading";
// import {dummyData} from "../../assets/rates"

// const data = require("../../assets/testing_rates.json");

export interface SectionGridFilterCardProps {
  className?: string;
  fetchData: () => {} | any; // check
  shippingData: { data: [] | {}; loading: string; error: string };
}

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
  shippingData,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const myRef = useRef<null | HTMLDivElement>(null);
  console.log(shippingData.data);

  useEffect(() => {
    if (!Array.isArray(shippingData.data)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    myRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [shippingData.data]);

  return (
    <div
      ref={myRef}
      className={`nc-SectionGridFilterCard md:pt-[10rem] ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <div className="lg:p-10 lg:bg-neutral-50 lg:dark:bg-black/20 grid grid-cols-1 gap-6 rounded-3xl">
        {Array.isArray(shippingData.data) && shippingData.data.length > 0
          ? shippingData.data.map((item, index) => {
              return <FlightCard key={index} data={item} />;
            })
          : isOpen && <QuickRequest />}

        {/* <div className="flex mt-12 justify-center items-center">
          <ButtonPrimary loading>Show more</ButtonPrimary>
        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state: { data: any }) => {
  return {
    shippingData: state.data,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  postData: {}
) => {
  return {
    fetchData: async () => dispatch(fetchData(postData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionGridFilterCard);
