import axiosOrder from "../axiosOrder";
import { FETCH_REQUEST, FETCH_INIT, FETCH_ERROR, FETCH_SUCCESS } from "./actionsType";

const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};

const fetchInit = (data) => ({
  type: FETCH_INIT,
  data,
});

const fetchSuccess = () => ({
  type: FETCH_SUCCESS,
});
const fetchError = (error) => ({
  type: FETCH_ERROR,
  error,
});

export const initDishes = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axiosOrder.get("/dishes.json");
      dispatch(fetchInit(response.data ? response.data : []));
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const deleteDish = (id) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosOrder.delete("/dishes/" + id + ".json");
      const response = await axiosOrder.get("/dishes.json");
      dispatch(fetchInit(response.data ? response.data : []));
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const editDish = (id, currentDish) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosOrder.put("/dishes/" + id + ".json", currentDish);
      const response = await axiosOrder.get("/dishes.json");
      dispatch(fetchInit(response.data ? response.data : []));
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const addDish = (currenDish) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosOrder.post("/dishes.json", currenDish);
      const response = await axiosOrder.get("/dishes.json");
      dispatch(fetchInit(response.data ? response.data : []));
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};