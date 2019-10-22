import axios from "axios";
import { GET_NEWS, LOADING_NEWS, GET_NOTICE, LOADING_NOTICE } from "./types";
export const getNews = newsData => dispatch => {
    axios   
    .get("/api/news")
    .then(res => 
        dispatch({
            type: GET_NEWS,
            payload: res.data
        })
    )
    .catch(err => console.log(err));
}
export const setNews = () => {
    return {
        type: LOADING_NEWS
    }
}
export const getNotice = noticeData => dispatch => {
    axios   
    .get("/api/notice")
    .then(res => 
        dispatch({
            type: GET_NOTICE,
            payload: res.data
        })   
    )
    .catch(err => console.log(err));
}
export const setNotice = () => {
    return {
        type: LOADING_NOTICE
    }
}