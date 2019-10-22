import axios from "axios";
import { GET_OPERATIONS, LOADING_OPERATIONS } from "./types";
export const getOperations = operationsData => dispatch => {
    axios
    .get("/api/operations")
    .then(res => 
        dispatch({
            type: GET_OPERATIONS,
            payload: res.data
        })
    )
    .catch(err => console.log(err))
}
export const setOperations = () => {
    return {
        type: LOADING_OPERATIONS
    }
}