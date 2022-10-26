import React, { useEffect } from "react";

import Glide from "@glidejs/glide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowAltCircleRight,
  faShip,
} from "@fortawesome/free-solid-svg-icons";
// import NcImage from "shared/NcImage/NcImage";

// TODO : Change file location as per folder structure
const RecentSearches = () => {
  const cardsData = [
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",
      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",
      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },

    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",

      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },
    {
      id: 1,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/CMA.png",
    },
    {
      id: 2,
      pol: "Jawaharlal Nehru (INNSA)",
      pod: "Hamburg (DEHAM)",
      rate: "3250",
      containerType: "20GP",
      validity: "31st Oct 2022",

      imgUrl: "https://launchindia.org/transpost/logos/cosco_logo.png",
    },
  ];

  const slider = new Glide(".glide", {
    type: "carousel",
    gap: 20,
    perView: 5,
    startAt: 0,
    // autoplay: 2000,
    // hoverpause: true,
    breakpoints: {
      800: {
        perView: 4,
      },
      600: {
        perView: 2,
      },
    },
  });

  useEffect(() => {
    slider.mount();
  }, [slider]);

  const renderCard = (item: any) => {
    return (
      <li className="glide__slide slider w-[220px] inline-block  p-2 cursor-pointer hover:scale-105 border bg-white rounded-2xl ease-in-out duration-300'">
        {/* <NcImage src={item.imgUrl} className="object-cover "/> */}
        <div className="flex flex-col  gap-2">
          <img
            src={item.imgUrl}
            alt=""
            className="self-center object-cover h-12 w-15"
          />
          <div className="grid grid-cols-3 max-w-screen text-[#5c5c5c] ">
            <span className="text-[0.8rem] font-bold">{item.pol}</span>
            <span className="text-center">
              <FontAwesomeIcon icon={faShip} />
            </span>
            <span className="text-[0.8rem] font-bold ">{item.pod}</span>
          </div>
          <div className="grid grid-cols-2">
            <span>{item.containerType}</span>
            <span className="">USD {item.rate}</span>
          </div>
          <span className="font-semibold text-center text-[#5c5c5c]">
            Valid till {item.validity}
          </span>
        </div>
      </li>
    );
  };

  return (
    <div className="z-[-1]">
      <span className="text-2xl pl-3  font-bold ">Recent Searches</span>
      <div className=" glide  bg-transparent rounded-2xl p-5 flex items-center">
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

export default RecentSearches;
