import axios from "axios"
import {
    ADD_CART,
    ADD_FAV,
    REMOVE_ITEM
} from "../ActionTypes/actionType"

// --------------->>>>>>>> Custom Action Types For Reducers <<<<<<<<-------------------


export const addToCart = (payload) => {
    return {type: ADD_CART, payload}
}

export const addToFav = (payload) => {
    return {type: ADD_CART, payload}
}
