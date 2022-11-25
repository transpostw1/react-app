import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "hooks/useLocalStorage";

import { IquoteList } from "../../new_component/Quotation/QuoteModal";

type QuoteListProviderProps = {
  children: ReactNode;
};

type quoteListContext = {
  addQuote: (id: string, data: any) => void;
  quoteList: IquoteList[];
  addRemarks: (id: string, data: any) => void;
  addCharge: (id: any) => void;
  editCharge: (
    id: string,
    chargeid: string,
    basis: string,
    chargeName: string,
    buyRate: number,
    sellRate: number,
    netBuyRate: number,
    netSellRate: number,
    quantity: number
  ) => void;
  removeCharge: (id: string, rateId: string) => void;
};

// getLocalStorage
export const getLocalStorage = () => {
  let quote_list = localStorage.getItem("quote_list");
  if (quote_list) {
    return (quote_list = JSON.parse(localStorage.getItem("quote_list") || ""));
  } else {
    return [];
  }
};

const quoteListContext = createContext({} as quoteListContext);

export const useQuoteList = () => {
  return useContext(quoteListContext);
};

export const QuoteListProvider = ({ children }: QuoteListProviderProps) => {
  const [quoteList, setQuoteList] = useState<IquoteList[]>(getLocalStorage);
  const [quotes, setQuotes] = useLocalStorage<IquoteList[]>("quote_list", []);

  useEffect(() => {
    setQuotes(quoteList);
    console.log("quoteList", quoteList);
    console.log("quotes", quotes);
  }, [quoteList]);

  const sum = (arr: number[], initialvalue: number) => {
    return arr.reduce((pv: number, cv: number) => {
      if (typeof pv == "number" && typeof cv == "number") {
        return pv + cv;
      } else {
        return pv;
      }
    }, initialvalue);
  };

  const calculatingTotal = () => {};

  // adding new quote
  const addQuote = (id: string, data: any) => {
    setQuoteList((prevState: any) => {
      if (prevState?.find((item: any) => item.id === id) == null) {
        // console.log("prevState in", prevState);

        return [
          ...prevState,
          {
            quoteId: id,
            sum_buy: data.total,
            sum_sell: data.total,
            isEditing: true,
            
            ...data,
          },
        ];
      } else {
        // console.log("prevState out", prevState);

        return prevState;
      }
    });
  };

  // add remarks and inclusions
  const addRemarks = (id: string, remark: string) => {
    setQuoteList(addRemarksHandler(id, remark));
  };

  const addRemarksHandler = (id: string, remark: string) => {
    if (quoteList.length > 0) {
      const result = quoteList.map((quote: any) => {
        if (quote?.id === id) {
          return {
            ...quote,
            remarks: remark,
          };
        } else {
          return quote;
        }
      });
      console.log("Remarks reuslt", result);
      return result;
    } else {
      return [];
    }
  };

  // function for adding charges
  const addChargeHandler = (id: string) => {
    if (quoteList.length > 0) {
      const result = quoteList.map((quote: any) => {
        if (quote?.id === id) {
          if (quote?.additionalCosts) {
            return {
              ...quote,
              additionalCosts: [
                ...quote?.additionalCosts,
                {
                  id: new Date().getTime().toString(),
                  name: "",
                  code: "",
                  amount: 0,
                  currency: "USD",
                },
              ],
            };
          }
        } else {
          return quote;
        }
      });
      console.log("result", result);

      return result;
    } else {
      return [];
    }
  };

  // add additional charge
  const addCharge = (id: string) => {
    setQuoteList(addChargeHandler(id));
  };

  // Edit Charge function
  const editCharge = (
    id: string,
    chargeid: string,
    basis: string,
    chargeName: string,
    buyRate: number,
    sellRate: number,
    netBuyRate: number,
    netSellRate: number,
    quantity: number
  ) => {
    setQuoteList(
      quoteList.map((quote: any) => {
        if (quote.quoteId === id) {
          return {
            ...quote,
            additionalCosts: quote?.additionalCosts?.map((costItem: any) => {
              if (costItem.id == chargeid) {
                return {
                  ...costItem,
                  basis,
                  chargeName,
                  buyRate,
                  sellRate,
                  netBuyRate,
                  netSellRate,
                  quantity,
                };
              } else {
                return costItem;
              }
            }),
          };
        } else {
          return quote;
        }
      })
    );
  };

  // Remover Charge
  const removeCharge = (id: string, rateId: string) => {
    setQuoteList(
      quoteList?.map((quote: any) => {
        if (quote?.id == rateId) {
          return {
            ...quote,
            additionalCosts: quote?.additionalCosts?.filter(
              (item: any) => item.id !== id
            ),
          };
        } else {
          return quote;
        }
      })
    );
  };

  return (
    <quoteListContext.Provider
      value={{
        quoteList,
        addQuote,
        addRemarks,
        addCharge,
        editCharge,
        removeCharge,
      }}
    >
      {children}
    </quoteListContext.Provider>
  );
};
