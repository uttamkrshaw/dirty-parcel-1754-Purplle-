import {PLACE_ORDER, USER_DETAILS, USER_TOKEN, SIGN_OUT} from "../ActionTypes/actionType"


const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || [],
    isLoading: false,
    isError: false,
    isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
    token: JSON.parse(localStorage.getItem("token")) || "",
    Admin: JSON.parse(localStorage.getItem("admin")) || false
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case USER_DETAILS:
            return {
                ...state,
                user: payload
            }
        case USER_TOKEN:
            return {
                ...state,
                token: payload,
                isAuth: true
            }
        case PLACE_ORDER:
            return {
                ...state,
                user: [
                    ...state.user.order,
                    payload
                ]
            }
        case SIGN_OUT:
            return {
                ...state,
                user: [],
                isAuth: false,
                token: '',
                Admin: false

            }
        default:
            return state
    }
}
