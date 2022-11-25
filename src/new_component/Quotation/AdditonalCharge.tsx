import React, { useEffect, useState } from "react";
import { useQuoteList } from "utils/contexts/quoteListContext";
import Tooltip from "rc-tooltip";

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
  const [buyRate, setBuyRate] = useState(item.buyRate || item.amount || 0);
  const [sellRate, setSellRate] = useState(item.sellRate || item.amount || 0);
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

  const sum = (arr: number[], initialvalue: number) => {
    if (arr.length > 0) {
      return arr.reduce((pv: number, cv: number) => {
        return pv + cv;
      }, initialvalue);
    } else {
      return initialvalue;
    }
  };

  // after changing buy rates and sell rates
  useEffect(() => {
    editCharge(
      data.id,
      item.id,
      basis,
      chargeName,
      buyRate,
      sellRate,
      netBuyRate,
      netSellRate,
      quantity
    );
  }, [basis, buyRate, sellRate, quantity, chargeName, netBuyRate, netSellRate]);

  const selectHandler = (e: any) => {
    setbasis(e.target.value);
    // setTotalBuyRate((prev: any) => parseInt(prev) + netBuyRate);
    // setTotalSellRate((prev: any) => parseInt(prev) + netSellRate);
  };

  return (
    <div className="grid mx-3 mt-0  grid-cols-10 font-light border-b border-x border-zinc-500 gap-[1px] bg-zinc-500">
      <div className=" col-start-1 col-end-3  bg-white ">
        <input
          type="text"
          className="w-full px-3  border-0 focus:ring-0 focus:outline-none dark:bg-transparent"
          placeholder="Charge Name"
          onChange={(e: any) => setChargeName(e.target.value)}
          value={chargeName}
        />
      </div>

      <div className="bg-white outline-none">
        {/* <Tooltip
          placement="top"
          align={{
            points: ['tl', 'tr'],      
            offset: [10, 20],           
            // targetOffset: ['30%','40%'],
            overflow: { adjustX: true, adjustY: true }, 
          }}
          trigger={["hover"]}
          overlay={<span>{item.basis}</span>}
          // overlayClassName="z-max border "
        > */}
          <select
            onChange={selectHandler}
            value={item.basis}
            className="border-0 focus:ring-0 focus:outline-none w-full dark:bg-transparent"
          >
            <option label="" value=""></option>
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
        {/* </Tooltip> */}
      </div>
      <div className="flex px-3 outline-none items-center bg-white">N/A</div>
      <div className="flex items-center bg-white">
        <input
          type="number"
          defaultValue={quantity}
          value={item.quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="border-transparent  focus:border-transparent focus:ring-0 outline-none border-0 w-full dark:bg-transparent"
        />
      </div>
      <div className="flex px-3 outline-none items-center bg-white">
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
      <div className="flex px-3 outline-none items-center bg-white">
        USD {netBuyRate || item.netBuyRate}
      </div>
      <div className="flex px-3 outline-none items-center bg-white">
        <span>USD</span>
        <input
          type="number"
          placeholder="Sell Rate"
          value={sellRate}
          onChange={(e) => setSellRate(parseInt(e.target.value))}
          className=" border-b-[1px] my-1 focus:border-transparent focus:ring-0 outline-none border-0 w-full dark:bg-transparent"
        ></input>
      </div>
      <div className="flex px-3 outline-none items-center bg-white">
        USD {netSellRate || item.netSellRate}
      </div>
      <button
        type="button"
        onClick={() => {
          removeCharge(item.id, data.id);
        }}
        className="flex px-3 outline-none items-center bg-white"
      >
        Delete
      </button>
    </div>
  );
};

export default AdditonalCharge;
