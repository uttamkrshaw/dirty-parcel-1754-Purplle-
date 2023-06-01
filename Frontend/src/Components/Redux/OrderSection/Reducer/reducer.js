import {ADD_CART, REMOVE_ITEM, ADD_FAV, UPDATE_QUANTITY} from "../ActionTypes/actionType"

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    fav: JSON.parse(localStorage.getItem("fav")) || []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CART:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    payload
                ]
            }
        case ADD_FAV:
            return {
                ...state,
                fav: [
                    ...state.fav,
                    payload
                ]
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cart: payload
            }
        case UPDATE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((x) => x._id === payload._id ? {
                    ...x,
                    Quantity: payload.value
                } : x)
            }
        default:
            return state
    }
}
