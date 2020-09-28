import {
    ADD_DISH,
    DELETE_DISH,
    CHANGE_MODAL_STATE,
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_ERROR,
    DISHES_INIT_IN_CART,
} from "../actionsType";

const initialState = {
    totalPrice: 0,
    dishesInCart: {},
    delivery: 150,
    isModalOpen: false,
    isLoading: false,
    error: null,
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISH:
            const diff =
                Object.keys(state.dishesInCart).length === 0 ? state.delivery : 0;
            return {
                ...state,
                dishesInCart: {
                    ...state.dishesInCart,
                    [action.dish.id]: state.dishesInCart[action.dish.name] + 1 || 1,
                },
                totalPrice: state.totalPrice + diff + +action.dish.price,
            };
        case DELETE_DISH:
            if (state.dishesInCart[action.dish.id] === 1) {
                const diff =
                    Object.keys(state.dishesInCart).length === 1 ? state.delivery : 0;
                delete state.dishesInCart[action.dishId];
                return {
                    ...state,
                    totalPrice:
                        state.totalPrice -
                        diff -
                        +action.dish.price,
                };
            }
            return {
                ...state,
                dishesInCart: {
                    ...state.dishesInCart,
                    [action.dishId]: state.dishesInCart[action.dish.id] - 1,
                },
                totalPrice:
                    state.totalPrice -
                    +action.dish.price,
            };
        case DISHES_INIT_IN_CART:
            return { ...state, dishesInCart: {}, totalPrice: 0 };
        case CHANGE_MODAL_STATE:
            return { ...state, isModalOpen: action.isOpen };
        case FETCH_REQUEST:
            return { ...state, isLoading: true };
        case FETCH_SUCCESS:
            return { ...state, isLoading: false };
        case FETCH_ERROR:
            return { ...state, isLoading: false, error: action.error };
        default:
            return { ...state };
    }
};
export default cartReducer;
