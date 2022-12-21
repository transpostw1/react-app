import React, { FC, useState, useEffect } from "react";
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
  auth,
} from "utils/firebase/firebase-config";
import axios from "axios";
import { useUserDetails } from "utils/contexts/userDetailsContext";

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

const errors = {
  username: "Full Name field is Empty",
  companyName: "Company Name field is Empty",
  password: "Password Field is Empty",
  gst_certificate: "GST details invalid",
  pan_card: "PAN details invalid",
  email: "Email field is empty",
  phone: "Phone Number field is Empty",
};

const defaultValue = {
  username: "",
  companyName: "",
  password: "",
  gst_certificate: "",
  pan_card: "",
  email: "",
  phone: "",
  customer_type: "Shipper",
};

export interface IsignUpForm {
  username?: string;
  companyName?: string;
  password?: string;
  gst_certificate?: string;
  pan_card?: string;
  email?: string;
  phone?: string;
  customer_type?: string;
}

const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  const [signUpForm, setSignUpForm] = useState<IsignUpForm>(defaultValue);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAllFoucesed, setIsAllFocused] = useState(false);

  const [focused, setFocused] = useState({
    username: false,
    companyName: false,
    password: false,
    email: false,
    phone: false,
  });

  const { createUser } = useUserDetails();

  const history = useHistory();

  const authenticateUser = async (user: any) => {
    console.log("Inside authenticate ", user.email);
  };

  const checkAllFocused = () => {
    return Object.values(focused).every((item) => item == true); // if some are false return true and vice versa
  };

  // Google SignUp
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await authenticateUser(user);

    const userDocRef = await createUserDocumentFromAuth(user);
    if (userDocRef?.exists()) {
      alert("User Already Exist");
      console.log("User Already Exist");
      return;
    }
  };

  const registerUser = () => {
    console.log("signupform", signUpForm);

    axios
      .post("https://apis.transpost.co/api/register", signUpForm)
      .then((response) => {
        const fetchedData = response.data;
        console.log("fetchedData", fetchedData);
        createUser(fetchedData);
        history.push("./");
      })
      .catch((error) => {
        const errorMsg = error.message;
        alert(errorMsg);
      });
  };

  // Create user with form
  const submitHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const {
        username,
        email,
        password,
        phone,
        gst_certificate,
        pan_card,
        companyName,
      } = signUpForm;
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(response?.user, {
        username,
        phone,
        gst_certificate,
        pan_card,
        companyName,
      });
     await registerUser();
     
      setIsSubmitted(true);
    } catch (error) {
      console.log("user creation encountered an error", error);
      alert(error);
    }
  };

  useEffect(() => {
    setIsAllFocused(checkAllFocused());
  }, [focused]);

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
          {/* <div className="grid gap-3">
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
          </div> */}
          {/* OR */}
          {/* <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div> */}
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" onSubmit={submitHandler}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Full Name <span>*</span>
              </span>
              <Input
                type="text"
                placeholder="Enter your Full Name"
                className="mt-1"
                value={signUpForm.username}
                onChange={(e) => {
                  setFocused({
                    ...focused,
                    username: true,
                  });
                  setSignUpForm({
                    ...signUpForm,
                    username: e.target.value,
                  });
                }}
              />
              {
                <p
                  className={`text-[red] ${
                    signUpForm.username?.length === 0 &&
                    (focused.username || isSubmitted)
                      ? ""
                      : "hidden"
                  } `}
                >
                  {errors.username}
                </p>
              }
            </label>

            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Phone number <span>*</span>
              </span>
              <Input
                type="number"
                placeholder="Enter your Phone number"
                className="mt-1"
                value={signUpForm.phone}
                onChange={(e) => {
                  setFocused({
                    ...focused,
                    phone: true,
                  });
                  setSignUpForm({
                    ...signUpForm,
                    phone: e.target.value,
                  });
                }}
              />
              {
                <p
                  className={`text-[red] ${
                    signUpForm.phone?.length === 0 &&
                    (focused.phone || isSubmitted)
                      ? ""
                      : "hidden"
                  } `}
                >
                  {errors.phone}
                </p>
              }
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Business Type <span>*</span>
              </span>
              <Select
                className="mt-1.5 "
                onChange={(e) => {
                  setSignUpForm({
                    ...signUpForm,
                    customer_type: e.target.value,
                  });
                }}
              >
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
                placeholder="Enter your GST number"
                className="mt-1"
                value={signUpForm.gst_certificate}
                onChange={(e) => {
                  setSignUpForm({
                    ...signUpForm,
                    gst_certificate: e.target.value,
                  });
                }}
              />
              {/* {
                <p
                  className={`text-[red] ${
                    signUpForm.gst_certificate?.length === 0 && (focused.gst_certificate || isSubmitted)
                      ? ""
                      : "hidden"
                  } `}
                >
                  {errors.gst_certificate}
                </p>
              } */}
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                PAN Number
              </span>
              <Input
                type="text"
                placeholder="Enter your PAN number"
                className="mt-1"
                value={signUpForm.pan_card}
                onChange={(e) => {
                  setSignUpForm({
                    ...signUpForm,
                    pan_card: e.target.value,
                  });
                }}
              />
              {
                // <p
                //   className={`text-[red] ${
                //     signUpForm.pan_card?.length === 0 && (focused.pan_card || isSubmitted)
                //       ? ""
                //       : "hidden"
                //   } `}
                // >
                //   {errors.pan_card}
                // </p>
              }
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Company Name <span>*</span>
              </span>
              <Input
                type="text"
                // placeholder="example@example.com"
                className="mt-1"
                value={signUpForm.companyName}
                placeholder="Enter your Compnay name"
                onChange={(e) => {
                  setFocused({
                    ...focused,
                    companyName: true,
                  });
                  setSignUpForm({
                    ...signUpForm,
                    companyName: e.target.value,
                  });
                }}
              />
              {
                <p
                  className={`text-[red] ${
                    signUpForm.companyName?.length === 0 &&
                    (focused.companyName || isSubmitted)
                      ? ""
                      : "hidden"
                  } `}
                >
                  {errors.companyName}
                </p>
              }
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address <span>*</span>
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
                value={signUpForm.email}
                onChange={(e) => {
                  setFocused({
                    ...focused,
                    email: true,
                  });
                  setSignUpForm({
                    ...signUpForm,
                    email: e.target.value,
                  });
                }}
              />
              {
                <p
                  className={`text-[red] ${
                    signUpForm.email?.length === 0 &&
                    (focused.email || isSubmitted)
                      ? ""
                      : "hidden"
                  } `}
                >
                  {errors.email}
                </p>
              }
            </label>
            {/* disabled temporarily */}
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Password <span>*</span>
              </span>
              <Input
                type="password"
                placeholder="Enter your Password"
                className="mt-1"
                value={signUpForm.password}
                onChange={(e) => {
                  setFocused({
                    ...focused,
                    password: true,
                  });
                  setSignUpForm({
                    ...signUpForm,
                    password: e.target.value,
                  });
                }}
              />
              {
                <p
                  className={`text-[red] ${
                    signUpForm.password?.length === 0 &&
                    (focused.password || isSubmitted)
                      ? ""
                      : "hidden"
                  } `}
                >
                  {errors.password}
                </p>
              }
            </label>

            <ButtonPrimary
              type="submit"
              className={`${isAllFoucesed ? "" : "cursor-not-allowed"} `}
              disabled={!isAllFoucesed}
            >
              Continue
            </ButtonPrimary>
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
