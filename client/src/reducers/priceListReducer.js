import { GET_PRICE_LIST, LOADING_PRICE_LIST } from "../actions/types";
const initialState = {
    priceList: [],
    priceListLoading: false
}
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PRICE_LIST:
            return {
                ...state,
                priceList: [...action.payload, state.priceList]
            }
        case LOADING_PRICE_LIST:
            return {
                ...state,
                priceListloading: true
            }
        default: return state; 
    }
}