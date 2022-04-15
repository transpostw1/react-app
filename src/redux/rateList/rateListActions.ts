import {
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
  } from "./rateListTypes";
  import axios from "axios";
import { Dispatch } from "redux";
  
  export const fetchDataRequest = () => {
    return {
      type: FETCH_DATA_REQUEST,
    };
  };
  
  export const fetchDataSuccess = (data: []) => {
    return {
      type: FETCH_DATA_SUCCESS,
      payload: data,
    };
  };
  
  export const fetchDatafailure = (error: string) => {
    return {
      type: FETCH_DATA_FAILURE,
      payload: error,
    };
  };
  
  // for async action 
  export const fetchData = () => {
    return (dispatch : Dispatch) => {   // specify by importing the action
        dispatch(fetchDataRequest)
      axios
        .get("https://launchindia.org/transpost/rates.php",{
              method: "GET",
              redirect: "follow",
             })
        .then((response) => {
          const fetchedData = response.users;
          dispatch(fetchDataSuccess(fetchedData))  // dispatching the action
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchDatafailure(errorMsg))
        });
    };
  };
  