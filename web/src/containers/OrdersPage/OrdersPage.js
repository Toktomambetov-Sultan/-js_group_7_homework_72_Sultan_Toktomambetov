import { Container, List } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, initOrders } from "../../store/order/orderActions";
import OrderUnit from "../../components/OrdersPage/OrderUnit/OrderUnit";
import { initDishes } from "../../store/dishes/dishesActions";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.orders);
  const deleteOrderHandler = async (id) => await dispatch(deleteOrder(id));
  useEffect(() => {
    const initOrdersHandler = () => {
      dispatch(initOrders());
    };
    const initDishesHandler = () => dispatch(initDishes());
    initOrdersHandler();
    initDishesHandler();
    const interval = setInterval(() => {
      initOrdersHandler();
      console.log("Orders update.");
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <div>
      <Container>
        <List>
          {ordersState.orders.map((order) => (
            <OrderUnit
              order={order}
              key={order.id}
              onDelete={() => deleteOrderHandler(order.id)}
            />
          ))}
        </List>
      </Container>
    </div>
  );
};

export default OrdersPage;
