import React, { useEffect, useState } from "react";
import { useQuoteList } from "utils/contexts/quoteListContext";

import IquoteList from "./QuoteModal";

interface AdditonalChargeProps {
  item: {
    id: string;
    code: string;
    name: string;
    amount: number;
    currency: string;
    basis: string;
    chargeName: string;
    quantity: number;
    buyRate: number;
    sellRate: number;
    netBuyRate: string;
    netSellRate: string;
  };
  setTotalBuyRate: (prevState: any) => void;
  setTotalSellRate: (prevState: any) => void;
  data: any;
}

const AdditonalCharge = ({
  item,
  setTotalBuyRate,
  setTotalSellRate,
  data,
}: AdditonalChargeProps) => {
  const [chargeName, setChargeName] = useState(item.name || item.chargeName);
  const [basis, setbasis] = useState(item.basis);
  const [buyRate, setBuyRate] = useState(item.amount || item.buyRate || 0);
  const [sellRate, setSellRate] = useState(item.amount || item.sellRate || 0);
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const [netBuyRate, setNetBuyRate] = useState(0);
  const [netSellRate, setNetSellRate] = useState(0);

  const { removeCharge, editCharge } = useQuoteList();

  useEffect(() => {
    setNetBuyRate(quantity * buyRate);
    // props.setTotalBuyRate((prevState:any) => prevState + netBuyRate)
  }, [buyRate]);

  useEffect(() => {
    setNetSellRate(quantity * sellRate);
  }, [sellRate]);


  const sum = (arr:number[],initialvalue:number) => {
    return arr.reduce((pv:number,cv:number) =>{
      return pv+cv;
    },initialvalue)
  }
  
  // after changing buy rates and sell rates
  useEffect(() => {
    editCharge(data.id,item.id,basis,chargeName,buyRate,sellRate,netBuyRate,netSellRate,quantity)

    
    //   setQuotes(
  //     quotes.map((quote: any) => {
  //       if (quote.quoteId == data.id) {
  //         return {
  //           ...quote,
  //           additionalCosts: quote?.additionalCosts?.map((costItem: any) => {
  //             if (costItem.id == item.id) {
  //               return {
  //                 ...costItem,
  //                 basis,
  //                 chargeName,
  //                 buyRate,
  //                 sellRate,
  //                 netBuyRate,
  //                 netSellRate,
  //                 quantity,
  //               };
  //             } else {
  //               return costItem;
  //             }
  //           }),
  //         };
  //       } else {
  //         return quote;
  //       }
  //     })
  //   );
  }, [basis, buyRate, sellRate, quantity, chargeName, netBuyRate, netSellRate]);

  const selectHandler = (e: any) => {
    setbasis(e.target.value);
    setTotalBuyRate((prev: any) => parseInt(prev) + netBuyRate);
    setTotalSellRate((prev: any) => parseInt(prev) + netSellRate);
  };

  return (
    <div className="grid mx-3 mt-0 px-2 grid-cols-10 font-light">
      <div className="border col-start-1 col-end-3 border-zinc-500 ">
        <input
          type="text"
          className="w-full px-3  border-0 focus:ring-0 focus:outline-none dark:bg-transparent"
          placeholder="Charge Name"
          onChange={(e: any) => setChargeName(e.target.value)}
          value={chargeName}
        />
      </div>

      <div className="border border-zinc-500">
        <select
          onChange={selectHandler}
          value={item.basis}
          className="border-0 focus:outline-none w-full dark:bg-transparent"
        >
          <option label="per equipment" value="per equipment">
            per equipment
          </option>
          <option label="per B/L" value="per B/L">
            per B/L
          </option>
          <option label="per shipment" value="per shipment">
            per shipment
          </option>
          <option label="per shipping bill" value="per shipping bill">
            per shipping bill
          </option>
          <option label="per container" value="per container">
            per container
          </option>
          <option
            label="per shipping bill / per container"
            value="per shipping bill / per container"
          >
            per shipping bill / per container
          </option>
          <option label="per carton" value="per carton">
            per carton
          </option>
          <option label="per pallet" value="per pallet">
            per pallet
          </option>
          <option label="per vehicle" value="per vehicle">
            per vehicle
          </option>
          <option label="per shift" value="per shift">
            per shift
          </option>
          <option label="per package" value="per package">
            per package
          </option>
          <option label="per invoice" value="per invoice">
            per invoice
          </option>
          <option label="N/A" value="N/A">
            N/A
          </option>
        </select>
      </div>
      <div className="flex px-3 outline-none items-center border border-zinc-500">
        N/A
      </div>
      <div className="flex items-center border border-zinc-500">
        <input
          type="number"
          defaultValue={quantity}
          value={item.quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="border-transparent  focus:border-transparent focus:ring-0 outline-none border-0 w-full dark:bg-transparent"
        />
      </div>
      <div className="flex px-3 outline-none items-center border border-zinc-500">
        <span>USD</span>
        <input
          type="number"
          placeholder="Buy Rate"
          value={buyRate}
          onChange={(e) => {
            setBuyRate(parseInt(e.target.value));
          }}
          className="border-b-[1px] my-1 focus:border-transparent focus:ring-0 outline-none border-0 w-full dark:bg-transparent"
        ></input>
      </div>
      <div className="flex px-3 outline-none items-center border  border-zinc-500">
        USD {netBuyRate || item.netBuyRate}
      </div>
      <div className="flex px-3 outline-none items-center border border-zinc-500">
        <span>USD</span>
        <input
          type="number"
          placeholder="Sell Rate"
          value={sellRate}
          onChange={(e) => setSellRate(parseInt(e.target.value))}
          className=" border-b-[1px] my-1 focus:border-transparent focus:ring-0 outline-none border-0 w-full dark:bg-transparent"
        ></input>
      </div>
      <div className="flex px-3 outline-none items-center border border-zinc-500">
        USD {netSellRate || item.netSellRate}
      </div>
      <button
        type="button"
        onClick={() => {
          removeCharge(item.id, data.id);
        }}
        className="flex px-3 outline-none items-center border border-zinc-500"
      >
        Delete
      </button>
    </div>
  );
};

export default AdditonalCharge;
