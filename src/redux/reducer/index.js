import { combineReducers } from "redux";
import pageProductsReducer from "./pageProductsReducer";
import checkoutReducer from "./checkoutReducer";

const rootReducer = combineReducers({
    pageProducts: pageProductsReducer,
    checkout: checkoutReducer
})

export default rootReducer
