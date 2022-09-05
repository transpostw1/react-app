import React, { FC } from "react";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SocialsList from "shared/SocialsList/SocialsList";
import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import supportimg from "../../images/transpost images/contact-us/customer-support@2x.png";
import chatimg from "../../images/transpost images/contact-us/live-chat-1.png";
import arrow from "../../images/transpost images/contact-us/Brand-element-1.png"

export interface PageContactProps {
  className?: string;
}

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "Suite 3 A, Level 7, B Wing Time Square, Andheri Kurla Road, Mumbai 400059, Maharashtra, India",
  },
  {
    title: "💌 EMAIL",
    desc: "info@transpost.co",
  },
  {
    title: "☎ PHONE",
    desc: "022 40139092",
  },
];

const PageContact: FC<PageContactProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageContact overflow-hidden ${className}`}
      data-nc-id="PageContact"
    >
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="container border-b-[1px] grid grid-flow-col gap-4 pb-24 py-12 mb-24">
        <img src={arrow} className="rotate-180 justify-self-start"/>
        <img className="mr-5 h-[100px] w-[100px] justify-self-end self-center"  src={supportimg} />
        <div className="flex flex-col py-10">
          <span className="py-5 m-5 font-black text-center w-full leading-[115%]  text-[2.5rem] ">
            We offer
            <span className="text-[#2AA996]"> seamless </span>
            support
          </span>
          <span className=" mx-5 text-center">
            Our customer care team is in place to manage your service related
            queries on our platform.
          </span>
        </div>

        <img className="ml-5 self-center bg-center h-[100px] w-[100px]" src={chatimg} />
        <img src={arrow} className="justify-self-end" />

      </div>
      <div className=" mb-24  lg:mb-32 lg:mt-24">
        {/* <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact Us
        </h2> */}
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>Full name</Label>

                  <Input
                    placeholder="Enter your Name"
                    type="text"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                    type="email"
                    placeholder="Enter your Email"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>

                  <Textarea
                    placeholder="Enter your Message"
                    className="mt-1"
                    rows={6}
                  />
                </label>
                <div>
                  <ButtonPrimary type="submit">Send Message</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="container">
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay uniqueClassName="Pagecontact_" />
        </div> */}
        <SectionSubscribe2 className="py-24 lg:py-32" />
      </div>
    </div>
  );
};

export default PageContact;
