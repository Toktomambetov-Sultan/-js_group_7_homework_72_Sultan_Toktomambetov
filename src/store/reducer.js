const { ADD_NEW_DISH } = require("./actionsType");

const initialState = {
  dishes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_DISH:
      return { ...state, dishes: [...state.dishes, action.currentDish] };
    default:
      return state;
  }
};

export default reducer;
