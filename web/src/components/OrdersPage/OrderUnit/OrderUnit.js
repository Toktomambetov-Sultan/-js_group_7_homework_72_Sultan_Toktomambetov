import React from "react";
import { Button, Grid, ListItem, makeStyles } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";
import InfoOrderItem from "../InfoOrderItem/InfoOrderItem";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
  order: {
    border: "1px solid " + green[600],
    padding: "20px",
    borderRadius: "5px",
    background: grey[100],
    marginBottom: "5px",
  },
  totalInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
}));

const OrderUnit = ({ order, onDelete }) => {
  const classes = useStyle();
  const dishesState = useSelector((state) => state.dishes);
  const dishes = Object.keys(order)
    .filter((key) => key !== "id")
    .map((key) => ({
      ...dishesState.dishes.find((item) => item.id === key),
      count: order[key],
    }));
  const dishesBlock = dishesState.dishes.length
    ? dishes.map((dish) => (
        <InfoOrderItem
          key={dish.id}
          text1={dish.name + " (x" + dish.count + ")"}
          text2={dish.count * dish.price + "KGS"}
        />
      ))
    : null;
  const totalPrice =
    dishes.reduce((acc, item) => item.price * item.count + acc, 0) + 150;
  return (
    <ListItem className={classes.order}>
      <Grid container>
        <Grid item xs={8}>
          <Grid container direction="column" spacing={1} alignItems="stretch">
            {dishesBlock}
            <InfoOrderItem text1="Delivery" text2="150" />
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.totalInfo}>
          <InfoOrderItem text1="Total price" text2={totalPrice + "KGS"} />
          <Button variant="outlined" color="primary" onClick={onDelete}>
            Complete Order
          </Button>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default OrderUnit;
