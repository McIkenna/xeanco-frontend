
import { combineReducers } from 'redux'
import AboutReducer from './AboutReducer'
import ClientReducer from './ClientReducer'
import errorReducer from './errorReducer'
import ExtraReducer from './ExtraReducer'
import FeatureReducer from './FeatureReducer'
import FeatureTaskReducer from './FeatureTaskReducer'
import IntroReducer from './IntroReducer'
import ProductReducer from './ProductReducer'
import ProductTaskReducer from './ProductTaskReducer'

export default combineReducers ({
    error: errorReducer,
    feature: FeatureReducer,
    featureTask: FeatureTaskReducer,
    product: ProductReducer,
    product_task: ProductTaskReducer,
    about: AboutReducer,
    intro: IntroReducer,
    client: ClientReducer,
    extra: ExtraReducer
})