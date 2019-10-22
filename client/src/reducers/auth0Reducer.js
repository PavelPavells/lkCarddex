import { LOGIN_SUCCESS_AUTH0, LOGIN_FAILURE_AUTH0 } from "../actions/types";
const initialState = {
    isAuth0: false
};
export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS_AUTH0:
            return {
                ...state,
                isAuth0: true
            }
        case LOGIN_FAILURE_AUTH0:
            return {
                ...state,
                isAuth0: false
            }
        default: return state
    }
}