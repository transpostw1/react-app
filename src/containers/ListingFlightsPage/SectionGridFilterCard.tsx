import React, { FC, useEffect, useRef, useState } from "react";
import TabFilters from "./TabFilters";
import Heading2 from "components/Heading/Heading2";
import RateCard, { RateCardProps } from "components/RateCard/RateCard";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { fetchData } from "../../redux";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import QuickRequest from "new_component/QuickRequest";
import Loading from "new_component/Loading";
import { postDataProps } from "components/HeroSearchForm/FlightSearchForm";

export interface SectionGridFilterCardProps {
  className?: string;
  fetchData: () => {} | any; // check
  shippingData: { data: [] | {}; loading: boolean; error: string };
}

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  fetchData,
  shippingData,
}) => {
  const [show, setShow] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const myRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!Array.isArray(shippingData.data)) {
      setShow(true);
    } else {
      setShow(false);
    }
    console.log("Loading", shippingData.loading);

    if (
      Array.isArray(shippingData.data) &&
      shippingData.data.length > 0 &&
      !shippingData.loading
    ) {
      myRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [shippingData.data]);

  // TODO fix quicksearch whith help of backend

  const Loader = () => {
    return (
      <div className=" fixed z-max flex  inset-0 bg-neutral-200 align-center justify-center  items-center bg-opacity-10  backdrop-blur-sm border rounded dark:border-neutral-800  ">
        <div className="absolute flex justify-center align-center">
          <svg
            className={`animate-spin w-8 h-8 -ml-1 mr-3  `}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    );
  };

  if (shippingData.loading) {
    return <Loader />;
  }

  return (
    <div
      ref={myRef}
      className={`nc-SectionGridFilterCard   ${
        Array.isArray(shippingData.data) && shippingData.data.length > 0
          ? className
          : "hidden"
      }`}
      data-nc-id="SectionGridFilterCard"
    >
      <div
        className={`lg:p-14 lg:mt-14 lg:bg-neutral-50 lg:dark:bg-black/20 grid grid-cols-1 gap-6 rounded-3xl
        `}
      >
        {Array.isArray(shippingData.data) &&
        shippingData.data.length > 0 &&
        !shippingData.loading ? (
          shippingData?.data?.map((item, index) => {
            return <RateCard key={index} data={item} />;
          })
        ) : (
          <QuickRequest />
        )}
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
  postData: postDataProps
) => {
  return {
    fetchData: async () => dispatch(fetchData(postData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionGridFilterCard);
