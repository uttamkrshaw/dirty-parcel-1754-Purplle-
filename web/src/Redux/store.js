import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {reducer as UserReducer} from "./UserSection/Reducer/reducer"
import {reducer as AdminReducer} from "./AdminSection/Reducer/reducer"
import {reducer as ProductReducer} from "./ProductSection/Reducer/reducer"
import {reducer as OrderReducer} from "./OrderSection/Reducer/reducer";
let mainReducer = combineReducers({UserReducer, AdminReducer, ProductReducer, OrderReducer});
export const store = legacy_createStore(mainReducer, applyMiddleware(thunk))
