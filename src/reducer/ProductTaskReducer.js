import {} from "../actions/ProductActions"
import { DELETE_PRODUCT_TASK, GET_PRODUCT_TASK, GET_PRODUCT_TASKS } from "../actions/types"

const initialState = {
    product_tasks: [],
    product_task: {}
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case GET_PRODUCT_TASK:
            return {
                ...state,
                product_task: action.payload
            }
        case GET_PRODUCT_TASKS:
            return {
                ...state,
                product_tasks: action.payload
            }
        case DELETE_PRODUCT_TASK:
            return{
                ...state,
                product_tasks: state.product_tasks.filter(product_task => product_task.productSequence !== action.payload)
            }
            default:
                return state;
    }
}