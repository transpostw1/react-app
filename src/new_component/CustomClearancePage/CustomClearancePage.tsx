import React from "react";
import { Helmet } from "react-helmet";
import arrow from "../../images/transpost images/contact-us/Brand-element-1.png";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";

const CustomClearancePage = () => {
  const CHA_LIST = [
    {
      shippingLine: "MAERSK",
      href: "https://backend.transpost.co/uploads/merskCHA.xlsx",
    },
    // {
    //   shippingLine: "MSC",
    //   href: "www.google.com",
    // },
   
  ];

  const renderCHAList = () => {
    return (
      <>
        <div className="mt-10 text-center border rounded-tl-2xl rounded-tr-2xl grid grid-rows-auto box-shadow-2xl shadow-slate-200">
          <div className="flex bg-neutral-200 text-lg rounded-tl-2xl rounded-tr-2xl p-5 font-bold border-b  ">
            <span className="w-1/2 pt-2  border-r">Shipping Line</span>
            <span className="w-1/2 pt-2 ">Rates</span>
          </div>
          {CHA_LIST.map((item) => {
            return (
              <div className="flex font-medium border-b ">
                <span className="w-1/2 p-3 border-r">{item.shippingLine}</span>
                <a
                  className="w-1/2 p-3 underline underline-offset-1"
                  href={item.href}
                >
                  Download
                </a>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className={`nc-PageContact overflow-hidden`} data-nc-id="PageContact">
      <Helmet>
        <title>Custom Clearance | Transpost</title>
      </Helmet>
      <div className="container border-b-[1px] grid grid-flow-col gap-4 pb-24 py-1 mb-24">
        <img src={arrow} className="rotate-180 justify-self-start" />
        <div className="flex flex-col py-10">
          <span className=" m-2 font-black text-center w-full leading-[115%]  text-[2.5rem] ">
            We offer
            <span className="text-[#2AA996]"> Custom Clearance </span>
            support
          </span>
          {/* <span className=" mx-5 text-center">
            Our customer care team is in place to manage your service related
            queries on our platform.
          </span> */}

          {renderCHAList()}
        </div>

        <img src={arrow} className="justify-self-end" />
      </div>

      {/* OTHER SECTIONS */}
      <div className="container">
        <SectionSubscribe2 className="py-24 lg:py-32"
        text="You can consult with us on the journey to deliver your product to the buyer, along with assistance in Custom Clearance."
        />
      </div>
    </div>
  );
};

export default CustomClearancePage;
