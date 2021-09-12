import axios from "axios"
import { GET_USERS, GET_USER, DELETE_USER, GET_ERRORS } from "./types";
import { proxy } from "../components/Constant/Proxy";

export const createUser = (newUser, history) => async dispatch => {
    try{
        await axios.post(`${proxy}/api/register`, newUser)
        history.push("/")
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    }catch(error){
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}