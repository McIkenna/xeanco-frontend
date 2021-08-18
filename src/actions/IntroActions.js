import axios from "axios"
import { DELETE_INTRO, GET_ERRORS, GET_INTRO, GET_INTROS} from "./types";

export const createIntro = (intro, history) => async dispatch => {
    try{
        await axios.post(`http://localhost:8080/api/intro`, intro)
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

export const getIntros = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/intro/all")
    dispatch({
        type: GET_INTROS,
        payload: res.data

    })
}

export const getIntro = (id, history) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8080/api/intro/${id}`)
        dispatch({
            type: GET_INTRO,
            payload: res.data
        });
    }catch(error){
        history.push("/");
    }
}

export const deleteIntro = id => async dispatch => {
    if(window.confirm("Are you sure?"))
    {
        await axios.delete(`http://localhost:8080/api/intro/${id}`)
        dispatch({
            type: DELETE_INTRO,
            payload: id
        })
    }
}

export const updateIntro = (intro, history) => async dispatch => {
    try{
        await axios.put(`http://localhost:8080/api/intro`, intro)
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