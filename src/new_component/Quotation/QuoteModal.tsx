import { useLocalStorage } from "hooks/useLocalStorage";
import Loading from "new_component/Loading";
import React, { ReactComponentElement, useEffect, useState } from "react";
import {
  QuoteListProvider,
  useQuoteList,
} from "utils/contexts/quoteListContext";
import ncNanoId from "utils/ncNanoId";
import AdditonalCharge from "./AdditonalCharge";
import Remarks from "./Remarks";

export interface Modal {
  showModal: boolean;
  onclose: void;
  data: {
    ID?: string;

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
  ID?: string;
  sl_name?: string;
  expiry_date?: string;
  from_port?: string;
  service_mode?: string;
  to_port?: string;
  via?: string;
  sl_logo?: string;
  total?: number;
  cargo_size?: string;
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

const QuoteModal = ({ data, quotes, setQuotes, onclose, showModal }: any) => {
  const [freightBuyRate, setFreightBuyRate] = useState(data.total);
  const [freightSellRate, setFreightSellRate] = useState(data.total);
  const [totalBuyRate, setTotalBuyRate] = useState(freightBuyRate);
  const [totalSellRate, setTotalSellRate] = useState(freightSellRate);
  const [showRemarks, setShowRemarks] = useState(false);
  const [editID, setEditID] = useState(-1);

  const { quoteList, addCharge } = useQuoteList();


  useEffect(() => {
    const index = quoteList.findIndex((item: any) => item.quoteId == data.ID);
    setEditID(index);

    // console.log(quotes[editID]?.additionalCosts);
  }, [quoteList, showModal]);

  const onAddHandler = () => {
    addCharge(data.ID);
  };

  const handleOnClose = () => {
    onclose();
  };
  if (!showModal) {
    return null;
  }

  return (
    <div className=" p-10 fixed z-50 inset-0 bg-neutral-200 bg-opacity-10  backdrop-blur-sm border rounded ">
      <div className="flex relative h-full flex-col align-center bg-white border rounded-lg">
        {/* <div className="flex relative h-full flex-col align-center bg-white border rounded-lg"> */}
        <div className="flex h[15%] order-first justify-between border-b p-4 text-2xl ">
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
        <div className="flex relative  h-[70%] flex-col align-center bg-white overflow-y-auto">
          <div className="flex justify-center my-4 px-3 w-full">
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

          {showRemarks ? (
            <Remarks data={data} />
          ) : (
            <div>
              <div className="flex border rounded-2xl mx-5 my-3 mt-10 w-max">
                <span className="flex px-4 items-center border-r-2">
                  Freight
                </span>
                <select className="pr-15 border-0 focus:outline-none">
                  <option>USD</option>
                </select>
                <div className="w-5"></div>
              </div>{" "}
              <div className="grid mx-3 mb-0 pt-2 px-2 grid-cols-10 font-semibold overscroll-y-auto">
                <div className="border p-[2rem] col-start-1 col-end-3 border-zinc-500 row-span-2 flex px-3 items-center">
                  Charges
                </div>
                <div className="flex px-3 items-center border border-zinc-500 row-span-2 ">
                  Basis
                </div>
                <div className="flex px-3 items-center border border-zinc-500  row-span-2">
                  Equipment Type
                </div>
                <div className="flex px-3 items-center border border-zinc-500 row-span-2">
                  Quantity
                </div>
                <div className="flex pl-3 items-center border border-zinc-500 col-span-2">
                  Buy Rates (Total: USD {totalBuyRate})
                </div>
                <div className="flex pl-3 items-center border border-zinc-500 col-span-2">
                  Sell Rates (Total: USD {totalSellRate})
                </div>
                <div className="border border-zinc-500 row-span-2"></div>
                <div className="flex px-3 items-center border border-zinc-500">
                  Unit Price
                </div>
                <div className="flex px-3 items-center border border-zinc-500">
                  Amount
                </div>
                <div className="flex px-3 items-center border border-zinc-500">
                  Unit Price
                </div>
                <div className="flex px-3 items-center border border-zinc-500">
                  Amount
                </div>
              </div>
              <div className="grid mx-3 mt-0 px-2 grid-cols-10 font-light">
                <div className="flex col-start-1 col-end-3 px-3 items-center border border-zinc-500">
                  Basic Ocean Freight
                </div>
                <div className="flex pl-3 items-center border border-zinc-500">
                  per equipnment
                </div>
                <div className="flex px-3 items-center border border-zinc-500">
                  20GP
                </div>
                <div className="flex px-3 items-center border border-zinc-500">
                  1.00
                </div>
                <div className="flex px-3 items-center border border-zinc-500">
                  USD {freightBuyRate}
                </div>
                <div className="flex px-3 items-center border border-zinc-500">
                  USD {freightBuyRate}
                </div>
                <div className="flex px-3 items-center border border-zinc-500">
                  <span>USD</span>
                  <input
                    className="border-b-2 pl-2 Zocus:outline-none w-full"
                    onChange={(e) => setFreightSellRate(e.target.value)}
                    value={freightSellRate}
                  ></input>
                </div>
                <div className="flex px-3 items-center border border-zinc-500">
                  USD {freightSellRate}
                </div>
                <div className="flex px-3 items-center border border-zinc-500">
                  Delete
                </div>
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
                        quotes={quotes}
                        setQuotes={setQuotes}
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

        <div className="absolute h-[15%] w-full flex border-t z-9999 inset-x-0 bottom-0 p-4 justify-between bg-white overscroll-none">
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
            onClick={handleOnClose}
            className="order-last bg-blue p-2 px-6 border border-1 rounded-2xl bg-indigo-500 text-white"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
