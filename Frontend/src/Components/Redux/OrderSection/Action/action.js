import axios from "axios"
import {ADD_CART, ADD_FAV, REMOVE_ITEM, UPDATE_QUANTITY} from "../ActionTypes/actionType"

// --------------->>>>>>>> Custom Action Types For Reducers <<<<<<<<-------------------


export const addToCart = (payload) => {
    return {type: ADD_CART, payload}
}

export const addToFav = (payload) => {
    return {type: ADD_FAV, payload}
}

export const quantityChange = (payload) => {
    return {type: UPDATE_QUANTITY, payload}
}

export const deleteItem = (payload) => {
    return {type: REMOVE_ITEM, payload}
}
