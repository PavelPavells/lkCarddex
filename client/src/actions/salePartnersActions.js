import axios from "axios";
import { GET_SALE_PARTNERS, LOADING_SALE_PARTNERS } from "./types";
export const getSalePartners = salePartnersData => dispatch => {
    axios
    .get("/api/sale")
    .then(res => 
        dispatch({
            type: GET_SALE_PARTNERS,
            payload: res.data
        })    
    )
    .catch(err => console.log(err));
}
export const setSalePartners = () => {
    return {
        type: LOADING_SALE_PARTNERS
    }
}