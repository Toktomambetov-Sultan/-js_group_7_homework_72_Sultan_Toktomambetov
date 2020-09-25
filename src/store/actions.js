const { ADD_NEW_DISH } = require("./actionsType");

export const addNewDish = (currentDish) => {
  return { type: ADD_NEW_DISH, currentDish };
};
export const deleteDish = () => {
  
};
