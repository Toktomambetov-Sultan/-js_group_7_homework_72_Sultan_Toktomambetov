import axiosOrder from "../../axiosOrder";

import {
    ADD_DISH,
    DELETE_DISH,
    CHANGE_MODAL_STATE,
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_ERROR,
    DISHES_INIT_IN_CART,
} from "../actionsType";

export const addDishToCart = (dish) => {
    return {
        type: ADD_DISH,
        dish,
    };
};
export const deleteDishFromCart = (dish) => {
    return {
        type: DELETE_DISH,
        dish,
    };
};
export const changeModalState = (bool) => {
    return {
        type: CHANGE_MODAL_STATE,
        isOpen: bool,
    };
};
export const dishesInitInCart = () => {
    return {
        type: DISHES_INIT_IN_CART,
    };
};
const fetchRequest = () => {
    return { type: FETCH_REQUEST };
};
const fetchSuccess = () => {
    return { type: FETCH_SUCCESS };
};
const fetchError = (error) => {
    return { type: FETCH_ERROR, error };
};
export const orderPost = (data) => {
    return async (dispatch) => {
        dispatch(fetchRequest());
        try {
            await axiosOrder.post("orders.json", data);
            dispatch(fetchSuccess());
        } catch (e) {
            dispatch(fetchError(e));
        }
    };
};