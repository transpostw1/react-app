import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { signOutUser } from "utils/firebase/firebase-config";
import Input from "shared/Input/Input";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { NavLink, useHistory } from "react-router-dom";

const ProfileDropdown = ({ setIsLogin, isLogin,currentUser }: any) => {
  const inputRef = React.createRef<HTMLInputElement>();

  const history = useHistory();
  const signOuthandler = () => {
    
    setIsLogin(!isLogin);
    signOutUser();
    history.push("/login");
  };

if(!currentUser){
    return null
}

  return (
    <React.Fragment>
      <Popover className="relative">
        {({ open, close }) => {
          if (open) {
            setTimeout(() => {
              inputRef.current?.focus();
            }, 100);
          }

          return (
            <>
              <Popover.Button className="text-2xl bg-[#9e9e9e] md:text-[28px] w-10 h-10 rounded-full text-neutral-700 dark:text-neutral-300  hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center">
                {/* <EllipsisVerticalIcon/> */}{currentUser.displayName[0]}
                {/* <i className="las la-search"></i> */}
              </Popover.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  static
                  className="sub-menu nc-will-change-transform absolute z-10 w-56 right-0 mt-3"
                  //   className="absolute right-0 z-10  max-w-sm mt-3"
                >
                  <ul className="rounded-lg p-2 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                    <li onClick={() => close()} >
                      <NavLink
                        //   activeClassName="!border-primary-500"
                        to="/user/bookings"
                        className="flex items-center font-normal cursor-pointer text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                        //   className="block py-1 md:py-2 border-b-2 border-transparent flex-shrink-0"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li
                      onClick={signOuthandler}
                      className="flex items-center font-normal cursor-pointer text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                    >
                      Signout
                    </li>
                  </ul>
                </Popover.Panel>
              </Transition>
            </>
          );
        }}
      </Popover>
    </React.Fragment>
  );
};

export default ProfileDropdown;
