import { ADD_CHARGE, CREATE_QUOTE } from "./quotesType";
import { useLocalStorage } from "hooks/useLocalStorage";

// const [quotes,setQuotes] = useLocalStorage("quote_list", [])

const getLocalStorage = () => {
  let quote_list = localStorage.getItem("quote_list");
  if (quote_list) {
    return (quote_list = JSON.parse(
      localStorage.getItem("quote_list") || "[]"
    ));
  } else {
    return [];
  }
};

const initialState = {
  quote: [],
};

const quoteReducer = (state = [], action: any) => {
  switch (action.type) {
    case CREATE_QUOTE:
      console.log(state);

      return [...state, action.payload];

    // case ADD_CHARGE:
    //   return {
    //     ...state,
    //     quoteList: "charge",
    //     //  quotes.map((quote) => {
    //     //     if (quote.rateId == props.data.ID) {
    //     //       return {...quote, addCharge: [...quote.addCharge, {addId: new Date().getTime().toString()}]}
    //     //     } else {
    //     //       console.log("outside");
    //     //       return quote ;
    //     //     }
    //     //   })
    //   };
    default:
      return state;
  }
};

export default quoteReducer;
