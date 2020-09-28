const { FETCH_INIT_ORDERS } = require("../actionsType");

const initialState = {
  orders: [],
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INIT_ORDERS:
      return {
        ...state,
        orders: Object.keys(action.data).map((key) => ({
          ...action.data[key],
          id: key,
        })),
      };
    default:
      return { ...state };
  }
};
export default orderReducer;
