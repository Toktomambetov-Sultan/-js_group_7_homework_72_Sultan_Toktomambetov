import axiosOrder from "../../axiosOrder";
import {
  FETCH_REQUEST,
  FETCH_INIT,
  FETCH_ERROR,
  FETCH_SUCCESS,
} from "../actionsType";

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
      const ordersResponse = await axiosOrder.get("/orders.json");
      const orders = Object.keys(ordersResponse.data)
        .map((key) => ({
          dishes: { ...ordersResponse.data[key] },
          id: key,
        }))
        .filter((item) => !!(Object.keys(item.dishes).indexOf(id)+1));
      await orders.forEach(async (item) => {
        await axiosOrder.delete("/orders/" + item.id + "/"+id+".json");
      });

      const response = await axiosOrder.get("/dishes.json");
      dispatch(fetchInit(response.data ? response.data : []));
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const editDish = (currentDish) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosOrder.put("/dishes/" + currentDish.id + ".json", currentDish);
      const response = await axiosOrder.get("/dishes.json");
      console.log(response.data);
      dispatch(fetchInit(response.data ? response.data : []));

      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const addDish = (currentDish) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosOrder.post("/dishes.json", currentDish);
      const response = await axiosOrder.get("/dishes.json");
      dispatch(fetchInit(response.data ? response.data : []));
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};
