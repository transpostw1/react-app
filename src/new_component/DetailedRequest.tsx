import React from "react";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Select from "shared/Select/Select";

const DetailedRequest = () => {
  return (
    <div className="flex flex-col  md:items-center">
      <div className="text-[1.5rem] font-bold my-4 ">
        <div>Request a Quote</div>
      </div>
      <div className="text-[1.2] font-semibold mb-4">
      And get the best rates from the leading logistics providers.
      </div>

      <form className=" md:w-[80%]" action="/login" method="post">
        <div className="flex-col  md:grid grid-cols-2 gap-8 my-4 ">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Transportation By *
            </span>
            <Select className="mt-1">
              <option>Full Container Load FCL</option>
              <option>Less Container Load LCL</option>
              <option>Bulk</option>
            </Select>
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Container Type *
            </span>
            <Select className="mt-1">
              {[
                "20'Standard",
                "40'Standard",
                "40'High Cube",
                "20'Refrigerated",
                "40'Refrigerated",
                "45'High Cube",
              ].map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </Select>
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              From *
            </span>
            <Input
              type="text"
              placeholder="City, Port"
              className="mt-1"
              //   value={commodity}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">To *</span>
            <Input
              type="text"
              placeholder="City, Port"
              className="mt-1"
              //   value={commodity}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Ready to Load *
            </span>
            <Input
              type="date"
              placeholder="City, Port"
              className="mt-1"
              //   value={commodity}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="text-[1.5rem] font-bold my-8 text-align-centre">
          Contact Details 
        </div>
        <div className="flex-col  md:grid grid-cols-2 gap-8 mt-4 ">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Commodity Name *
            </span>
            <Input
              type="text"
              // placeholder="example@example.com"
              className="mt-1"
              //   value={commodity}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Phone *
            </span>
            <Input
              type="text"
              // placeholder="example@example.com"
              className="mt-1"
              //   value={phone}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Full Name *
            </span>
            <Input
              type="text"
              className="mt-1"
              //   value={fullName}
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Email address *
            </span>
            <Input
              type="email"
              placeholder="example@example.com"
              className="mt-1"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
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
            // value={description}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <ButtonPrimary
          className="h-14 w-full md:w-[9rem] mb-4 mt-3 bg-[#2AA996] hover:bg-[#218778] flex items-center justify-center text-neutral-50 focus:outline-none "
          type="submit"
          //   onClick={submitHandler}
        >
          Submit
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default DetailedRequest;
