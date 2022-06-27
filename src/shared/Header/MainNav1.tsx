import React, { FC, useState, useEffect } from "react";
import Logo from "shared/Logo/Logo";
import Navigation from "shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  signOutUser,
} from "utils/firebase/firebase-config";
import { User } from "firebase/auth";
import { signOutStart } from "../../redux/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import AccountPage from "containers/AccountPage/AccountPage";

export interface MainNav1Props {
  isTop: boolean;
}

const MainNav1: FC<MainNav1Props> = ({ isTop }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      if (user) {
        createUserDocumentFromAuth(user);
        setIsLogin(false);
      }
      setCurrentUser(user);
      console.log(user);
    });

    return unsubscribe;
  }, []);
  const history = useHistory();
  const signOuthandler = () => {
    setIsLogin(!isLogin);
    signOutUser();
    history.push("/login");
  };

  return (
    <div
      className={`nc-MainNav1 relative z-10 ${
        isTop ? "onTop " : "notOnTop backdrop-filter"
      }`}
    >
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
          <Logo />
          <Navigation />
          {isLogin ? (
            ""
          ) : (
            <Link to={"/dashboard"}>
              <div>Profile</div>
            </Link>
          )}
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-1">
            <SwitchDarkMode />
            <SearchDropdown />
            {isLogin ? (
              <ButtonPrimary href="/login">Sign In</ButtonPrimary>
            ) : (
              <ButtonPrimary className="p-0" onClick={signOuthandler}>Sign Out</ButtonPrimary>
              // <ButtonPrimary onClick={signOuthandler}>{currentUser?.displayName?.charAt(0)}</ButtonPrimary>
            )}
            <div className="px-1" />
            {/* <ButtonPrimary href="/login">Sign up</ButtonPrimary> */}
          </div>
          <div className="flex items-center xl:hidden">
            <SwitchDarkMode />
            <div className="px-1" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
