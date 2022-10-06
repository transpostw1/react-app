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
  shippingData: { data: [] | {}; loading: string; error: string };
}

const getLocalStorage = () => {
  let quote_list = localStorage.getItem("quote_list");
  if (quote_list) {
    return (quote_list = JSON.parse(
      localStorage.getItem("quote_list") || "[]"
    ));
  } else {
    return [];
  }
};

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  fetchData,
  shippingData,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const myRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!Array.isArray(shippingData.data)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    if (Array.isArray(shippingData.data) && shippingData.data.length > 0) {
      myRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [shippingData.data]);

  // useEffect(() => {
  //   // localStorage.setItem("quote_list", JSON.stringify(quoteList));
  //   setQuote(quoteList)
  // }, [quoteList]);

  return (
    <div
      ref={myRef}
      className={`nc-SectionGridFilterCard md:pt-[18rem] ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <div className="lg:p-14 lg:mt-14 lg:bg-neutral-50 lg:dark:bg-black/20 grid grid-cols-1 gap-6 rounded-3xl">
        {Array.isArray(shippingData.data) && shippingData.data.length > 0
          ? shippingData?.data?.map((item, index) => {
              return <RateCard key={index} data={item} />;
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
