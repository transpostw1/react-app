import { RATE_LIST_ACTION_TYPE } from "./rateListTypes";
import axios from "axios";
import { AnyAction, Dispatch } from "redux";
import { Action } from "./rateListReducer";
import { ThunkDispatch } from "redux-thunk";
import { postDataProps } from "components/HeroSearchForm/FlightSearchForm";

export const fetchDataRequest = () => {
  return {
    type: RATE_LIST_ACTION_TYPE.FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data: any) => {
  return {
    type: RATE_LIST_ACTION_TYPE.FETCH_DATA_SUCCESS,
    payload: data, // we can change it but ts wont gonna catch it hence we need to add Dispatch<Action>
  };
};

export const fetchDatafailure = (error: any) => {
  return {
    type: RATE_LIST_ACTION_TYPE.FETCH_DATA_FAILURE,
    payload: error,
  };
};

// for async action
export const fetchData = (postData: postDataProps) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    // specify by importing the action
    console.log(postData);
    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
    };
    dispatch(fetchDataRequest);
    axios
      .get(`https://apis.transpost.co/api/rates/select`, {
       params: {
        from_port:postData.from_port,
        to_port: postData.to_port,
        cargo_type: postData.cargo_type,
        Validity: postData.sl_date
       },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        const fetchedData = response.data;
        dispatch(fetchDataSuccess(fetchedData)); // dispatching the action
        console.log(fetchedData);
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDatafailure(errorMsg));
      });
  };
};
function data(arg0: string, data: any, arg2: { key: string }) {
  throw new Error("Function not implemented.");
}
