import axios from "axios"
import { DELETE_PRODUCT, GET_ERRORS, GET_PRODUCT, GET_PRODUCTLOG, GET_PRODUCTS, GET_PRODUCT_TASK, GET_PRODUCT_TASKS } from "./types";

export const createProduct = (product, history) => async dispatch => {
    try{
        await axios.post(`http://localhost:8080/api/product`, product)
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

export const getProducts = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/product/all")
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data

    })
}

export const getProduct = (productId, history) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8080/api/product/${productId}`)
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        });
    }catch(error){
        history.push("/");
    }
}

export const deleteProduct = id => async dispatch => {
    if(window.confirm("Are you sure?"))
    {
        await axios.delete(`http://localhost:8080/api/product/${id}`)
        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        })

    }
}


export const createProductTask = (
    product_task,
    productIdentifier_id,
    history
  ) => async dispatch => {
    try {
      await axios.post(`http://localhost:8080/api/productTask/${productIdentifier_id}`, product_task);
      history.push(`/projectBoard/${productIdentifier_id}`);
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  };
  
  export const getProductTask = productIdentifier_id => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/api/productTask/${productIdentifier_id}`);
      dispatch({
        type: GET_PRODUCT_TASKS,
        payload: res.data
      });
    } catch (err) {}
  };



/*

export const updateFeature = (feature, history) => async dispatch => {
    try{
        await axios.put(`http://localhost:8080/api/feature`, feature)
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



export const getFeatureTask = (featureTaskId, history) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8080/api/task/${featureTaskId}`)
        dispatch({
            type: GET_FEATURE_TASK,
            payload: res.data
        });
    }catch(error){
        history.push("/");
    }
}
*/