import { GET_USER_CONTROL, LOADING_USER_CONTROL } from "../actions/types";
const initialState = {
    user: {},
    userLoading: false
}
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER_CONTROL:
            return {
                ...state,
                user: action.payload
            };
        case LOADING_USER_CONTROL:
            return {
                ...state,
                userloading: true
            }
        default: return state
    }
}