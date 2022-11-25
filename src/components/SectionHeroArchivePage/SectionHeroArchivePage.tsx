import React, { FC, ReactNode, useEffect, useState } from "react";
import imagePng from "images/Hero-illustration-main-1.png";
import { useLocation, RouteComponentProps } from "react-router-dom";

import hero7 from "images/transpost images/heros/hero-7.png";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import HeroSearchForm, {
  SearchTab,
} from "components/HeroSearchForm/HeroSearchForm";
import RecentSearches from "new_component/RecentSearches/RecentSearches";
import VideoContainer from "new_component/VideoContainer/VideoContainer";
import NcModal from "shared/NcModal/NcModal";
import KycInfo from "new_component/KycInfo/KycInfo";

export interface SectionHeroArchivePageProps {
  className?: string;
  listingType?: ReactNode;
  currentPage: "Stays" | "Cargo Tracker" | "Cars" | "Ocean";
  currentTab: SearchTab;
  rightImage?: string;
  fetchedData?: {};
}

export interface UserDetailsProps {
  KYC?: boolean;

  customer: {
    companyName?: string;
    created_at?: string;
    email?: string;
    gst_certificate?: string | null;
    id?: number | string;
    name?: string;
    pan_card?: string | null;
    phone?: string;
    updated_at?: string;
  };
  message?: string;
  status?: string;
}

const SectionHeroArchivePage: FC<SectionHeroArchivePageProps> = ({
  className = "",
  listingType,
  currentPage,
  currentTab,
  rightImage = hero7,
}) => {
  const [userDetails, setUserDetails] = useState<
    RouteComponentProps | null | {} | string
  >("");

  const location = useLocation<UserDetailsProps>();
  const { state } = location;

  useEffect(() => {
    setUserDetails(state);
    console.log("in section Hero", state);
  },[]);

  return (
    <div
      // className={`nc-SectionHeroArchivePage flex flex-col relative ${className}`}
      className={`nc-SectionHeroArchivePage flex flex-col relative pt-10 pb-10 lg:pb-1 lg:pt-16`}
      data-nc-id="SectionHeroArchivePage"
    >
      <NcModal
        renderTrigger={(openModal) => {
          if (false) {
            return openModal();
          }
        }}
        renderContent={() => <KycInfo />}
      />
      <div className="flex flex-col  lg:flex-row -mt-25 lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl leading-[110%]">
            <div className="font-Montserrat text-[#218778]">
              One <span className="font-extrabold">Globe</span>,
            </div>
            <div className="font-Montserrat">
              One <span className="font-extrabold">Click.</span>
            </div>
          </h2>
          {/* <div className="flex items-center text-base md:text-lg text-neutral-500 dark:text-neutral-400"> */}
          {/* <span className="ml-2.5"> */}{" "}
          {/* <p className="mb-5">
                Transpost is an operating system for Customs Brokers and
                Forwarders enabling them to scale up their business with least
                effort and investment.
              </p> */}
          {/* <ButtonPrimary>Get Started</ButtonPrimary>{" "} */}
          {/* </span> */}
          {/* <span className="mx-5"></span> */}
          {listingType ? (
            listingType
          ) : (
            <>
              {/* <i className="text-2xl las la-home"></i>
                <span className="ml-2.5">112 properties</span> */}
            </>
          )}
          {/* </div> */}
        </div>
        <div className=" hidden md:flex  flex-grow ">
          <img className="w-full object-fill" src={rightImage} alt="hero" />
        </div>
      </div>
      <div className="relative ">
        <div className="flow-root w-full md:absolute z-10">
          {/* for moving the search bar up and down */}
          <div className="z-max lg:-mt-40 xl:-mt-18 w-full">
            <HeroSearchForm currentPage={currentPage} currentTab={currentTab} />
          </div>
        </div>
        <div className=" mt-12 pt-[5rem]">
          {/* TODO redux call for recent searches */}
          {/* <RecentSearches
            from_port={"INNSA"}
            to_port={"DEHAM"}
            sl_date={""}
            cargo_type={"20gp"}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SectionHeroArchivePage;
