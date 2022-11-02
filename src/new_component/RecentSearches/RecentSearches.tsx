import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../redux";
import { ThunkDispatch } from "redux-thunk";
import { postDataProps } from "components/HeroSearchForm/FlightSearchForm";

import Glide from "@glidejs/glide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
// import NcImage from "shared/NcImage/NcImage"

export interface RecentSearchFormProps {
  fetchData: () => {} | any;
}

// TODO : Change file location as per folder structure
const RecentSearches: React.FC<RecentSearchFormProps> = ({ fetchData }) => {
  const cardsData = [
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",
      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",

      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",

      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",

      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",

      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",
      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },

    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      containerType: "20GP",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
  ];



  const slider = new Glide(".glide", {
    type: "carousel",
    gap: 20,
    perView: 3,
    startAt: 0,
    // autoplay: 2000,
    // hoverpause: true,
    breakpoints: {
      800: {
        perView: 2,
      },
      600: {
        perView: 1,
      },
    },
  });

  useEffect(() => {
    slider.mount();
  }, [slider]);

  const renderCard = (item: any) => {
    const handleSubmit = () => {
      const postData = {
        from_port: "INNSA",
        // from_port: item.pol,
        to_port: "DEHAM",
        // to_port: item.pod,
        sl_date: "2022-11-02",
        cargo_type: "20gp",
      };
      fetchData();
      console.log("post", postData);
    };

    return (
      <li
        className="glide__slide slider  inline-block  p-2 cursor-pointer hover:scale-105 border bg-white rounded-2xl ease-in-out duration-300'"
        onClick={handleSubmit}
      >
        <div className="flex flex-col  gap-2">
          <div className="grid grid-col space-y-4 max-w-screen text-[#5c5c5c] ">
            <div className="flex space-x-2 ">
              <FontAwesomeIcon icon={faAnchor} />
              <span className="text-[0.8rem]  font-bold">{item.pol}</span>
            </div>
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faAnchor} />

              <span className="text-[0.8rem] font-bold ">{item.pod}</span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <span>{item.containerType}</span>
            <span className="">29 secs ago</span>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="lg:pb-16">
      <span className="text-2xl pl-3 px-6 font-bold ">Recent Searches</span>
      <div className=" glide  bg-neutral-200 rounded-2xl p-5 flex items-center">
        <div className="glide__arrows" data-glide-el="controls">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="glide__arrow glide__arrow--prev h-9 opacity-50 cursor-pointer hover:opacity-100"
            data-glide-dir="<"
          />
        </div>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {cardsData.map((item: any) => {
              return renderCard(item);
            })}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <FontAwesomeIcon
            icon={faAngleRight}
            className="glide__arrow glide__arrow--next h-9 opacity-50 cursor-pointer hover:opacity-100"
            data-glide-dir=">"
          />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecentSearches);
