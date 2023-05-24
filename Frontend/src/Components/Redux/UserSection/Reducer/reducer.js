import {USER_DETAILS,USER_TOKEN} from "../ActionTypes/actionType"


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
                token: payload
            }
        default:
            return state
    }
}
