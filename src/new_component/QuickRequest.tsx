import React from "react";
import { useState } from "react";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import axios from "axios";

const QuickRequest = () => {
  const [commodity, setCommodity] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const submitHandler = () => {
    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const postData = {
      commodity,
      fullName,
      phone,
      email,
      description,
    };

    axios
      .post("", postData, config)
      .then((response) => {
        const fetchedData = response.data;
        console.log(fetchedData);
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
      });
  };

  return (
    <div className="flex flex-col lg:items-center">
      <h1>
        No rates are currently available. But please fill just a few fields and
        get an individual offer!
      </h1>
      <div className="text-[1.5rem] font-bold mt-4 ">Quick Request</div>

      <form className=" md:w-[80%]" action="/login" method="post">
        <div className="flex-col  md:grid grid-cols-2 gap-8 mt-4 ">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Commodity Name
            </span>
            <Input
              type="text"
              // placeholder="example@example.com"
              className="mt-1"
              value={commodity}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Phone
            </span>
            <Input
              type="text"
              // placeholder="example@example.com"
              className="mt-1"
              value={phone}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Full Name
            </span>
            <Input
              type="text"
              className="mt-1"
              value={fullName}
              onChange={(e) => setEmail(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <label className="block mt-3">
          <span className="text-neutral-800 dark:text-neutral-200">
            Description (Optional).
          </span>
          <textarea
            placeholder="IMO cargo, Temperature control, OG, Overweight, Flexitank, Cargo readiness, CBM, Humidity, etc."
            className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-[1rem] "
            value={description}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <ButtonPrimary
          className="h-14 w-full md:w-[9rem] mt-3 bg-[#2AA996] hover:bg-[#218778] flex items-center justify-center text-neutral-50 focus:outline-none "
          type="submit"
          onClick={submitHandler}
        >
          Submit
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default QuickRequest;
