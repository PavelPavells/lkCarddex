import axios from "axios";
import { GET_PRICE_LIST, LOADING_PRICE_LIST } from "./types";
export const getPriceList = (changePriceList, history) => dispatch => {
    axios
    .post("/api/price-list", changePriceList)
    .then(res => history.push("/price-list"))
    .then(res => 
        dispatch({
            type: GET_PRICE_LIST,
            payload: res.data
        })    
    )
    .catch(err => console.log(err))
}

export const setPriceList = () => {
    return {
        type: LOADING_PRICE_LIST
    }
}