
import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import FeatureReducer from './FeatureReducer'
import FeatureTaskReducer from './FeatureTaskReducer'

export default combineReducers ({
    error: errorReducer,
    feature: FeatureReducer,
    featureTask: FeatureTaskReducer

})