import { REFRESH_ACCOUNT_DATA } from "../actions/types";
const initialState = {
  user: {},
  loading: false
}; 
export default function(state = initialState, action) {
  switch (action.type) {
    case REFRESH_ACCOUNT_DATA:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}