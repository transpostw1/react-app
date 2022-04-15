import {
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
  } from "./rateListTypes";
  
interface fetchDataRequestAction {
  type: "FETCH_DATA_REQUEST"
}

interface fetchDataSuccessAction {
  type: "FETCH_DATA_SUCCESS"
  payload: []
}

interface fetchDataFailureAction {
  type: "FETCH_DATA_FAILURE"
  payload: string
}

type Action = fetchDataFailureAction | fetchDataRequestAction | fetchDataSuccessAction


  const initialState = {
    loading: false,
    data: [],
    error: "",
  };
  
   const rateListReducer = (state = initialState, action: Action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_DATA_SUCCESS:
        return {
          loading: false,
          DATA: action.payload,
          error: "",
        };
      case FETCH_DATA_FAILURE:
        return {
          loading: false,
          DATA: [],
          error: action.payload,
        };
      default: return state
    }
  };
  
  export default rateListReducer
  