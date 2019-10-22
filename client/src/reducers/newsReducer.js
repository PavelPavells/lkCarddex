import { GET_NEWS, LOADING_NEWS, GET_NOTICE, LOADING_NOTICE } from "../actions/types";
const initialState = {
    news: [],
    notice: [],
    newsLoading: false,
    noticeLoading: false,
}
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: [...action.payload, state.news]
            };
        case LOADING_NEWS:
            return {
                ...state,
                newsLoading: true
            }
        case GET_NOTICE:
            return {
                ...state,
                notice: [...action.payload, state.notice]
            }
        case LOADING_NOTICE:
            return {
                ...state,
                noticeLoading: true
            }
        default: return state;
    }
}