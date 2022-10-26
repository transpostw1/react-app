import React from "react";

import { BellIcon } from "@heroicons/react/24/outline";

// TODO: Notification functionality displaying number of notifications
const Notification = () => {
  return (
    <>
      <div className="relative text-2xl md:text-3xl w-12 h-12 rounded-full cursor-pointer text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ">
        <BellIcon className="w-7 h-7" aria-hidden="true"></BellIcon>
        {/* <span className="absolute flex self-center right-0 top-0 rounded-full bg-red-600 w-6 h-6 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
          <p className="self-center align-center">112</p>
        </span> */}
      </div>
    </>
  );
};

export default Notification;
