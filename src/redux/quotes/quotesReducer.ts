import { ADD_CHARGE,CREATE_QUOTE } from "./quotesType";
import { useLocalStorage } from "hooks/useLocalStorage";

// const [quotes,setQuotes] = useLocalStorage("quote_list", [])

const initialState = {
    quoteList: [],
}

const quoteReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case CREATE_QUOTE:
            console.log("inside Create quote");
            
            return {
                ...state,
                quoteList:{
                    rateId: `${action.payload.data.ID}`,
                    addCharge: [
                      {
                        addId: new Date().getTime().toString(),
                        // charge: data.total,
                      },
                    ],
                  },
            }
        case ADD_CHARGE: 
        return {
            ...state,
            quoteList: "charge"
            //  quotes.map((quote) => {
            //     if (quote.rateId == props.data.ID) {
            //       return {...quote, addCharge: [...quote.addCharge, {addId: new Date().getTime().toString()}]}
            //     } else {
            //       console.log("outside");
            //       return quote ;
            //     }
            //   })
            }
            default : 
            return state;
        }
    };

export default quoteReducer;