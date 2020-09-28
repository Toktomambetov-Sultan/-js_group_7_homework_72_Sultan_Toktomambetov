import axiosOrder from "../../axiosOrder";
import {
  FETCH_REQUEST,
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_INIT_ORDERS,
} from "../actionsType";

const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};

const fetchInit = (data) => ({
  type: FETCH_INIT_ORDERS,
  data,
});

const fetchSuccess = () => ({
  type: FETCH_SUCCESS,
});
const fetchError = (error) => ({
  type: FETCH_ERROR,
  error,
});

export const initOrders = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axiosOrder.get("/orders.json");
      dispatch(fetchInit(response.data ? response.data : []));
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosOrder.delete("/orders/" + id + ".json");
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};
