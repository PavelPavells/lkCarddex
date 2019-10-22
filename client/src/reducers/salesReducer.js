import { GET_SALE_PARTNERS, LOADING_SALE_PARTNERS } from "../actions/types";
const initialState = {
    sales: [],
    salesLoading: false
}
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SALE_PARTNERS:
            return {
                ...state,
                sales: [...action.payload, state.sales]
            };
        case LOADING_SALE_PARTNERS:
            return {
                ...state,
                salesLoading: true
            }
        default: return state;
    }
}