import {
  Button,
  Container,
  Grid,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DialogForm from "../../components/DialogForm/DialogForm";
import DishCard from "../../components/DishesPage/DishCard/DishCard";

const useStyle = makeStyles((theme) => ({
  topBlock: {
    borderBottom: "4px solid " + grey[400],
    paddingBottom: theme.spacing(1),
  },
}));
const DishesPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentDish, setCurrentDish] = useState({
    name: "",
    price: "",
    imgSrc: "",
  });
  const closeModalWin = () => setOpenModal(false);
  const openModalWin = () => setOpenModal(true);

  const onSubmit = (event) => {
    event.preventDefault();
    closeModalWin();
  };
  const onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    setCurrentDish((lastData) => ({
      ...lastData,
      [id]: value,
    }));
  };

  const classes = useStyle();
  const state = useSelector((state) => state);
  return (
    <div>
      <div className={classes.topBlock}>
        <Container>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h5">Dishes</Typography>
            </Grid>
            <Grid item>
              <Button onClick={openModalWin} variant="outlined" color="primary">
                Add new dish
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <List>
          {state.dishes.map((dish) => (
            <DishCard src={dish.imgSrc} name={dish.name} price={dish.price} />
          ))}
        </List>
      </Container>
      <DialogForm
        onSubmit={onSubmit}
        onClose={closeModalWin}
        onChange={onChange}
        open={openModal}
        {...currentDish}
      />
    </div>
  );
};

export default DishesPage;
