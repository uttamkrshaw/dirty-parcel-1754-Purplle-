import {ADD_CART, REMOVE_ITEM, ADD_FAV} from "../ActionTypes/actionType"

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    fav: JSON.parse(localStorage.getItem("fav")) || []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CART:
            return {
                ...state,
                cart: payload
            }
        case ADD_FAV:
            return {
                ...state,
                fav: payload
            }
        default:
            return state
    }
}
