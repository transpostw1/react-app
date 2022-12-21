import React, { useState, useEffect } from "react";
import { useUserDetails } from "utils/contexts/userDetailsContext";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import { useUserAuth } from "utils/contexts/userContext";
import axios from "axios";

export interface IkycForm {
  customerID: string | null | number | undefined;
  gst: string;
  pan: string;
}

const errors = {
  gst: "GST details invalid",
  pan: "PAN details invalid",
};


const KycModal = ({ onClose, showKycModal }: any) => {
  const [visible, setVisible] = useState(false);
  const [kycForm, setKycForm] = useState<IkycForm>({
    customerID: 0,
    gst: "",
    pan: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [focused, setFocused] = useState({
    gst: false,
    pan: false,
  });

  const { userState, updateKyc } = useUserDetails();
  const { isLogin } = useUserAuth();

  useEffect(() => {
    let user_details = localStorage.getItem("user_details");

    if (!user_details) {
      //   setVisible(true);
      localStorage.setItem("user_details", JSON.stringify(userState));
    } else {
      const userObject = JSON.parse(user_details);
      console.log("userObject", userObject);
      if (userObject !== null && userObject.KYC === false && isLogin) {
        setVisible(true);
        console.log("Inside ", userObject);
      }
    }
  }, []);

  const submitHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    console.log(kycForm);
    setIsSubmitted(true);

    axios
      .post("https://apis.transpost.co/api/customer/updatekyc", kycForm)
      .then((response) => {
        console.log("kyc Updated", response.data);
        updateKyc(response.data);
        setVisible(false);
      });
  };

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (userState !== null) {
      setKycForm({
        ...kycForm,
        customerID: userState?.customer?.ID,
      });
    }
  }, [userState]);

  if (!visible) {
    return null;
  }
  return (
    <div className=" p-10 fixed z-50 flex inset-0 bg-neutral-200 align-center justify-center  items-center bg-opacity-10  backdrop-blur-sm border rounded dark:border-neutral-800 ">
      <div className="flex relative pb-8 h-auto  w-2/3 flex-col space-y-5 align-center justify-center  items-center bg-white border rounded-lg dark:border-neutral-600 dark:bg-neutral-700">
        {/* <div className="inline-block w- my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300"> */}
        <div className="py-4 px-6 text-center relative border-b border-neutral-100 dark:border-neutral-700 md:py-5">
          <span className="text-base px-8 font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200 ">
            {`Hey ${userState?.customer.name}! Your Account is Created, Please complete your KYC to Access all features.`}
          </span>
        </div>
        <form className="grid grid-cols-1 gap-6 w-1/2" onSubmit={submitHandler}>
          <label className="block ">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              GST Number *
            </span>
            <Input
              type="text"
              placeholder="Enter your GST number"
              className="mt-1 "
              value={kycForm.gst}
              onChange={(e) => {
                setFocused({
                  ...focused,
                  gst: true,
                });
                setKycForm({
                  ...kycForm,
                  gst: e.target.value,
                });
              }}
            />
            {
              <p
                className={`text-[red] ${
                  kycForm.gst?.length === 0 && (focused.gst || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.gst}
              </p>
            }
          </label>
          <label className="block ">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              PAN Number *
            </span>
            <Input
              type="text"
              placeholder="Enter your PAN number"
              className="mt-1"
              value={kycForm.pan}
              onChange={(e) => {
                setFocused({
                  ...focused,
                  pan: true,
                });
                setKycForm({
                  ...kycForm,
                  pan: e.target.value,
                });
              }}
            />
            {
              <p
                className={`text-[red] ${
                  kycForm.pan?.length === 0 && (focused.pan || isSubmitted)
                    ? ""
                    : "hidden"
                } `}
              >
                {errors.pan}
              </p>
            }
          </label>
          <button
            className={`ttnc-ButtonPrimary p-2 rounded-xl  disabled:bg-opacity-70 bg-[#2AA996] hover:bg-[#218778] text-neutral-50 ${
              focused.gst && focused.pan ? "" : "cursor-not-allowed"
            }  `}
            onClick={submitHandler}
            disabled={(!focused.gst && !focused.pan)}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default KycModal;
