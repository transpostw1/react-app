import React, { useEffect, useState } from "react";

import IquoteList from "./QuoteModal";

interface AdditonalChargeProps {
  item: {
    addId: string;
    basis:string;
    chargeName:string;
    quantity:number;
    buyRate:number;
    sellRate:number;
    netBuyRate: string,
    netSellRate: string ,

  };
  removeItem: (addId: string) => void;
  setTotalBuyRate: (prevState: any) => void;
  setTotalSellRate: (prevState: any) => void;
  setQuotes: any;
  quotes: any;
  data: any;
}

const AdditonalCharge = ({
  item,
  removeItem,
  setTotalBuyRate,
  setTotalSellRate,
  setQuotes,
  quotes,
  data,
}: AdditonalChargeProps) => {
  const [chargeName, setChargeName] = useState();
  const [basis, setbasis] = useState();
  const [buyRate, setBuyRate] = useState(0);
  const [sellRate, setSellRate] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [netBuyRate, setNetBuyRate] = useState(0);
  const [netSellRate, setNetSellRate] = useState(0);

  useEffect(() => {
    setNetBuyRate(quantity * buyRate);
    // props.setTotalBuyRate((prevState:any) => prevState + netBuyRate)
  }, [buyRate]);

  useEffect(() => {
    setNetSellRate(quantity * sellRate);
  }, [sellRate]);

  // after changing buy rates and sell rates
  useEffect(() => {
    setQuotes(
      quotes.map((quote: any) => {
        if (quote.rateId == data.ID) {
          return {
            ...quote,
            addCharge: quote.addCharge?.map((charge: any) => {
              if (charge.addId == item.addId) {
                return {
                  ...charge,
                  buyRate,
                  sellRate,
                  netBuyRate,
                  netSellRate,
                  quantity,
                  basis,
                  chargeName,
                };
              } else {
                return charge;
              }
            }),
          };
        } else {
          return quote;
        }
      })
    );
  }, [basis,buyRate,sellRate,quantity,chargeName]);

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
          className="w-full border-0 focus:outline-none"
          placeholder="Charge Name"
          onChange={(e: any) => setChargeName(e.target.value)}
          value={item.chargeName}
        />
      </div>

      <div className="border border-zinc-500">
        <select
          onChange={selectHandler}
          value={item.basis}
          className="border-0 focus:outline-none w-full"
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
          className="border-transparent focus:border-transparent focus:ring-0 outline-none border-0 w-full"
        />
      </div>
      <div className="flex px-3 outline-none items-center border border-zinc-500">
        <span>USD</span>
        <input
        type="number"
        value={item.buyRate}
          onChange={(e) => {
            setBuyRate(parseInt(e.target.value));

          }}

          className="border-transparent focus:border-transparent focus:ring-0 outline-none border-0 w-full"
        ></input>
      </div>
      <div className="flex px-3 outline-none items-center border  border-zinc-500">
        USD {netBuyRate || item.netBuyRate}
      </div>
      <div className="flex px-3 outline-none items-center border border-zinc-500">
        <span>USD</span>
        <input
        type="number"
        value={item.sellRate}
          onChange={(e) => setSellRate(parseInt(e.target.value))}
          className="border-transparent focus:border-transparent focus:ring-0 outline-none border-0 w-full"

        ></input>
      </div>
      <div className="flex px-3 outline-none items-center border border-zinc-500">
        USD {netSellRate || item.netSellRate}
      </div>
      <button
        type="button"
        onClick={() => {
          console.log(item.addId);
          removeItem(item.addId);
        }}
        className="flex px-3 outline-none items-center border border-zinc-500"
      >
        Delete
      </button>
    </div>
  );
};

export default AdditonalCharge;
