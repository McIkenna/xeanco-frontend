import { DELETE_FEATURE, GET_FEATURE, GET_FEATURES } from "../actions/types";


const initialState = {
    features: [],
    feature: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case GET_FEATURE:
            return {
                ...state,
                feature: action.payload
            }
        case GET_FEATURES:
            return {
                ...state,
                features: action.payload
            }
        case DELETE_FEATURE:
            return{
                ...state,
                features: state.features.filter(feature => feature.featureIdentifier !== action.payload)
            }
            default:
                return state;
    }
}