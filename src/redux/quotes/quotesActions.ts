import { CREATE_QUOTE,ADD_CHARGE } from "./quotesType";

export const createQuote = ( data:any) => {
    return {
        type: CREATE_QUOTE,
        payload: {data}
    }
}
// export const addCharge = (chargeList) => {
//     return {
//         type: ADD_CHARGE,
//         payload: chargeList
//     }
// }