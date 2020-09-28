import {
  DISHES_INIT,
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_REQUEST,
} from "../actionsType";

const initialState = {
  dishes: [],
  isLoading: false,
  error: null,
};
const dishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISHES_INIT:
      return {
        ...state, dishes: Object.keys(action.data).map(key => ({
          ...action.data[key], id: key
        }))
      };
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
export default dishesReducer;