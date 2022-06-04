import { combineReducers } from "redux";
import pageProductsReducer from "./pageProductsReducer";

const rootReducer = combineReducers({
    pageProducts: pageProductsReducer
})

export default rootReducer
