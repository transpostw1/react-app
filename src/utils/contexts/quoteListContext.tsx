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

// type quoteList = {
//   quoteId: string;
//   data: any;
// };

type quoteListContext = {
  addQuote: (id: string, data: any) => void;
  quoteList: IquoteList[];
  addCharge: (ID: any) => void;
  editCharge:( ID: string,
    chargeid:string,
    basis: string,
    chargeName: string,
    buyRate: number,
    sellRate: number,
    netBuyRate: number,
    netSellRate: number,
    quantity: number) => void;
  removeCharge: (id: string, ID: string) => void;
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
    console.log("quotes", quotes);
    console.log("quoteList", quoteList);
  }, [quoteList]);

  const addQuote = (id: string, data: any) => {
    setQuoteList((prevState: any) => {
      if (prevState?.findIndex((item: any) => item.ID == id) == -1) {
        return [
          ...prevState,
          {
            quoteId: `${id}`,
            ...data,
          },
        ];
      } else {
        return [...prevState];
      }
    });
  };

  // function for adding charges
  const addChargeHandler = (ID: any) => {
    if (quoteList.length > 0) {
      const result = quoteList.map((quote: any) => {
        if (quote?.quoteId == ID) {
          if (quote.additionalCosts) {
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
          } else {
            return quote;
          }
        }
      });
      return result;
    } else {
      return [];
    }
  };

  const addCharge = (ID: string) => {
    setQuoteList(addChargeHandler(ID));
  };

  // Edit Charge function
  const editCharge = (
    ID: string,
    chargeid:string,
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
        if (quote.quoteId == ID) {
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

    )
  };

  // Remover Charge
  const removeCharge = (id: string, ID: string) => {
    setQuoteList(
      quoteList?.map((quote: any) => {
        if (quote?.quoteId == ID) {
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
        addCharge,
        editCharge,
        removeCharge,
      }}
    >
      {children}
    </quoteListContext.Provider>
  );
};
