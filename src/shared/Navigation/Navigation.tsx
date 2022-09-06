import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO } from "data/navigation";
import ncNanoId from "utils/ncNanoId";

function Navigation() {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
      {NAVIGATION_DEMO.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
      {/* for additional links */}
      {/* <li className="menu-item">
        <a
        className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
          rel="noopener noreferrer"
          href="https://transpost.co/blog"
        >
          Blog
        </a>
      </li> */}
    </ul>
  );
}

export default Navigation;
