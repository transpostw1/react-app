import React from "react";
import { connect } from "react-redux";
import { postDataProps } from "components/HeroSearchForm/FlightSearchForm";
import { ThunkDispatch } from "redux-thunk";
import { fetchData } from "../../redux";


const VideoContainer = () => {
  return (
    <div className={`flex flex-col  relative mb-16 pt-5 border-t `}>
      <div className="py-15 font-bold text-[38px] leading-10 py-8 mx-auto">
        Transpost <span className="text-[#01a77e] "> in a Glimpse </span>
      </div>
      <div
        className=" p-16 relative w-full h-full  bg-no-repeat bg-cover "
        style={{
          backgroundImage:
            "url('https://transpost.co/wp-content/uploads/2021/06/Video-bg-Globe-1-1.png')",
        }}
      >
        <div className="mx-auto z-0 shadow-2xl w-full h-auto sm:w-[800px] sm:h-[470px]  bg-white">
          <div className="absolute sm:relative mx-auto left-0 top-0 sm:w-[770px] sm:h-[450px]  h-auto  w-[340px]">
            <video
              controls
              className="z-1 mx-auto mt-2 sm:pt-3 w-full h-full "
              autoPlay
            >
              <source
                src="https://transpost.co/wp-content/uploads/2021/09/Transport_FINAL.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};


export default VideoContainer;
