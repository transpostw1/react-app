import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeftLong,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const TestCarousel = () => {
  const cardsData = [
    {
      id: 1,
      title: "CARD 1",
      content: "Clark Kent",
      imgUrl: "https://unsplash.it/200/200",
    },
    {
      id: 2,
      title: "CARD 2",
      content: "Bruce Wayne",
      imgUrl: "https://unsplash.it/201/200",
    },
    {
      id: 3,
      title: "CARD 3",
      content: "Peter Parker",
      imgUrl: "https://unsplash.it/200/201",
    },
    {
      id: 4,
      title: "CARD 4",
      content: "Tony Stark",
      imgUrl: "https://unsplash.it/201/201",
    },
    {
      id: 5,
      title: "CARD 5",
      content: "Reed Richards",
      imgUrl: "https://unsplash.it/202/200",
    },
    {
      id: 6,
      title: "CARD 6",
      content: "Wade Wilson",
      imgUrl: "https://unsplash.it/200/199",
    },
    {
      id: 7,
      title: "CARD 7",
      content: "Peter Quill",
      imgUrl: "https://unsplash.it/199/199",
    },
    {
      id: 8,
      title: "CARD 8",
      content: "Steven Rogers",
      imgUrl: "https://unsplash.it/199/200",
    },
    {
      id: 9,
      title: "CARD 9",
      content: "Bruce Banner",
      imgUrl: "https://unsplash.it/200/198",
    },
    {
      id: 10,
      title: "CARD 10",
      content: "Vincent Strange",
      imgUrl: "https://unsplash.it/198/199",
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  const renderCard = (item: any) => {
    return (
      <div className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'">
        <img src={item.imgUrl} alt="" className=" object-cover" />
        <div className="flex flex-col">
          <span>{item.title}</span>
          <span>{item.content}</span>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="relative flex items-center">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="h-9  opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
        />
        {/* <div
          className="opacity-50 cursor-pointer hover:opacity-100"
        /> */}
        <div
          id="slider"
          className="w-full h-full  overflow-x-scroll sm:no-scrollbar scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {cardsData.map((item) => renderCard(item))}
        </div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="h-9 opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
        />

        {/* <div
          className="opacity-50 cursor-pointer hover:opacity-100"
        /> */}
      </div>
    </>
  );
};

export default TestCarousel;
