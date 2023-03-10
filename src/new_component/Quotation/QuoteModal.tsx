import React, { ReactComponentElement, useEffect, useState } from "react";
import axios from "axios";

import {
  QuoteListProvider,
  useQuoteList,
} from "utils/contexts/quoteListContext";
import { useLocalStorage } from "hooks/useLocalStorage";

import Loading from "new_component/Loading";
import AdditonalCharge from "./AdditonalCharge";
import Remarks from "./Remarks";

export interface Modal {
  showQuoteModal: boolean;
  onclose: void;
  data: {
    id?: string;
    sl_name?: string;
    expiry_date?: string;
    from_port?: string;
    service_mode?: string;
    to_port?: string;
    via?: string;
    sl_logo?: string;
    additionalCosts?: [
      {
        id: number;
        code: string;
        name: string;
        amount: number;
        currency: string;
      }
    ];
  };
}

export interface IquoteList {
  quoteId: string;
  id?: string;
  sl_name?: string;
  expiry_date?: string;
  from_port?: string;
  service_mode?: string;
  to_port?: string;
  via?: string;
  sl_logo?: string;
  total?: number;
  cargo_size?: string;
  sum_buy?: number;
  sum_sell: number;
  isEditing?: boolean;
  remarks?: string;
  terms?: string;
  additionalCosts?: [
    {
      id: any;
      code: string;
      name: string;
      amount: number;
      currency: string;
    }
  ];
}

const QuoteModal = ({ data, onclose, showQuoteModal }: any) => {
  const { quoteList, addCharge } = useQuoteList();

  const [freightBuyRate, setFreightBuyRate] = useState(data.base_rate);
  const [freightSellRate, setFreightSellRate] = useState<number>(
    data.base_rate
  );
  const [totalBuyRate, setTotalBuyRate] = useState(0);
  const [totalSellRate, setTotalSellRate] = useState(0);
  const [showRemarks, setShowRemarks] = useState(false);
  const [editID, setEditID] = useState(-1);

  const sum = (arr: any[], initialvalue: number) => {
    if (arr.length > 0) {
      return arr.reduce((pv: number, cv: number) => {
        if (typeof pv == "number" && typeof cv == "number") {
          return pv + cv;
        } else {
          return pv;
        }
      }, initialvalue);
    } else {
      return initialvalue;
    }
  };

  useEffect(() => {
    if (quoteList.length > 0) {
      const index = quoteList.findIndex((item: any) => {
        return item?.id === data.id;
      });
      setEditID(index);
    }

    // initial sum visible for 1st time
    if (quoteList?.find((item: any) => item.id === data.id) == null) {
      const buy_array = data.additionalCosts.map((item: any) => item.amount);
      const initial_buy_Sum = sum(buy_array, data.base_rate);
      // console.log("initial buy Sum", initial_buy_Sum);
      setTotalBuyRate(initial_buy_Sum);
      const initial_sell_sum = sum(buy_array, freightSellRate);
      // setTotalSellRate(initial_sell_sum);

      console.log("initial sell Sum", initial_sell_sum);
    } else {
      const quote = quoteList.find((item: any) => item.id === data.id);
      if (quote?.additionalCosts && quote?.additionalCosts?.length > 0) {
        const buy_array = quote?.additionalCosts?.map(
          (charge: any) => charge.netBuyRate || charge.amount
        );
        const buy_result = sum(buy_array, data.base_rate);
        console.log("inner Result", buy_result);
        setTotalBuyRate(buy_result);
        // for sell rate
        const sell_array = quote?.additionalCosts?.map(
          (charge: any) => charge.netSellRate || charge.amount
        );
        const sell_result = sum(sell_array, freightSellRate);
        setTotalSellRate(sell_result);
        quote.sum_sell = freightSellRate;
      } else {
        // when additional cost is empty
        const buy_array = data.additionalCosts.map((item: any) => item.amount);
        const initial_buy_Sum = sum(buy_array, data.total);
        console.log("initial buy Sum", initial_buy_Sum);
        setTotalBuyRate(initial_buy_Sum);
        const initial_sell_sum = sum(buy_array, freightSellRate);
        setTotalSellRate(initial_sell_sum);

        console.log("initial sell Sum", initial_sell_sum);
      }
    }
  }, [quoteList, freightSellRate]);

  useEffect(() => {
    if (quoteList.length > 0) {
      const index = quoteList.findIndex((item: any) => {
        return item?.id === data.id;
      });
      setEditID(index);
    }

    // console.log(quotes[editID]?.additionalCosts);
  }, [quoteList, showQuoteModal]);

  const onAddHandler = () => {
    addCharge(data.id);
  };

  // Create PDF
  const generateQuote = () => {
    console.log("INDIVIDUAL QUOTE", quoteList[editID]);

    // TESTING

    axios
      .post("https://apis.transpost.co/api/rates/pdf", quoteList[editID], {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/pdf",
        },
      })
      .then((response) => {
        console.log(
          "LINK",
          `https://apis.transpost.co/storage/quotes/${response.data}`
        );
        const link = document.createElement("a");

        link.href = `https://apis.transpost.co/storage/quotes/${response.data}`;
        link.setAttribute("download", `${link.href}`);
        document.body.appendChild(link);
        window.open(
          `https://apis.transpost.co/storage/quotes/${response.data}`
        );
        // link.click();
      });
    onclose();
  };
  const handleOnClose = () => {
    onclose();
  };
// hiding background scrollbar when modal open
  useEffect(() => {
    if (showQuoteModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });

  if (!showQuoteModal) {
    return null;
  }

  return (
    <div className=" p-10 fixed z-50 inset-0 bg-neutral-200 bg-opacity-10  backdrop-blur-sm border rounded dark:border-neutral-800 ">
      <div className="flex relative py-5 h-full flex-col text-xs sm:text-base  align-center bg-white border rounded-lg  dark:border-neutral-600 dark:bg-neutral-700">
        {/* <div className="flex relative h-full flex-col align-center bg-white border rounded-lg"> */}
        <div className="flex h[15%] order-first justify-between border-b p-4 text-2xl dark:bg-neutral-800 ">
          <span>Details</span>
          <button onClick={handleOnClose} className="order-last">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex relative h-[75%] flex-col align-center bg-white overflow-x-auto overflow-y-auto dark:bg-neutral-700">
          <div className="flex justify-center  my-4 px-3 w-full">
            <button
              onClick={() => setShowRemarks(false)}
              className={`p-1 w-[200px] rounded-l-full border border-r-1 ${
                showRemarks ? "" : "text-white bg-indigo-500"
              }`}
            >
              Quotation Details
            </button>
            <button
              onClick={() => setShowRemarks(true)}
              className={`p-1 w-[200px] rounded-r-full border border-r-1 ${
                showRemarks ? "text-white bg-indigo-500" : ""
              }`}
            >
              Remarks
            </button>
          </div>
          {/* TODO translate animation */}
          {showRemarks ? (
            <div
              className={`top-0 left-0 w-full  transition-all duration-[600ms] ${
                showRemarks ? "translate-x-0" : "translate-x-full "
              }`}
              data-taos-offset="400"
            >
              <Remarks data={data} quote={quoteList[editID]} />
            </div>
          ) : (
            <div
              className={`top-0 left-0 w-full transiton-all ease-in-out duration-300 ${
                showRemarks ? "translate-x-full " : "translate-x-0"
              }`}
            >
              <div className="flex border  rounded-2xl mx-5 my-3 mt-10 w-max">
                <span className="flex px-4 items-center border-r-2">
                  Freight
                </span>
                <select className="pr-15 border-0  focus:ring-0 focus:outline-none dark:bg-transparent">
                  <option>USD</option>
                </select>
                <div className="w-5"></div>
              </div>{" "}
              <div className="grid border-t border-x border-zinc-500 gap-[1px] bg-zinc-500  mx-3 mb-0   grid-cols-10 font-semibold overscroll-y-auto">
                <div className=" p-[2rem] col-start-1 col-end-3 bg-white row-span-2 flex px-3 items-center">
                  Charges
                </div>
                <div className="flex px-3 items-center bg-white row-span-2 ">
                  Basis
                </div>
                <div className="flex px-3 items-center bg-white  row-span-2">
                  Equipment Type
                </div>
                <div className="flex px-3 items-center bg-white row-span-2">
                  Quantity
                </div>
                <div className="flex pl-3 items-center bg-white col-span-2">
                  Buy Rates (Total: USD {totalBuyRate})
                </div>
                <div className="flex pl-3 items-center bg-white col-span-2">
                  Sell Rates (Total: USD {totalSellRate})
                </div>
                <div className="bg-white row-span-2"></div>
                <div className="flex px-3 items-center bg-white">
                  Unit Price
                </div>
                <div className="flex px-3 items-center bg-white">Amount</div>
                <div className="flex px-3 items-center bg-white">
                  Unit Price
                </div>
                <div className="flex px-3 items-center bg-white">Amount</div>
              </div>
              <div className="grid border border-zinc-500 gap-[1px] bg-zinc-500 mx-3 mt-0  grid-cols-10 font-light">
                <div className="flex col-start-1 col-end-3 px-3 items-center bg-white">
                  Basic Ocean Freight
                </div>
                <div className="flex pl-3 items-center bg-white">
                  per equipnment
                </div>
                <div className="flex px-3 items-center bg-white">20GP</div>
                <div className="flex px-3 items-center bg-white">1.00</div>
                <div className="flex px-3 items-center bg-white">
                  USD {freightBuyRate}
                </div>
                <div className="flex px-3 items-center bg-white">
                  USD {freightBuyRate}
                </div>
                <div className="flex px-3 items-center bg-white">
                  <span>USD</span>
                  <input
                    type={"number"}
                    className="border-transparent  focus:border-transparent focus:ring-0 outline-none border-0 w-full dark:bg-transparent"
                    onChange={(e) =>
                      setFreightSellRate(parseInt(e.target.value))
                    }
                    value={freightSellRate}
                  ></input>
                </div>
                <div className="flex px-3 items-center bg-white">
                  USD {freightSellRate}
                </div>
                <div className="flex px-3 items-center bg-white"></div>
              </div>
              {quoteList.length > 0 &&
              quoteList[editID] &&
              quoteList[editID].additionalCosts ? (
                quoteList[editID]?.additionalCosts?.map(
                  (item: any, index: number) => {
                    return (
                      <AdditonalCharge
                        key={item.id}
                        item={item}
                        setTotalSellRate={setTotalSellRate}
                        setTotalBuyRate={setTotalBuyRate}
                        data={data}
                      />
                    );
                  }
                )
              ) : (
                <Loading className="w-5 h-5" />
              )}
              <div className="mt-3 p-3 border-b-1">
                {/* <hr className="absolute h-[0.1rem] bg-indigo-500" /> */}
                {/* <div className="border-b-2 border-indigo-500">
          </div> */}
                <button
                  className="border-2 rounded-full px-6 border-indigo-500"
                  onClick={onAddHandler}
                >
                  Add Charge
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="absolute h-auto w-full flex border-t z-9999 inset-x-0 bottom-0 p-4 justify-between bg-white overscroll-none dark:bg-neutral-800">
          <div className="flex flex-col pl-2 ">
            <span>BUY RATE</span>
            <span>{totalBuyRate}</span>
          </div>
          <div className="flex flex-col border-l-2 pl-5">
            <span>SELL RATE</span>
            <span>{totalSellRate}</span>
          </div>
          <div className="border-l-2 pl-5">
            You Earn USD{" "}
            <span className=" font-semibold">
              {totalSellRate - totalBuyRate}{" "}
            </span>
            <span className="text-[green] font-semibold">
              {" "}
              {(((totalSellRate - totalBuyRate) * 100) / totalBuyRate).toFixed(
                2
              )}{" "}
              %{" "}
            </span>{" "}
            on this rate
          </div>
          <button
            onClick={generateQuote}
            className="order-last bg-blue p-2 px-6 border border-1 rounded-2xl bg-indigo-500 text-white"
          >
            Generate PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
