import axios from "axios";
import { GET_USER_CONTROL, LOADING_USER_CONTROL } from "./types";
export const getControl = (changeUserData, history) => dispatch => {
    axios
    .patch("/api/users", changeUserData)
    .then(res => history.push("/control"))
    .then(res => 
        dispatch({
            type: GET_USER_CONTROL,
            payload: res.data
        })    
    )
    .catch(err => console.log(err));
}
export const setControl = () => {
    return {
        type: LOADING_USER_CONTROL
    }
}