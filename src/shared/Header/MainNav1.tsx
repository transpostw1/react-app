import React, { FC, useState, useEffect } from "react";
import Logo from "shared/Logo/Logo";
import Navigation from "shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";

import ProfileDropdown from "./ProfileDropdown";

import { useUserAuth } from "utils/contexts/userContext";
import Notification from "new_component/Notification/Notification";

export interface MainNav1Props {
  isTop: boolean;
}

const MainNav1: FC<MainNav1Props> = ({ isTop }) => {
  const { isLogin } = useUserAuth();

  return (
    <div
      className={`nc-MainNav1 relative z-10 ${
        isTop ? "onTop " : "notOnTop backdrop-filter"
      }`}
    >
      <div className="container py-5 relative flex justify-between items-center space-x-2 xl:space-x-4">
        <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-3 2xl:space-x-14">
          <Logo />
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-1">
            <Navigation />
            {/* <SwitchDarkMode /> */}
            {/* <SearchDropdown /> */}
            {!isLogin ? (
              <ButtonPrimary className="bg-[#cd512f]" href="/login">
                Sign In
              </ButtonPrimary>
            ) : (
              <>
                <Notification />
                <ProfileDropdown />
              </>
            )}
            <div className="px-1" />
            {/* <ButtonPrimary href="/login">Sign up</ButtonPrimary> */}
          </div>
          <div className="flex items-center xl:hidden">
            <div className="px-1" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
