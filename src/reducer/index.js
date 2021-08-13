
import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import FeatureReducer from './FeatureReducer'
import FeatureTaskReducer from './FeatureTaskReducer'
import ProductReducer from './ProductReducer'
import ProductTaskReducer from './ProductTaskReducer'

export default combineReducers ({
    error: errorReducer,
    feature: FeatureReducer,
    featureTask: FeatureTaskReducer,
    product: ProductReducer,
    product_task: ProductTaskReducer
})