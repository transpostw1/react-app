import React, { FC, useState } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link, useHistory } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "utils/firebase/firebase-config";


export interface PageSignUpProps {
  className?: string;
}

const loginSocials = [
  // {
  //   name: "Continue with Facebook",
  //   href: "#",
  //   icon: facebookSvg,
  // },
  // {
  //   name: "Continue with Twitter",
  //   href: "#",
  //   icon: twitterSvg,
  // },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef?.exists());
    if (userDocRef?.exists()) {
      console.log("User Already Exist");
      // return;
    }

    history.push("./");
  };

  const submitHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // if (password !== confirmPassword) {
    //   alert('passwords do not match');
    //   return;
    // }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(response?.user, {
        fullName,
        phoneNumber,
        gstNumber,
        companyName,
      });

      history.push("./");
    } catch (error) {
      console.log("user creation encountered an error", error);
    }
  };


  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Sign up || Transpost </title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-5 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <div
                key={index}
                // href={item.href}
                onClick={logGoogleUser}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px] cursor-pointer"
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" onSubmit={submitHandler}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Full Name
              </span>
              <Input
                type="text"
                className="mt-1"
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Phone number
              </span>
              <Input
                type="text"
                // placeholder="example@example.com"
                className="mt-1"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Business Type
              </span>
              <Select className="mt-1.5">
                  <option value="Shipper">Shipper</option>
                  <option value="Freight Forwarder">Freight Forwarder</option>
                  <option value="Custom Broker">Custom Broker</option>
                </Select>
         
            </label>
           
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                GST Number
              </span>
              <Input
                type="text"
                className="mt-1"
                onChange={(e) => setGstNumber(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Company Name
              </span>
              <Input
                type="text"
                // placeholder="example@example.com"
                className="mt-1"
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input
                type="password"
                className="mt-1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <ButtonPrimary type="submit">Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
