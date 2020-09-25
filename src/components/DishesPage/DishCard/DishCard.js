import { Button, Card, List, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  dishCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1, 2),
    "& .image": {
      width: "100px",
      height: "100px",
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
    "& .btns": {
      width: "200px",
      display: "flex",
      justifyContent: "space-between",
    },
  },
}));

const DishCard = (props) => {
  const classes = useStyle();
  return (
    <List item>
      <Card className={classes.dishCard}>
        <div className="image">
          <img src={props.src} alt={props.name} />
        </div>
        <Typography variant="h5">{props.name}</Typography>
        <Typography variant="subtitle1">{props.price} KGS</Typography>
        <div className="btns">
          <Button variant="contained">Edit</Button>
          <Button variant="contained" color="secondary">
            Delete
          </Button>
        </div>
      </Card>
    </List>
  );
};

export default DishCard;
