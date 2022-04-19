import {
    RATE_LIST_ACTION_TYPE
  } from "./rateListTypes";
  
interface fetchDataRequestAction {
  type: RATE_LIST_ACTION_TYPE.FETCH_DATA_REQUEST
}

interface fetchDataSuccessAction {
  type: RATE_LIST_ACTION_TYPE.FETCH_DATA_SUCCESS
  payload: []
}

interface fetchDataFailureAction {
  type: RATE_LIST_ACTION_TYPE.FETCH_DATA_FAILURE
  payload: string
}

export type Action = fetchDataFailureAction | fetchDataRequestAction | fetchDataSuccessAction


  const initialState = {
    loading: false,
    data: [],
    error: "",
  };
  
   const rateListReducer = (state = initialState, action: Action) => {
    switch (action.type) {
      case RATE_LIST_ACTION_TYPE.FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case RATE_LIST_ACTION_TYPE.FETCH_DATA_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case RATE_LIST_ACTION_TYPE.FETCH_DATA_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default: return state
    }
  };
  
  export default rateListReducer
  